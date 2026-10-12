/**
 * FRONTEND BROWSER ENVIRONMENT LOADER
 * Automatically synchronizes environment variables for client-side JavaScript.
 */
window.__ENV__ = {
  VITE_APP_NAME: "Amazon Shopping Mall",
  VITE_APP_ENV: "development",
  VITE_APP_VERSION: "1.0.0",

  // Supabase Public Client Credentials (Matches .env)
  VITE_SUPABASE_URL: "https://tjgetluelldqpfsyltda.supabase.co",
  VITE_SUPABASE_ANON_KEY: "your-anon-public-key-here",

  // Feature Flags
  VITE_ENABLE_PRIME_DELIVERY: true,
  VITE_ENABLE_CURRENCY_TOGGLE: true,
  VITE_DEFAULT_CURRENCY: "USD"
};
