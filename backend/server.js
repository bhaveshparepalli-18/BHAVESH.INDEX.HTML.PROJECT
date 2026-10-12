/**
 * AMAZON SHOPPING MALL - BACKEND API SERVER
 * Express.js + Supabase PostgreSQL Server
 */

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = process.env.CORS_ORIGIN 
  ? process.env.CORS_ORIGIN.split(',').map(s => s.trim()) 
  : ['http://localhost:5500', 'http://127.0.0.1:5500'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl) or allowed origins
    if (!origin || allowedOrigins.indexOf(origin) !== -1 || origin.startsWith('http://localhost') || origin.startsWith('http://127.0.0.1')) {
      return callback(null, true);
    }
    return callback(null, true); // Dev-friendly fallback
  },
  credentials: true
}));

app.use(express.json());

// Initialize Supabase Admin Client
const supabaseUrl = process.env.SUPABASE_URL || 'https://tjgetluelldqpfsyltda.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

let supabase = null;
if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey, {
      auth: { persistSession: false }
    });
    console.log('✅ [Supabase] Admin client initialized for:', supabaseUrl);
  } catch (err) {
    console.error('❌ [Supabase] Initialization failed:', err.message);
  }
} else {
  console.warn('⚠️ [Supabase] Missing credentials in backend/.env');
}

// ===================================================================
// API ROUTES
// ===================================================================

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    server: 'Amazon Mall Express API',
    timestamp: new Date().toISOString(),
    supabaseConnected: Boolean(supabase)
  });
});

// Root Welcome
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Amazon Mall Backend API</title></head>
      <body style="font-family: sans-serif; padding: 40px; line-height: 1.6; max-width: 600px; margin: 0 auto;">
        <h2>🛒 Amazon Shopping Mall API Server</h2>
        <p>Backend server is up and running on <strong>Port ${PORT}</strong>.</p>
        <ul>
          <li><a href="/api/health">GET /api/health</a> - Server health & Supabase status</li>
          <li><a href="/api/products">GET /api/products</a> - Product catalog</li>
          <li><a href="/api/orders">GET /api/orders</a> - Recent customer orders</li>
        </ul>
      </body>
    </html>
  `);
});

// GET /api/products - Retrieve products from database
app.get('/api/products', async (req, res) => {
  if (!supabase) {
    return res.status(503).json({ error: 'Supabase client not configured in backend/.env' });
  }

  try {
    const { category, search, minPrice, maxPrice } = req.query;
    let query = supabase.from('products').select('*').order('id', { ascending: true });

    if (category && category !== 'All') {
      query = query.ilike('category', category);
    }
    if (minPrice) {
      query = query.gte('price', parseFloat(minPrice));
    }
    if (maxPrice) {
      query = query.lte('price', parseFloat(maxPrice));
    }

    const { data, error } = await query;
    if (error) throw error;

    res.json({ success: true, count: data.length, products: data });
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/orders - Create & persist new customer order
app.post('/api/orders', async (req, res) => {
  const { 
    orderId, 
    customerName, 
    customerPhone, 
    streetAddress, 
    city, 
    state, 
    zipCode, 
    paymentMethod, 
    items, 
    subtotal, 
    tax, 
    grandTotal 
  } = req.body;

  if (!orderId || !items || !grandTotal) {
    return res.status(400).json({ success: false, error: 'Missing required order fields.' });
  }

  if (!supabase) {
    return res.status(503).json({ success: false, error: 'Database client not connected.' });
  }

  try {
    const newOrder = {
      order_id: orderId,
      customer_name: customerName || 'Valued Customer',
      customer_phone: customerPhone || null,
      street_address: streetAddress || null,
      city: city || null,
      state: state || null,
      zip_code: zipCode || null,
      payment_method: paymentMethod || 'card',
      items: items,
      subtotal: parseFloat(subtotal) || 0,
      tax: parseFloat(tax) || 0,
      grand_total: parseFloat(grandTotal) || 0,
      status: 'Placed - Prime Delivery Scheduled',
      created_at: new Date().toISOString()
    };

    const { data, error } = await supabase
      .from('orders')
      .insert([newOrder])
      .select();

    if (error) throw error;

    console.log(`📦 [Order Placed] Order ID: ${orderId} - Total: $${grandTotal}`);
    res.status(201).json({
      success: true,
      message: 'Order created successfully in database',
      order: data[0]
    });
  } catch (err) {
    console.error('Error placing order:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/orders - Retrieve recent orders
app.get('/api/orders', async (req, res) => {
  if (!supabase) {
    return res.status(503).json({ error: 'Supabase client not configured.' });
  }

  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) throw error;
    res.json({ success: true, count: data.length, orders: data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Start Server with auto port fallback
let currentPort = parseInt(PORT, 10) || 5001;

function startServer(portToTry) {
  const server = app.listen(portToTry, () => {
    console.log(`🚀 [Backend Server] Running at: http://localhost:${portToTry}`);
    console.log(`📡 [Health Check] Visit: http://localhost:${portToTry}/api/health`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️ Port ${portToTry} is in use, trying port ${portToTry + 1}...`);
      startServer(portToTry + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(currentPort);
