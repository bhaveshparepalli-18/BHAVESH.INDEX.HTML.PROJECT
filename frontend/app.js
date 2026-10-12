/**
 * AMAZON SHOPPING MALL - INTERACTIVE STORE ENGINE
 * Complete E-Commerce Catalog, Real-Time Search, Filtering, Cart & Checkout
 */

// ===================================================================
// 1. PRODUCT CATALOG DATABASE (24 Diverse High-Demand Products)
// ===================================================================
const PRODUCTS = [
  {
    id: "amz-elec-01",
    name: "Sony WH-1000XM5 Wireless Noise-Canceling Headphones",
    category: "Electronics",
    brand: "Sony",
    price: 348.00,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 14280,
    badge: "Amazon's Choice",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    description: "Industry-leading noise canceling with two processors and 8 microphones. Ultra-comfortable lightweight design, crystal clear hands-free calling, and up to 30 hours of battery life with quick charge.",
    specs: [
      { key: "Battery Life", value: "Up to 30 Hours" },
      { key: "Noise Cancellation", value: "Active (Dual Processor V1)" },
      { key: "Connectivity", value: "Bluetooth 5.2, 3.5mm jack" },
      { key: "Weight", value: "250 grams" }
    ]
  },
  {
    id: "amz-elec-02",
    name: "Apple MacBook Air 13-inch M2 Chip 256GB SSD Space Gray",
    category: "Electronics",
    brand: "Apple",
    price: 999.00,
    originalPrice: 1099.00,
    rating: 4.9,
    reviews: 8940,
    badge: "Best Seller",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    description: "Strikingly thin design with the lightning-fast Apple M2 chip. Gorgeous 13.6-inch Liquid Retina display, 1080p FaceTime HD camera, MagSafe 3 charging port, and all-day 18-hour battery.",
    specs: [
      { key: "Processor", value: "Apple M2 8-Core CPU" },
      { key: "Memory", value: "8GB Unified RAM" },
      { key: "Storage", value: "256GB High-Speed SSD" },
      { key: "Display", value: "13.6\" Liquid Retina 500 nits" }
    ]
  },
  {
    id: "amz-elec-03",
    name: "Samsung 55\" Class OLED 4K S90C Smart TV with Alexa",
    category: "Electronics",
    brand: "Samsung",
    price: 1297.99,
    originalPrice: 1599.99,
    rating: 4.7,
    reviews: 3240,
    badge: "Limited Deal",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80",
    description: "Expertly tuned OLED technology powered by Quantum Dot. Pure blacks, over a billion shades of lifelike color, 144Hz refresh rate, Dolby Atmos object-tracking sound, and built-in Gaming Hub.",
    specs: [
      { key: "Screen Size", value: "55 Inches" },
      { key: "Display Tech", value: "Quantum Dot OLED 4K" },
      { key: "Refresh Rate", value: "144 Hz Gaming" },
      { key: "Smart Platform", value: "Tizen OS + Alexa Built-in" }
    ]
  },
  {
    id: "amz-elec-04",
    name: "Apple Watch Series 9 GPS 45mm Midnight Aluminum",
    category: "Electronics",
    brand: "Apple",
    price: 359.00,
    originalPrice: 429.00,
    rating: 4.8,
    reviews: 6710,
    badge: "Best Seller",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=600&q=80",
    description: "Powered by the S9 SiP chip, enabling double tap gesture control and brighter Always-On Retina display. Advanced health metrics including ECG, blood oxygen, and crash detection.",
    specs: [
      { key: "Case Size", value: "45mm" },
      { key: "Sensors", value: "Heart Rate, ECG, SpO2, Temperature" },
      { key: "Water Resistance", value: "50 meters WR50" },
      { key: "Battery Life", value: "18-36 hours Low Power" }
    ]
  },
  {
    id: "amz-elec-05",
    name: "Anker Prime 67W GaN Wall Charger 3-Port Compact Foldable",
    category: "Electronics",
    brand: "Anker",
    price: 49.99,
    originalPrice: 65.99,
    rating: 4.8,
    reviews: 12450,
    badge: "Amazon's Choice",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
    description: "Compact 3-in-1 high-speed fast charger with 2 USB-C ports and 1 USB-A port. ActiveShield 2.0 temperature monitoring safeguards laptops, phones, and earbuds simultaneously.",
    specs: [
      { key: "Max Wattage", value: "67W GaN Technology" },
      { key: "Ports", value: "2x USB-C, 1x USB-A" },
      { key: "Compatibility", value: "MacBook, iPhone, Galaxy, iPad" }
    ]
  },
  {
    id: "amz-fash-01",
    name: "Nike Air Max 270 Men's Running & Walking Shoes",
    category: "Fashion",
    brand: "Nike",
    price: 159.99,
    originalPrice: 175.00,
    rating: 4.6,
    reviews: 9810,
    badge: "Best Seller",
    isPrime: true,
    isDeal: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    description: "Features Nike's biggest heel Air unit yet for super-soft ride that feels as impossible as it looks. Breathable knit mesh upper and dual-density foam sole for supreme all-day comfort.",
    specs: [
      { key: "Upper Material", value: "Engineered Breathable Mesh" },
      { key: "Cushioning", value: "Max Air 270 Heel Unit" },
      { key: "Fit", value: "True to Size" },
      { key: "Care", value: "Machine Wash Cold" }
    ]
  },
  {
    id: "amz-fash-02",
    name: "Levi's Men's 511 Slim Fit Stretch Denim Jeans",
    category: "Fashion",
    brand: "Levi's",
    price: 59.99,
    originalPrice: 79.50,
    rating: 4.5,
    reviews: 24100,
    badge: "Amazon's Choice",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    description: "A modern slim with room to move. Added stretch delivers all-day comfort without losing shape. Sits below the waist with a slim leg from hip to ankle.",
    specs: [
      { key: "Fabric", value: "99% Cotton, 1% Elastane" },
      { key: "Closure", value: "Zip fly with button closure" },
      { key: "Fit", value: "Slim from hip to ankle" }
    ]
  },
  {
    id: "amz-fash-03",
    name: "The North Face Thermoball Eco Insulated Hooded Jacket",
    category: "Fashion",
    brand: "The North Face",
    price: 189.95,
    originalPrice: 240.00,
    rating: 4.7,
    reviews: 3120,
    badge: "Limited Deal",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80",
    description: "Lightweight, packable hooded jacket featuring 100% recycled ThermoBall insulation that retains heat even when wet. Durable water-repellent finish for unpredictable weather.",
    specs: [
      { key: "Insulation", value: "ThermoBall Eco Synthetic" },
      { key: "Weather", value: "Water-repellent DWR Finish" },
      { key: "Packable", value: "Stows in chest pocket" }
    ]
  },
  {
    id: "amz-fash-04",
    name: "Ray-Ban Classic Aviator Polarized Sunglasses Gold/Green",
    category: "Fashion",
    brand: "Ray-Ban",
    price: 174.00,
    originalPrice: 221.00,
    rating: 4.7,
    reviews: 18230,
    badge: "Best Seller",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    description: "Iconic metal frame sunglasses originally designed for U.S. aviators. 100% UV400 polarized crystal lenses cut 99% of reflected glare for ultimate eye safety and clarity.",
    specs: [
      { key: "Frame Material", value: "Monel Metal Gold Finish" },
      { key: "Lenses", value: "Crystal Green Polarized (G-15)" },
      { key: "UV Protection", value: "100% UV Protection" }
    ]
  },
  {
    id: "amz-home-01",
    name: "Ninja AF161 Max XL Air Fryer 5.5 Quart with Roast & Bake",
    category: "Home & Kitchen",
    brand: "Ninja",
    price: 129.99,
    originalPrice: 169.99,
    rating: 4.8,
    reviews: 43200,
    badge: "Amazon's Choice",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80",
    description: "Max XL capacity with Max Crisp Technology that delivers 450 degrees of superheated air to cook up to 30% faster with up to 75% less fat than traditional frying methods.",
    specs: [
      { key: "Capacity", value: "5.5 Quarts (Up to 3 lbs wings)" },
      { key: "Programs", value: "Air Fry, Roast, Bake, Reheat, Dehydrate" },
      { key: "Dishwasher Safe", value: "Non-stick basket and crisper" }
    ]
  },
  {
    id: "amz-home-02",
    name: "Nespresso VertuoPlus Deluxe Coffee and Espresso Machine",
    category: "Home & Kitchen",
    brand: "Nespresso",
    price: 149.00,
    originalPrice: 199.95,
    rating: 4.7,
    reviews: 15600,
    badge: "Best Seller",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=600&q=80",
    description: "Single-serve coffee and espresso system with Centrifusion technology. Brews 5 cup sizes at the touch of a button with rich, authentic crema and barcode recognition.",
    specs: [
      { key: "Water Tank", value: "60 oz Extra Large" },
      { key: "Heat-up Time", value: "20 seconds" },
      { key: "Sizes", value: "Espresso, Double, Gran Lungo, Mug, Alto" }
    ]
  },
  {
    id: "amz-home-03",
    name: "Dyson V12 Detect Slim Cordless Vacuum Cleaner",
    category: "Home & Kitchen",
    brand: "Dyson",
    price: 549.99,
    originalPrice: 649.99,
    rating: 4.6,
    reviews: 5800,
    badge: "Limited Deal",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=600&q=80",
    description: "Dyson's lightest intelligent cordless vacuum with illumination technology that reveals invisible dust on hard floors. Piezo sensor measures and counts microscopic particles.",
    specs: [
      { key: "Run Time", value: "Up to 60 Minutes" },
      { key: "Weight", value: "5.2 lbs Ultra Lightweight" },
      { key: "Filtration", value: "Whole-machine HEPA 99.99%" }
    ]
  },
  {
    id: "amz-home-04",
    name: "Instant Pot Pro 10-in-1 Multi-Use Pressure Cooker 6-Quart",
    category: "Home & Kitchen",
    brand: "Instant Pot",
    price: 139.95,
    originalPrice: 169.99,
    rating: 4.7,
    reviews: 21900,
    badge: "Amazon's Choice",
    isPrime: true,
    isDeal: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80",
    description: "Replaces 10 appliances: pressure cooker, slow cooker, sous vide, sauté pan, sterilizer, yogurt maker, food warmer, cake baker, and steamer with 28 customized cooking presets.",
    specs: [
      { key: "Capacity", value: "6 Quarts" },
      { key: "Presets", value: "28 One-Touch Cooking Programs" },
      { key: "Inner Pot", value: "Premium 3-ply stainless steel with handles" }
    ]
  },
  {
    id: "amz-beau-01",
    name: "CeraVe Daily Moisturizing Lotion with Hyaluronic Acid 19oz",
    category: "Beauty",
    brand: "CeraVe",
    price: 17.78,
    originalPrice: 21.99,
    rating: 4.8,
    reviews: 87400,
    badge: "Best Seller",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    description: "Developed with dermatologists, lightweight oil-free moisturizer with 3 essential ceramides and hyaluronic acid for 24-hour hydration. Gentle on sensitive and eczema-prone skin.",
    specs: [
      { key: "Skin Type", value: "Normal to Dry, Sensitive" },
      { key: "Key Ingredients", value: "Ceramides 1, 3, 6-II, Hyaluronic Acid" },
      { key: "Volume", value: "19 Fluid Ounces (562 ml)" }
    ]
  },
  {
    id: "amz-beau-02",
    name: "Dyson Supersonic Hair Dryer Nickel & Copper with Styling Attachments",
    category: "Beauty",
    brand: "Dyson",
    price: 399.99,
    originalPrice: 429.99,
    rating: 4.7,
    reviews: 7490,
    badge: "Amazon's Choice",
    isPrime: true,
    isDeal: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    description: "Engineered for different hair types with fast drying and precision styling. Intelligent heat control protects natural shine without extreme heat damage. Includes 5 magnetic attachments.",
    specs: [
      { key: "Motor", value: "Dyson Digital Motor V9 (110k RPM)" },
      { key: "Heat Settings", value: "4 Precise Heat & 3 Speed Settings" },
      { key: "Attachments", value: "Flyaway, Styling concentrator, Diffuser" }
    ]
  },
  {
    id: "amz-beau-03",
    name: "Dior Sauvage Eau de Parfum 3.4 oz Men's Fragrance",
    category: "Beauty",
    brand: "Dior",
    price: 145.00,
    originalPrice: 165.00,
    rating: 4.9,
    reviews: 13400,
    badge: "Best Seller",
    isPrime: true,
    isDeal: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80",
    description: "A radically fresh composition, dictated by a name that has the ring of a manifesto. Radiant top notes burst with juicy freshness of Reggio di Calabria Bergamot and smoky vanilla accents.",
    specs: [
      { key: "Fragrance Family", value: "Earth & Woody" },
      { key: "Top Notes", value: "Calabrian Bergamot, Pepper" },
      { key: "Base Notes", value: "Papua New Guinean Vanilla, Ambroxan" }
    ]
  },
  {
    id: "amz-sport-01",
    name: "Bowflex SelectTech 552 Adjustable Dumbbells (Pair)",
    category: "Sports",
    brand: "Bowflex",
    price: 379.00,
    originalPrice: 549.00,
    rating: 4.8,
    reviews: 26800,
    badge: "Best Seller",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80",
    description: "Adjusts from 5 to 52.5 lbs in 2.5 lb increments with the turn of a dial. Combines 15 sets of weights into one compact system to maximize your home gym space and workouts.",
    specs: [
      { key: "Weight Range", value: "5 to 52.5 lbs per dumbbell" },
      { key: "Settings", value: "15 Unique Weight Increments" },
      { key: "Dimensions", value: "16.9\" L x 8.3\" W x 9\" H" }
    ]
  },
  {
    id: "amz-sport-02",
    name: "Hydro Flask 32 oz Wide Mouth Insulated Stainless Steel Bottle",
    category: "Sports",
    brand: "Hydro Flask",
    price: 33.71,
    originalPrice: 44.95,
    rating: 4.8,
    reviews: 38900,
    badge: "Amazon's Choice",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    description: "TempShield double-wall vacuum insulation keeps drinks ice cold for 24 hours or piping hot for 12 hours. Made with pro-grade stainless steel that resists flavor transfer.",
    specs: [
      { key: "Capacity", value: "32 Fluid Ounces (946 ml)" },
      { key: "Material", value: "18/8 Pro-Grade Stainless Steel" },
      { key: "Cap Style", value: "Leakproof Flex Cap" }
    ]
  },
  {
    id: "amz-sport-03",
    name: "Fitbit Charge 6 Fitness Tracker with Google Apps & GPS",
    category: "Sports",
    brand: "Fitbit",
    price: 139.95,
    originalPrice: 159.95,
    rating: 4.4,
    reviews: 6200,
    badge: "Limited Deal",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=600&q=80",
    description: "Anticipate your goals with Google Maps, Google Wallet, YouTube Music controls, and 40+ exercise modes. 24/7 heart rate tracking and 7-day battery life.",
    specs: [
      { key: "GPS", value: "Built-in GPS + GLONASS" },
      { key: "Battery Life", value: "Up to 7 Days" },
      { key: "Water Resistance", value: "Water resistant to 50 meters" }
    ]
  },
  {
    id: "amz-book-01",
    name: "Atomic Habits: An Easy & Proven Way to Build Good Habits by James Clear",
    category: "Books",
    brand: "Penguin",
    price: 13.79,
    originalPrice: 27.00,
    rating: 4.9,
    reviews: 124000,
    badge: "Best Seller",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    description: "The #1 New York Times bestseller with over 15 million copies sold. Learn how tiny changes lead to remarkable results through proven psychological frameworks and practical everyday systems.",
    specs: [
      { key: "Format", value: "Hardcover, 320 pages" },
      { key: "Publisher", value: "Avery / Penguin Random House" },
      { key: "Language", value: "English" }
    ]
  },
  {
    id: "amz-book-02",
    name: "The Psychology of Money: Timeless Lessons on Wealth, Greed & Happiness",
    category: "Books",
    brand: "Harriman House",
    price: 14.49,
    originalPrice: 19.99,
    rating: 4.8,
    reviews: 48900,
    badge: "Amazon's Choice",
    isPrime: true,
    isDeal: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    description: "Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life's most important topics.",
    specs: [
      { key: "Format", value: "Paperback, 252 pages" },
      { key: "Author", value: "Morgan Housel" },
      { key: "Bestseller List", value: "Wall Street Journal Bestseller" }
    ]
  },
  {
    id: "amz-groc-01",
    name: "Nespresso Original Line Espresso Pods Variety Pack 50 Capsules",
    category: "Grocery",
    brand: "Nespresso",
    price: 42.50,
    originalPrice: 48.00,
    rating: 4.8,
    reviews: 31200,
    badge: "Amazon's Choice",
    isPrime: true,
    isDeal: false,
    inStock: true,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    description: "Assortment includes Roma, Capriccio, Genova Livanto, Firenze Arpeggio, and Ristretto. 100% recyclable aluminum capsules preserve aroma and guarantee exceptional crema.",
    specs: [
      { key: "Count", value: "50 Roasted Coffee Capsules" },
      { key: "Intensity", value: "Range from 4 to 10" },
      { key: "Roast", value: "Medium to Dark Roasts" }
    ]
  },
  {
    id: "amz-groc-02",
    name: "KIND Bars Dark Chocolate Nuts & Sea Salt Gluten Free 12 Pack",
    category: "Grocery",
    brand: "KIND",
    price: 15.99,
    originalPrice: 19.99,
    rating: 4.7,
    reviews: 19800,
    badge: "Best Seller",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80",
    description: "Whole almonds and peanuts drizzled in dark chocolate with a sprinkle of sea salt. 5g sugar, 6g protein, nutrient-dense ingredients you can see and pronounce.",
    specs: [
      { key: "Package Quantity", value: "12 Individual 1.4 oz Bars" },
      { key: "Dietary", value: "Gluten Free, Non-GMO Project Verified" },
      { key: "Sugar", value: "5g Sugar per serving" }
    ]
  },
  {
    id: "amz-groc-03",
    name: "Encha Ceremonial Grade Organic Matcha Green Tea Powder 60g",
    category: "Grocery",
    brand: "Encha",
    price: 26.95,
    originalPrice: 32.00,
    rating: 4.8,
    reviews: 8400,
    badge: "Limited Deal",
    isPrime: true,
    isDeal: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    description: "First harvest from organic tea farms in Uji, Kyoto, Japan. Vibrant green color, smooth and delicate umami flavor with clean, sustained focus without coffee jitters.",
    specs: [
      { key: "Origin", value: "Uji, Kyoto, Japan" },
      { key: "Grade", value: "First-Harvest Ceremonial Grade" },
      { key: "Certifications", value: "USDA Organic & Non-GMO" }
    ]
  }
];

// ===================================================================
// 2. APPLICATION STATE MANAGEMENT
// ===================================================================
const AppState = {
  products: PRODUCTS,
  filteredProducts: [...PRODUCTS],
  cart: JSON.parse(localStorage.getItem("amz_cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("amz_wishlist")) || [],
  currency: localStorage.getItem("amz_currency") || "USD",
  exchangeRate: 83.2, // 1 USD = 83.2 INR
  currentSlide: 0,
  carouselTimer: null,
  filters: {
    searchQuery: "",
    category: "All",
    minPrice: 0,
    maxPrice: 2000,
    minRating: 0,
    primeOnly: false,
    dealsOnly: false,
    inStockOnly: true,
    sortBy: "featured"
  }
};

// ===================================================================
// 3. CURRENCY FORMATTER
// ===================================================================
function formatPrice(usdAmount) {
  if (AppState.currency === "INR") {
    const inr = Math.round(usdAmount * AppState.exchangeRate);
    return `₹${inr.toLocaleString("en-IN")}`;
  }
  return `$${usdAmount.toFixed(2)}`;
}

// ===================================================================
// 4. DOM ELEMENTS
// ===================================================================
const DOM = {
  productsGrid: document.getElementById("products-grid"),
  emptyState: document.getElementById("empty-state"),
  resultsCountText: document.getElementById("results-count-text"),
  activeQueryBadge: document.getElementById("active-query-badge"),
  searchInput: document.getElementById("search-input"),
  searchClearBtn: document.getElementById("search-clear-btn"),
  searchSubmitBtn: document.getElementById("search-submit-btn"),
  searchCategorySelect: document.getElementById("search-category-select"),
  sortSelect: document.getElementById("sort-select"),
  resetFiltersBtn: document.getElementById("reset-filters-btn"),
  emptyResetBtn: document.getElementById("empty-reset-btn"),
  minPriceInput: document.getElementById("min-price-input"),
  maxPriceInput: document.getElementById("max-price-input"),
  applyPriceBtn: document.getElementById("apply-price-btn"),
  filterPrimeCheckbox: document.getElementById("filter-prime-checkbox"),
  filterDealsOnly: document.getElementById("filter-deals-only"),
  filterInStockOnly: document.getElementById("filter-in-stock-only"),
  cartCount: document.getElementById("cart-count"),
  mobCartBadge: document.getElementById("mob-cart-badge"),
  cartDrawerCount: document.getElementById("cart-drawer-count"),
  cartDrawer: document.getElementById("cart-drawer"),
  cartDrawerOverlay: document.getElementById("cart-drawer-overlay"),
  cartOpenBtn: document.getElementById("cart-open-btn"),
  mobCartBtn: document.getElementById("mob-cart-btn"),
  cartCloseBtn: document.getElementById("cart-close-btn"),
  cartItemsList: document.getElementById("cart-items-list"),
  cartSubtotal: document.getElementById("cart-subtotal"),
  cartTax: document.getElementById("cart-tax"),
  cartShipping: document.getElementById("cart-shipping"),
  cartTotal: document.getElementById("cart-total"),
  shippingProgressFill: document.getElementById("shipping-progress-fill"),
  shippingProgressText: document.getElementById("shipping-progress-text"),
  checkoutBtn: document.getElementById("checkout-btn"),
  checkoutBtnItems: document.getElementById("checkout-btn-items"),
  clearCartBtn: document.getElementById("clear-cart-btn"),
  quickViewModal: document.getElementById("quick-view-modal"),
  quickViewBody: document.getElementById("quick-view-body"),
  quickViewCloseBtn: document.getElementById("quick-view-close-btn"),
  checkoutModal: document.getElementById("checkout-modal"),
  checkoutModalCloseBtn: document.getElementById("checkout-modal-close-btn"),
  checkoutForm: document.getElementById("checkout-form"),
  orderSuccessModal: document.getElementById("order-success-modal"),
  continueShoppingBtn: document.getElementById("continue-shopping-btn"),
  toastContainer: document.getElementById("toast-container"),
  heroCarousel: document.getElementById("hero-carousel"),
  carouselPrev: document.getElementById("carousel-prev"),
  carouselNext: document.getElementById("carousel-next"),
  carouselDots: document.querySelectorAll(".carousel-dots .dot"),
  heroSlides: document.querySelectorAll(".hero-slide"),
  locationPickerBtn: document.getElementById("location-picker-btn"),
  currentLocation: document.getElementById("current-location"),
  currencyToggle: document.getElementById("currency-toggle"),
  wishlistCount: document.getElementById("wishlist-count"),
  backToTopBtn: document.getElementById("back-to-top-btn"),
  mobileFilterOpenBtn: document.getElementById("mobile-filter-open-btn"),
  mallSidebar: document.getElementById("mall-sidebar"),
  // Supabase Elements
  supabaseToggleBtn: document.getElementById("supabase-toggle-btn"),
  supabaseModal: document.getElementById("supabase-modal"),
  supabaseModalCloseBtn: document.getElementById("supabase-modal-close-btn"),
  supabaseConfigForm: document.getElementById("supabase-config-form"),
  inputSupabaseUrl: document.getElementById("input-supabase-url"),
  inputSupabaseKey: document.getElementById("input-supabase-key"),
  testSupabaseBtn: document.getElementById("test-supabase-btn"),
  headerDbStatus: document.getElementById("header-db-status"),
  supabaseStatusBanner: document.getElementById("supabase-status-banner"),
  supabaseStatusIcon: document.getElementById("supabase-status-icon"),
  supabaseStatusTitle: document.getElementById("supabase-status-title"),
  supabaseStatusDesc: document.getElementById("supabase-status-desc"),
  copySqlBtn: document.getElementById("copy-sql-btn"),
  seedProductsBtn: document.getElementById("seed-products-btn")
};

// ===================================================================
// 5. TOAST NOTIFICATION UTILITY
// ===================================================================
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  const iconClass = type === "success" ? "fa-solid fa-circle-check" : "fa-solid fa-circle-info";
  toast.innerHTML = `
    <i class="${iconClass}"></i>
    <span class="toast-message">${message}</span>
  `;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ===================================================================
// 6. RENDER PRODUCTS GRID
// ===================================================================
function renderProducts() {
  const products = AppState.filteredProducts;

  if (products.length === 0) {
    DOM.productsGrid.innerHTML = "";
    DOM.emptyState.style.display = "block";
    DOM.resultsCountText.innerHTML = `Showing <strong>0</strong> products`;
    return;
  }

  DOM.emptyState.style.display = "none";
  DOM.resultsCountText.innerHTML = `Showing <strong>${products.length}</strong> products`;

  if (AppState.filters.searchQuery) {
    DOM.activeQueryBadge.style.display = "inline-block";
    DOM.activeQueryBadge.textContent = `for "${AppState.filters.searchQuery}"`;
  } else {
    DOM.activeQueryBadge.style.display = "none";
  }

  const html = products.map(product => {
    const isWishlisted = AppState.wishlist.includes(product.id);
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    // Badges HTML
    let badgeHtml = "";
    if (product.badge === "Best Seller") {
      badgeHtml = `<span class="badge-tag bestseller">Best Seller</span>`;
    } else if (product.badge === "Amazon's Choice") {
      badgeHtml = `<span class="badge-tag amazonchoice">Amazon's <span>Choice</span></span>`;
    } else if (product.isDeal) {
      badgeHtml = `<span class="badge-tag deal">Deal</span>`;
    }

    // Stars generation
    const fullStars = Math.floor(product.rating);
    const hasHalf = product.rating % 1 >= 0.5;
    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        starsHtml += `<i class="fa-solid fa-star"></i>`;
      } else if (i === fullStars + 1 && hasHalf) {
        starsHtml += `<i class="fa-solid fa-star-half-stroke"></i>`;
      } else {
        starsHtml += `<i class="fa-regular fa-star"></i>`;
      }
    }

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="card-badge-row">
          ${badgeHtml}
        </div>

        <button 
          class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
          onclick="toggleWishlist('${product.id}')" 
          title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}"
          aria-label="Wishlist toggle"
        >
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>

        <div class="card-image-box" onclick="openQuickView('${product.id}')">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80'"
          >
          <button class="card-quick-view-btn" onclick="event.stopPropagation(); openQuickView('${product.id}')">
            <i class="fa-regular fa-eye"></i> Quick View
          </button>
        </div>

        <div class="card-content">
          <span class="card-category-brand">${product.brand} &bull; ${product.category}</span>
          <h3 class="card-title" onclick="openQuickView('${product.id}')" title="${product.name}">
            ${product.name}
          </h3>

          <div class="card-rating-row">
            <span class="stars">${starsHtml}</span>
            <span class="rating-score">${product.rating.toFixed(1)}</span>
            <span class="review-count">(${product.reviews.toLocaleString()})</span>
          </div>

          <div class="card-price-row">
            <span class="current-price">${formatPrice(product.price)}</span>
            ${product.originalPrice > product.price ? `
              <span class="original-price">${formatPrice(product.originalPrice)}</span>
              <span class="discount-percentage">-${discountPercent}%</span>
            ` : ''}
          </div>

          <div class="card-delivery-row">
            ${product.isPrime ? `
              <span class="prime-pill"><i class="fa-solid fa-check"></i>prime</span>
              <span class="delivery-date">FREE Tomorrow</span>
            ` : `
              <span class="delivery-date">Standard Delivery</span>
            `}
          </div>

          <div class="stock-status">
            ${product.inStock ? '<i class="fa-solid fa-check"></i> In Stock' : '<span style="color:#cc0c39;">Temporarily Out of Stock</span>'}
          </div>

          <div class="card-actions">
            <button class="btn-add-cart" onclick="addToCart('${product.id}', 1)">
              <i class="fa-solid fa-cart-plus"></i> Add to Cart
            </button>
            <button class="btn-buy-now" onclick="buyNowDirect('${product.id}')">
              Buy Now
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  DOM.productsGrid.innerHTML = html;
}

// ===================================================================
// 7. FILTERING & SORTING LOGIC
// ===================================================================
function applyFiltersAndSort() {
  let result = [...AppState.products];
  const { searchQuery, category, minPrice, maxPrice, minRating, primeOnly, dealsOnly, inStockOnly, sortBy } = AppState.filters;

  // Search filter
  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase().trim();
    result = result.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Department filter
  if (category && category !== "All") {
    if (category.toLowerCase() === "deals") {
      result = result.filter(p => p.isDeal);
    } else {
      result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
  }

  // Price range filter
  result = result.filter(p => p.price >= minPrice && p.price <= maxPrice);

  // Rating filter
  if (minRating > 0) {
    result = result.filter(p => p.rating >= minRating);
  }

  // Prime Only
  if (primeOnly) {
    result = result.filter(p => p.isPrime);
  }

  // Deals Only
  if (dealsOnly) {
    result = result.filter(p => p.isDeal);
  }

  // In Stock Only
  if (inStockOnly) {
    result = result.filter(p => p.inStock);
  }

  // Sorting
  switch (sortBy) {
    case "price-low":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      result.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;
    case "discount":
      result.sort((a, b) => {
        const discA = (a.originalPrice - a.price) / a.originalPrice;
        const discB = (b.originalPrice - b.price) / b.originalPrice;
        return discB - discA;
      });
      break;
    case "featured":
    default:
      // Keep default priority (e.g. deals/bestsellers first)
      result.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
      break;
  }

  AppState.filteredProducts = result;
  renderProducts();
}

// Helper: Filter by Category programmatically (used by buttons, hero banners, chips)
window.filterByCategory = function(catName) {
  AppState.filters.category = catName;
  DOM.searchCategorySelect.value = catName === "deals" ? "All" : (["Electronics", "Fashion", "Home & Kitchen", "Beauty", "Sports", "Books", "Grocery"].includes(catName) ? catName : "All");

  // Sync category pills in sidebar
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.category.toLowerCase() === catName.toLowerCase());
  });

  // Sync quick chips
  document.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.chip.toLowerCase() === catName.toLowerCase());
  });

  // Sync sub-nav links
  document.querySelectorAll(".quick-nav-links a").forEach(link => {
    link.classList.toggle("active-category", link.dataset.cat.toLowerCase() === catName.toLowerCase());
  });

  applyFiltersAndSort();

  // Scroll to shopping mall section smoothly
  const mallSec = document.getElementById("mall-section");
  if (mallSec) {
    mallSec.scrollIntoView({ behavior: "smooth" });
  }
};

window.filterByDeals = function() {
  filterByCategory("deals");
};

// ===================================================================
// 8. SHOPPING CART ENGINE
// ===================================================================
function saveCart() {
  localStorage.setItem("amz_cart", JSON.stringify(AppState.cart));
  updateCartUI();
}

function updateCartUI() {
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  DOM.cartCount.textContent = totalCount;
  DOM.mobCartBadge.textContent = totalCount;
  DOM.cartDrawerCount.textContent = totalCount;
  DOM.checkoutBtnItems.textContent = totalCount;

  // Calculate financials
  const subtotal = AppState.cart.reduce((sum, item) => {
    const prod = AppState.products.find(p => p.id === item.productId);
    return sum + (prod ? prod.price * item.quantity : 0);
  }, 0);

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  DOM.cartSubtotal.textContent = formatPrice(subtotal);
  DOM.cartTax.textContent = formatPrice(tax);
  DOM.cartTotal.textContent = formatPrice(total);

  // Free Prime Shipping Meter (Threshold $25)
  const shippingThreshold = 25.00;
  if (subtotal >= shippingThreshold || subtotal === 0) {
    DOM.shippingProgressFill.style.width = subtotal === 0 ? "0%" : "100%";
    DOM.shippingProgressText.innerHTML = subtotal === 0 
      ? `Add <strong>$25.00</strong> more for <strong>FREE Prime Delivery</strong>`
      : `<i class="fa-solid fa-circle-check text-green"></i> You have unlocked <strong>FREE Prime Next-Day Delivery!</strong>`;
  } else {
    const needed = (shippingThreshold - subtotal).toFixed(2);
    const pct = Math.min(100, Math.round((subtotal / shippingThreshold) * 100));
    DOM.shippingProgressFill.style.width = `${pct}%`;
    DOM.shippingProgressText.innerHTML = `Add <strong>$${needed}</strong> more for <strong>FREE Prime Delivery</strong>`;
  }

  // Render Cart Item Rows
  if (AppState.cart.length === 0) {
    DOM.cartItemsList.innerHTML = `
      <div class="cart-empty-msg">
        <i class="fa-solid fa-cart-shopping"></i>
        <h4>Your Amazon Cart is empty</h4>
        <p>Your shopping cart is waiting. Give it purpose — fill it with electronics, fashion, books, and deals!</p>
        <button class="btn btn-primary" style="margin-top: 14px;" onclick="closeCart()">Start Shopping</button>
      </div>
    `;
    DOM.checkoutBtn.disabled = true;
    DOM.checkoutBtn.style.opacity = "0.5";
  } else {
    DOM.checkoutBtn.disabled = false;
    DOM.checkoutBtn.style.opacity = "1";

    DOM.cartItemsList.innerHTML = AppState.cart.map(item => {
      const prod = AppState.products.find(p => p.id === item.productId);
      if (!prod) return "";
      const itemTotalPrice = prod.price * item.quantity;

      return `
        <div class="cart-item-row" data-id="${prod.id}">
          <img src="${prod.image}" alt="${prod.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=120&q=80'">
          <div class="cart-item-details">
            <h5 class="cart-item-title">${prod.name}</h5>
            <span class="cart-item-price">${formatPrice(itemTotalPrice)} <small style="color:#666; font-weight:normal;">(${formatPrice(prod.price)} each)</small></span>
            <div class="cart-item-controls">
              <div class="qty-stepper">
                <button class="qty-btn" onclick="updateItemQuantity('${prod.id}', -1)" aria-label="Decrease quantity">-</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" onclick="updateItemQuantity('${prod.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
              <button class="cart-item-remove" onclick="removeFromCart('${prod.id}')">
                <i class="fa-regular fa-trash-can"></i> Delete
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
}

window.addToCart = function(productId, qty = 1) {
  const prod = AppState.products.find(p => p.id === productId);
  if (!prod) return;

  const existing = AppState.cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    AppState.cart.push({ productId, quantity: qty });
  }

  saveCart();
  showToast(`Added "<strong>${prod.name.substring(0, 32)}...</strong>" to Cart!`, "success");
};

window.updateItemQuantity = function(productId, delta) {
  const itemIndex = AppState.cart.findIndex(i => i.productId === productId);
  if (itemIndex > -1) {
    AppState.cart[itemIndex].quantity += delta;
    if (AppState.cart[itemIndex].quantity <= 0) {
      AppState.cart.splice(itemIndex, 1);
      showToast("Item removed from Cart.", "info");
    }
    saveCart();
  }
};

window.removeFromCart = function(productId) {
  AppState.cart = AppState.cart.filter(i => i.productId !== productId);
  saveCart();
  showToast("Item deleted from your cart.", "info");
};

window.buyNowDirect = function(productId) {
  addToCart(productId, 1);
  openCheckoutModal();
};

function openCart() {
  DOM.cartDrawer.classList.add("active");
  DOM.cartDrawerOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  DOM.cartDrawer.classList.remove("active");
  DOM.cartDrawerOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// ===================================================================
// 9. WISHLIST SYSTEM
// ===================================================================
function saveWishlist() {
  localStorage.setItem("amz_wishlist", JSON.stringify(AppState.wishlist));
  DOM.wishlistCount.textContent = AppState.wishlist.length;
}

window.toggleWishlist = function(productId) {
  const prod = AppState.products.find(p => p.id === productId);
  const index = AppState.wishlist.indexOf(productId);
  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    showToast(`Removed from your Wishlist.`, "info");
  } else {
    AppState.wishlist.push(productId);
    showToast(`Added "<strong>${prod ? prod.name.substring(0, 30) : 'Item'}...</strong>" to your Wishlist!`, "success");
  }
  saveWishlist();
  renderProducts();
};

// ===================================================================
// 10. PRODUCT QUICK VIEW MODAL
// ===================================================================
window.openQuickView = function(productId) {
  const prod = AppState.products.find(p => p.id === productId);
  if (!prod) return;

  const discountPercent = Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100);

  // Stars
  const fullStars = Math.floor(prod.rating);
  let starsHtml = "";
  for (let i = 1; i <= 5; i++) {
    starsHtml += i <= fullStars ? `<i class="fa-solid fa-star"></i>` : `<i class="fa-regular fa-star"></i>`;
  }

  // Specs
  const specsHtml = prod.specs ? prod.specs.map(s => `
    <li><strong>${s.key}:</strong> <span>${s.value}</span></li>
  `).join("") : "";

  DOM.quickViewBody.innerHTML = `
    <div class="qv-image-side">
      <img src="${prod.image}" alt="${prod.name}" onerror="this.src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80'">
    </div>
    <div class="qv-details-side">
      <span class="brand-tag">Visit the ${prod.brand} Store</span>
      <h2>${prod.name}</h2>
      <div class="rating-wrap">
        <span class="stars">${starsHtml}</span>
        <strong>${prod.rating.toFixed(1)}</strong>
        <span class="review-count">(${prod.reviews.toLocaleString()} global ratings)</span>
      </div>

      <div class="qv-price-box">
        <div style="display:flex; align-items:baseline; gap:10px;">
          <span class="price-amount">${formatPrice(prod.price)}</span>
          ${prod.originalPrice > prod.price ? `
            <span style="text-decoration:line-through; color:#777;">${formatPrice(prod.originalPrice)}</span>
            <span class="discount-percentage">Save ${discountPercent}%</span>
          ` : ''}
        </div>
        <div style="margin-top:6px; font-size:0.85rem; color:#007185;">
          <i class="fa-solid fa-truck-fast"></i> <strong>FREE Prime Delivery</strong> as soon as Tomorrow
        </div>
      </div>

      <p class="qv-description">${prod.description}</p>

      ${specsHtml ? `
        <h5 style="margin-bottom:6px; font-size:0.88rem;">Key Product Specifications:</h5>
        <ul class="qv-specs-list">${specsHtml}</ul>
      ` : ''}

      <div class="qv-actions">
        <button class="btn btn-primary" style="flex:1;" onclick="addToCart('${prod.id}', 1); closeQuickView();">
          <i class="fa-solid fa-cart-shopping"></i> Add to Cart
        </button>
        <button class="btn btn-outline" style="background:#ffa41c; color:#111; border:none;" onclick="closeQuickView(); buyNowDirect('${prod.id}');">
          Buy Now
        </button>
      </div>
    </div>
  `;

  DOM.quickViewModal.classList.add("active");
  document.body.style.overflow = "hidden";
};

function closeQuickView() {
  DOM.quickViewModal.classList.remove("active");
  document.body.style.overflow = "";
}

// ===================================================================
// 11. CHECKOUT SIMULATION & ORDER CONFIRMATION
// ===================================================================
function openCheckoutModal() {
  if (AppState.cart.length === 0) {
    showToast("Your cart is empty. Add products first!", "danger");
    return;
  }
  closeCart();

  const subtotal = AppState.cart.reduce((sum, item) => {
    const prod = AppState.products.find(p => p.id === item.productId);
    return sum + (prod ? prod.price * item.quantity : 0);
  }, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  document.getElementById("modal-subtotal").textContent = formatPrice(subtotal);
  document.getElementById("modal-tax").textContent = formatPrice(tax);
  document.getElementById("modal-grand-total").textContent = formatPrice(total);

  DOM.checkoutModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  DOM.checkoutModal.classList.remove("active");
  document.body.style.overflow = "";
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  // Generate random Amazon Order ID
  const randomOrderNum = Math.floor(1000000 + Math.random() * 9000000);
  const orderId = `AMZ-${randomOrderNum.toString().slice(0, 3)}-${randomOrderNum.toString().slice(3)}`;
  document.getElementById("generated-order-id").textContent = orderId;

  // Save order to Supabase PostgreSQL database if configured
  if (window.SupabaseService && window.SupabaseService.isConfigured()) {
    const orderPayload = {
      orderId: orderId,
      customerName: e.target.querySelector("input[placeholder='Full Name']")?.value || "Valued Customer",
      customerPhone: e.target.querySelector("input[placeholder='Phone Number']")?.value || "",
      streetAddress: e.target.querySelector("input[placeholder='Street Address']")?.value || "",
      city: e.target.querySelector("input[placeholder='City']")?.value || "",
      state: e.target.querySelector("input[placeholder='State / Region']")?.value || "",
      zipCode: e.target.querySelector("input[placeholder='ZIP Code']")?.value || "",
      paymentMethod: e.target.querySelector("input[name='payment_method']:checked")?.value || "card",
      items: AppState.cart,
      subtotal: parseFloat(document.getElementById("modal-subtotal")?.textContent.replace(/[^0-9.]/g, '') || 0),
      tax: parseFloat(document.getElementById("modal-tax")?.textContent.replace(/[^0-9.]/g, '') || 0),
      grandTotal: parseFloat(document.getElementById("modal-grand-total")?.textContent.replace(/[^0-9.]/g, '') || 0)
    };

    window.SupabaseService.createOrder(orderPayload).then(res => {
      if (res.success) {
        showToast("☁️ Order recorded in Supabase cloud database!", "success");
      }
    });
  }

  // Clear cart
  AppState.cart = [];
  saveCart();

  // Hide checkout modal and show success modal
  closeCheckoutModal();
  DOM.orderSuccessModal.classList.add("active");
  document.body.style.overflow = "hidden";

  showToast(`🎉 Order Placed! Order ID: ${orderId}`, "success");
}

function closeOrderSuccessModal() {
  DOM.orderSuccessModal.classList.remove("active");
  document.body.style.overflow = "";
}

// ===================================================================
// 12. HERO CAROUSEL ROTATION
// ===================================================================
function showSlide(index) {
  AppState.currentSlide = (index + DOM.heroSlides.length) % DOM.heroSlides.length;

  DOM.heroSlides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === AppState.currentSlide);
  });

  DOM.carouselDots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === AppState.currentSlide);
  });
}

function startCarousel() {
  stopCarousel();
  AppState.carouselTimer = setInterval(() => {
    showSlide(AppState.currentSlide + 1);
  }, 5000);
}

function stopCarousel() {
  if (AppState.carouselTimer) {
    clearInterval(AppState.carouselTimer);
  }
}

// ===================================================================
// 13. CURRENCY SWITCHER ($ USD / ₹ INR)
// ===================================================================
function toggleCurrency() {
  if (AppState.currency === "USD") {
    AppState.currency = "INR";
    DOM.currencyToggle.innerHTML = `<span class="flag-icon">🇮🇳</span> <span class="lang-code">EN &bull; ₹</span> <i class="fa-solid fa-caret-down"></i>`;
    showToast("Currency switched to Indian Rupee (INR ₹)", "info");
  } else {
    AppState.currency = "USD";
    DOM.currencyToggle.innerHTML = `<span class="flag-icon">🇺🇸</span> <span class="lang-code">EN &bull; $</span> <i class="fa-solid fa-caret-down"></i>`;
    showToast("Currency switched to US Dollar (USD $)", "info");
  }
  localStorage.setItem("amz_currency", AppState.currency);
  renderProducts();
  updateCartUI();
}

// ===================================================================
// 14. LOCATION PICKER SIMULATION
// ===================================================================
function pickDeliveryLocation() {
  const cities = ["New York 10001", "Seattle 98101", "San Francisco 94105", "Chicago 60601", "Austin 78701", "Los Angeles 90001", "London EC1A", "Mumbai 400001"];
  const current = DOM.currentLocation.textContent;
  const nextCity = cities[(cities.indexOf(current) + 1) % cities.length];
  DOM.currentLocation.textContent = nextCity;
  showToast(`Delivery destination updated to <strong>${nextCity}</strong> (Prime 1-Day Active)`, "success");
}

// ===================================================================
// 15. EVENT LISTENERS INITIALIZATION
// ===================================================================
function initEventListeners() {
  // Search inputs
  DOM.searchInput.addEventListener("input", (e) => {
    AppState.filters.searchQuery = e.target.value;
    DOM.searchClearBtn.style.display = e.target.value ? "flex" : "none";
    applyFiltersAndSort();
  });

  DOM.searchClearBtn.addEventListener("click", () => {
    DOM.searchInput.value = "";
    AppState.filters.searchQuery = "";
    DOM.searchClearBtn.style.display = "none";
    applyFiltersAndSort();
  });

  DOM.searchSubmitBtn.addEventListener("click", () => {
    applyFiltersAndSort();
    const mallSec = document.getElementById("mall-section");
    if (mallSec) mallSec.scrollIntoView({ behavior: "smooth" });
  });

  DOM.searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      DOM.searchSubmitBtn.click();
    }
  });

  // Department dropdown in search header
  DOM.searchCategorySelect.addEventListener("change", (e) => {
    filterByCategory(e.target.value);
  });

  // Sort dropdown
  DOM.sortSelect.addEventListener("change", (e) => {
    AppState.filters.sortBy = e.target.value;
    applyFiltersAndSort();
  });

  // Category pills in sidebar
  document.querySelectorAll(".cat-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      filterByCategory(btn.dataset.category);
    });
  });

  // Quick chips
  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      filterByCategory(chip.dataset.chip);
    });
  });

  // Sub-nav links
  document.querySelectorAll(".quick-nav-links a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      filterByCategory(link.dataset.cat);
    });
  });

  // Price range apply button
  DOM.applyPriceBtn.addEventListener("click", () => {
    const min = parseFloat(DOM.minPriceInput.value) || 0;
    const max = parseFloat(DOM.maxPriceInput.value) || 2000;
    if (min > max) {
      showToast("Minimum price cannot exceed maximum price.", "danger");
      return;
    }
    AppState.filters.minPrice = min;
    AppState.filters.maxPrice = max;
    applyFiltersAndSort();
  });

  // Star ratings in sidebar
  document.querySelectorAll(".star-rating-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".star-rating-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.filters.minRating = parseFloat(btn.dataset.minRating) || 0;
      applyFiltersAndSort();
    });
  });

  // Checkbox filters
  DOM.filterPrimeCheckbox.addEventListener("change", (e) => {
    AppState.filters.primeOnly = e.target.checked;
    applyFiltersAndSort();
  });

  DOM.filterDealsOnly.addEventListener("change", (e) => {
    AppState.filters.dealsOnly = e.target.checked;
    applyFiltersAndSort();
  });

  DOM.filterInStockOnly.addEventListener("change", (e) => {
    AppState.filters.inStockOnly = e.target.checked;
    applyFiltersAndSort();
  });

  // Reset Filters
  const resetAll = () => {
    AppState.filters = {
      searchQuery: "",
      category: "All",
      minPrice: 0,
      maxPrice: 2000,
      minRating: 0,
      primeOnly: false,
      dealsOnly: false,
      inStockOnly: true,
      sortBy: "featured"
    };
    DOM.searchInput.value = "";
    DOM.searchClearBtn.style.display = "none";
    DOM.searchCategorySelect.value = "All";
    DOM.sortSelect.value = "featured";
    DOM.minPriceInput.value = 0;
    DOM.maxPriceInput.value = 1500;
    DOM.filterPrimeCheckbox.checked = false;
    DOM.filterDealsOnly.checked = false;
    DOM.filterInStockOnly.checked = true;

    document.querySelectorAll(".cat-pill").forEach(p => p.classList.toggle("active", p.dataset.category === "All"));
    document.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c.dataset.chip === "All"));
    document.querySelectorAll(".quick-nav-links a").forEach(l => l.classList.toggle("active-category", l.dataset.cat === "All"));
    document.querySelectorAll(".star-rating-btn").forEach(b => b.classList.remove("active"));

    applyFiltersAndSort();
    showToast("All filters have been reset.", "info");
  };

  DOM.resetFiltersBtn.addEventListener("click", resetAll);
  DOM.emptyResetBtn.addEventListener("click", resetAll);

  // Cart Drawer open / close
  DOM.cartOpenBtn.addEventListener("click", openCart);
  DOM.mobCartBtn.addEventListener("click", openCart);
  DOM.cartCloseBtn.addEventListener("click", closeCart);
  DOM.cartDrawerOverlay.addEventListener("click", closeCart);

  DOM.clearCartBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to remove all items from your cart?")) {
      AppState.cart = [];
      saveCart();
      showToast("Cart has been cleared.", "info");
    }
  });

  DOM.checkoutBtn.addEventListener("click", openCheckoutModal);

  // Quick View Modal Close
  DOM.quickViewCloseBtn.addEventListener("click", closeQuickView);
  DOM.quickViewModal.addEventListener("click", (e) => {
    if (e.target === DOM.quickViewModal) closeQuickView();
  });

  // Checkout Modal
  DOM.checkoutModalCloseBtn.addEventListener("click", closeCheckoutModal);
  DOM.checkoutModal.addEventListener("click", (e) => {
    if (e.target === DOM.checkoutModal) closeCheckoutModal();
  });
  DOM.checkoutForm.addEventListener("submit", handleCheckoutSubmit);

  // Success Modal
  DOM.continueShoppingBtn.addEventListener("click", closeOrderSuccessModal);
  DOM.orderSuccessModal.addEventListener("click", (e) => {
    if (e.target === DOM.orderSuccessModal) closeOrderSuccessModal();
  });

  // Hero Carousel
  DOM.carouselPrev.addEventListener("click", () => {
    showSlide(AppState.currentSlide - 1);
    startCarousel();
  });
  DOM.carouselNext.addEventListener("click", () => {
    showSlide(AppState.currentSlide + 1);
    startCarousel();
  });
  DOM.carouselDots.forEach(dot => {
    dot.addEventListener("click", () => {
      showSlide(parseInt(dot.dataset.index));
      startCarousel();
    });
  });

  DOM.heroCarousel.addEventListener("mouseenter", stopCarousel);
  DOM.heroCarousel.addEventListener("mouseleave", startCarousel);

  // Location Picker & Currency
  DOM.locationPickerBtn.addEventListener("click", pickDeliveryLocation);
  DOM.currencyToggle.addEventListener("click", toggleCurrency);

  // Back to Top button
  DOM.backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mobile Filter Drawer toggle
  if (DOM.mobileFilterOpenBtn && DOM.mallSidebar) {
    DOM.mobileFilterOpenBtn.addEventListener("click", () => {
      DOM.mallSidebar.classList.toggle("active-mobile");
    });
  }

  // Wishlist Header button click
  const wishlistBtn = document.getElementById("wishlist-btn");
  const mobWishlistBtn = document.getElementById("mob-wishlist-btn");
  const showWishlistToast = () => {
    if (AppState.wishlist.length === 0) {
      showToast("Your wishlist is currently empty. Tap the heart on any product to save it!", "info");
    } else {
      showToast(`You have ${AppState.wishlist.length} item(s) saved in your Wishlist.`, "success");
    }
  };
  if (wishlistBtn) wishlistBtn.addEventListener("click", showWishlistToast);
  if (mobWishlistBtn) mobWishlistBtn.addEventListener("click", showWishlistToast);

  // Today Deals Banner button
  const dealsBannerBtn = document.getElementById("btn-deals-banner");
  if (dealsBannerBtn) dealsBannerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    filterByDeals();
  });

  // Account / Sign-in simulation
  const accountBtn = document.getElementById("account-btn");
  if (accountBtn) {
    accountBtn.addEventListener("click", () => {
      showToast("Signed in as Bhavesh (Amazon Prime Member)", "info");
    });
  }

  // Orders button simulation
  const ordersBtn = document.getElementById("orders-btn");
  if (ordersBtn) {
    ordersBtn.addEventListener("click", () => {
      showToast("All your recent packages are on schedule with Prime Delivery.", "info");
    });
  }

  // All Departments Drawer button in subnav
  const allDeptBtn = document.getElementById("all-departments-btn");
  if (allDeptBtn) {
    allDeptBtn.addEventListener("click", () => {
      filterByCategory("All");
      showToast("Showing all 8 Amazon Mall departments.", "info");
    });
  }

  // Payment radio option highlight
  document.querySelectorAll(".payment-card").forEach(card => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".payment-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
    });
  });

  // Supabase Modal & Connection Controls
  if (DOM.supabaseToggleBtn && DOM.supabaseModal) {
    DOM.supabaseToggleBtn.addEventListener("click", () => {
      if (window.SupabaseService) {
        DOM.inputSupabaseUrl.value = window.SupabaseService.config.url || "";
        DOM.inputSupabaseKey.value = window.SupabaseService.config.anonKey || "";
        updateSupabaseUIStatus(window.SupabaseService.isConfigured());
      }
      DOM.supabaseModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    DOM.supabaseModalCloseBtn.addEventListener("click", () => {
      DOM.supabaseModal.classList.remove("active");
      document.body.style.overflow = "";
    });

    DOM.supabaseModal.addEventListener("click", (e) => {
      if (e.target === DOM.supabaseModal) {
        DOM.supabaseModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });

    DOM.supabaseConfigForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const url = DOM.inputSupabaseUrl.value.trim();
      const key = DOM.inputSupabaseKey.value.trim();
      if (!url || !key) {
        showToast("Please provide both URL and Anon Key.", "danger");
        return;
      }

      window.SupabaseService.saveCredentials(url, key);
      showToast("Connecting to Supabase...", "info");
      const result = await window.SupabaseService.testConnection();
      if (result.success) {
        updateSupabaseUIStatus(true);
        showToast("🎉 " + result.message, "success");
        loadProductsFromSupabaseIfAvailable();
      } else {
        updateSupabaseUIStatus(false);
        showToast("⚠️ " + result.message, "danger");
      }
    });

    DOM.testSupabaseBtn.addEventListener("click", async () => {
      const url = DOM.inputSupabaseUrl.value.trim();
      const key = DOM.inputSupabaseKey.value.trim();
      if (url && key) {
        window.SupabaseService.saveCredentials(url, key);
      }
      showToast("Testing database connection...", "info");
      const result = await window.SupabaseService.testConnection();
      if (result.success) {
        updateSupabaseUIStatus(true);
        showToast("✅ " + result.message, "success");
      } else {
        showToast("❌ " + result.message, "danger");
      }
    });

    DOM.seedProductsBtn.addEventListener("click", async () => {
      if (!window.SupabaseService.isConfigured()) {
        showToast("Please save valid Supabase credentials first.", "danger");
        return;
      }
      showToast("Uploading 24 products to Supabase...", "info");
      const result = await window.SupabaseService.seedProducts(PRODUCTS);
      if (result.success) {
        showToast(`🎉 Successfully seeded ${result.count} products into Supabase!`, "success");
        loadProductsFromSupabaseIfAvailable();
      } else {
        showToast("⚠️ Error seeding products: " + result.message, "danger");
      }
    });

    DOM.copySqlBtn.addEventListener("click", () => {
      const sqlSchema = `-- Run in Supabase SQL Editor
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY, name TEXT NOT NULL, category TEXT NOT NULL,
  brand TEXT NOT NULL, price NUMERIC(10,2) NOT NULL, original_price NUMERIC(10,2),
  rating NUMERIC(3,2), reviews INTEGER, badge TEXT, is_prime BOOLEAN DEFAULT true,
  is_deal BOOLEAN DEFAULT false, in_stock BOOLEAN DEFAULT true, image TEXT,
  description TEXT, specs JSONB DEFAULT '[]'::jsonb, created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS public.orders (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  order_id TEXT UNIQUE NOT NULL, customer_name TEXT NOT NULL, customer_phone TEXT,
  street_address TEXT, city TEXT, state TEXT, zip_code TEXT, payment_method TEXT,
  items JSONB NOT NULL, subtotal NUMERIC(10,2), tax NUMERIC(10,2),
  grand_total NUMERIC(10,2), status TEXT DEFAULT 'Processing', created_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public Read Products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Public Insert Products" ON public.products FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Read Orders" ON public.orders FOR SELECT USING (true);`;
      
      navigator.clipboard.writeText(sqlSchema).then(() => {
        showToast("📋 Schema copied! Paste into Supabase SQL Editor & Run.", "success");
      }).catch(() => {
        showToast("Please open supabase_schema.sql to copy the SQL script.", "info");
      });
    });
  }
}

// ===================================================================
// 16. SUPABASE SYNCHRONIZATION HELPERS
// ===================================================================
function updateSupabaseUIStatus(isConnected) {
  if (DOM.headerDbStatus && DOM.supabaseStatusBanner) {
    if (isConnected) {
      DOM.headerDbStatus.innerHTML = `<i class="fa-solid fa-circle" style="color:#10b981; font-size:0.6rem;"></i> DB: Online`;
      DOM.supabaseStatusBanner.className = "supabase-status-banner connected";
      DOM.supabaseStatusIcon.className = "fa-solid fa-circle-check text-green";
      DOM.supabaseStatusTitle.textContent = "Status: Connected to Supabase PostgreSQL";
      DOM.supabaseStatusDesc.textContent = "Live cloud database active. Products and orders are synced.";
    } else {
      DOM.headerDbStatus.innerHTML = `<i class="fa-solid fa-database" style="color:#fbbf24; font-size:0.8rem;"></i> DB: Demo`;
      DOM.supabaseStatusBanner.className = "supabase-status-banner disconnected";
      DOM.supabaseStatusIcon.className = "fa-solid fa-circle-dot";
      DOM.supabaseStatusTitle.textContent = "Status: Demo Mode (LocalStorage)";
      DOM.supabaseStatusDesc.textContent = "Connect your Supabase project URL & Anon Key to sync products and orders.";
    }
  }
}

async function loadProductsFromSupabaseIfAvailable() {
  if (window.SupabaseService && window.SupabaseService.isConfigured()) {
    updateSupabaseUIStatus(true);
    const cloudProducts = await window.SupabaseService.fetchProducts();
    if (cloudProducts && cloudProducts.length > 0) {
      AppState.products = cloudProducts;
      AppState.filteredProducts = [...cloudProducts];
      renderProducts();
      showToast(`Loaded ${cloudProducts.length} live products from Supabase database!`, "success");
    }
  } else {
    updateSupabaseUIStatus(false);
  }
}

// ===================================================================
// 17. APPLICATION BOOTSTRAP
// ===================================================================
document.addEventListener("DOMContentLoaded", () => {
  initEventListeners();
  saveWishlist();
  saveCart();
  renderProducts();
  startCarousel();
  loadProductsFromSupabaseIfAvailable();
});
