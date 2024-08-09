const config = {
  supabaseApiKey: String(import.meta.env.VITE_SUPABASE_API_KEY),
  clerkPublishableKey: String(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY),
};

export default Object.freeze(config);