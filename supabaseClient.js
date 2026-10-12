/**
 * SUPABASE CLIENT MODULE
 * Manages Supabase configuration, connection testing, data fetching, order persistence, and seeding.
 */

const SupabaseService = {
  client: null,
  config: {
    url: localStorage.getItem("amz_supabase_url") || (window.__ENV__ && window.__ENV__.VITE_SUPABASE_URL) || "",
    anonKey: localStorage.getItem("amz_supabase_anon_key") || (window.__ENV__ && window.__ENV__.VITE_SUPABASE_ANON_KEY) || ""
  },

  /**
   * Initializes Supabase client if URL and Anon Key are present
   */
  init() {
    if (this.config.url && this.config.anonKey) {
      try {
        if (window.supabase && typeof window.supabase.createClient === "function") {
          this.client = window.supabase.createClient(this.config.url, this.config.anonKey);
          console.log("[Supabase] Client initialized successfully.");
          return true;
        } else {
          console.warn("[Supabase] Supabase JS library not loaded yet.");
        }
      } catch (err) {
        console.error("[Supabase] Error initializing client:", err);
      }
    }
    return false;
  },

  /**
   * Returns whether credentials are set
   */
  isConfigured() {
    return Boolean(this.config.url && this.config.anonKey);
  },

  /**
   * Save credentials to LocalStorage and re-initialize
   */
  saveCredentials(url, anonKey) {
    this.config.url = url.trim();
    this.config.anonKey = anonKey.trim();
    localStorage.setItem("amz_supabase_url", this.config.url);
    localStorage.setItem("amz_supabase_anon_key", this.config.anonKey);
    return this.init();
  },

  /**
   * Test current connection by querying the products table
   */
  async testConnection() {
    if (!this.client) {
      const initialized = this.init();
      if (!initialized) {
        return { success: false, message: "Please enter your Supabase URL and Anon Key first." };
      }
    }

    try {
      const { data, error } = await this.client.from("products").select("id").limit(1);
      if (error) {
        // Table might not exist yet, or permission issue
        if (error.code === "42P01") {
          return {
            success: false,
            message: "Connected to Supabase, but the 'products' table doesn't exist yet! Run the supabase_schema.sql script in your SQL Editor."
          };
        }
        return { success: false, message: `Supabase error (${error.code}): ${error.message}` };
      }
      return { success: true, message: "Connected successfully to Supabase Database!" };
    } catch (err) {
      return { success: false, message: `Connection failed: ${err.message}` };
    }
  },

  /**
   * Fetch all products from Supabase 'products' table
   */
  async fetchProducts() {
    if (!this.client && !this.init()) return null;

    try {
      const { data, error } = await this.client
        .from("products")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.warn("[Supabase] Could not fetch products:", error.message);
        return null;
      }

      if (data && data.length > 0) {
        // Map database column names to App format if needed
        return data.map(item => ({
          id: item.id,
          name: item.name,
          category: item.category,
          brand: item.brand,
          price: parseFloat(item.price),
          originalPrice: item.original_price ? parseFloat(item.original_price) : parseFloat(item.price),
          rating: parseFloat(item.rating || 5),
          reviews: parseInt(item.reviews || 0),
          badge: item.badge,
          isPrime: item.is_prime !== false,
          isDeal: Boolean(item.is_deal),
          inStock: item.in_stock !== false,
          image: item.image,
          description: item.description,
          specs: Array.isArray(item.specs) ? item.specs : []
        }));
      }
      return [];
    } catch (err) {
      console.error("[Supabase] Fetch error:", err);
      return null;
    }
  },

  /**
   * Insert a placed order into Supabase 'orders' table
   */
  async createOrder(orderPayload) {
    if (!this.client && !this.init()) {
      console.log("[Supabase] Not connected, order stored locally only.");
      return { success: false, message: "Supabase not connected." };
    }

    try {
      const { data, error } = await this.client
        .from("orders")
        .insert([
          {
            order_id: orderPayload.orderId,
            customer_name: orderPayload.customerName,
            customer_phone: orderPayload.customerPhone,
            street_address: orderPayload.streetAddress,
            city: orderPayload.city,
            state: orderPayload.state,
            zip_code: orderPayload.zipCode,
            payment_method: orderPayload.paymentMethod,
            items: orderPayload.items,
            subtotal: orderPayload.subtotal,
            tax: orderPayload.tax,
            grand_total: orderPayload.grandTotal,
            status: "Placed - Prime Delivery Scheduled"
          }
        ])
        .select();

      if (error) {
        console.error("[Supabase] Order insert error:", error);
        return { success: false, message: error.message };
      }

      console.log("[Supabase] Order inserted successfully:", data);
      return { success: true, data };
    } catch (err) {
      console.error("[Supabase] Order insert exception:", err);
      return { success: false, message: err.message };
    }
  },

  /**
   * Seed local product catalog into Supabase 'products' table
   */
  async seedProducts(productsList) {
    if (!this.client && !this.init()) {
      return { success: false, message: "Please configure your Supabase credentials first." };
    }

    try {
      const records = productsList.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category,
        brand: p.brand,
        price: p.price,
        original_price: p.originalPrice,
        rating: p.rating,
        reviews: p.reviews,
        badge: p.badge || null,
        is_prime: p.isPrime,
        is_deal: p.isDeal,
        in_stock: p.inStock,
        image: p.image,
        description: p.description,
        specs: p.specs || []
      }));

      const { data, error } = await this.client
        .from("products")
        .upsert(records, { onConflict: "id" });

      if (error) {
        return { success: false, message: error.message };
      }

      return { success: true, count: records.length };
    } catch (err) {
      return { success: false, message: err.message };
    }
  }
};

// Make accessible globally
window.SupabaseService = SupabaseService;
