VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_OPENAI_API_KEY=
VITE_APP_ENV=demo

# For a future production deployment, configure these values securely in the hosting environment.
# Do not expose secrets in client-side source code.

# Feature toggles
VITE_ENABLE_AI=false
VITE_ENABLE_PAYMENTS=false
VITE_ENABLE_EXPORTS=true

# Supporting config
VITE_APP_NAME=BrandForge
VITE_APP_BASE_URL=http://localhost:5173

# Database / storage integration to be wired later
VITE_DB_MODE=demo

# Payment credentials will be added when a provider is chosen.
# Example: Stripe, Paddle, Lemon Squeezy, or a custom billing backend.

# AI provider integration will be configured via secure server-side API routes.
# The frontend should only receive provider-neutral capability toggles.

# Keep this file committed as a template. Real secrets belong in the deployment platform environment variables.

# Example: add your own values here if needed during local development.
# VITE_SUPABASE_URL=https://xyzcompany.supabase.co
# VITE_SUPABASE_ANON_KEY=your-anon-key

# Example: enable AI in a secure production deployment.
# VITE_ENABLE_AI=true

# Example: define a production base URL.
# VITE_APP_BASE_URL=https://brandforge.example.com

# Example: enable payment flow when a provider is configured.
# VITE_ENABLE_PAYMENTS=true

# Example: use the demo environment for preview builds.
# VITE_APP_ENV=preview

# Example: connect to a real backend service when available.
# VITE_DB_MODE=production

# Example: set the app name for analytics and identity.
# VITE_APP_NAME=BrandForge Studio

# Example: configure custom export behavior.
# VITE_ENABLE_EXPORTS=true

# Example: disable AI if not configured.
# VITE_ENABLE_AI=false

# Example: turn on secure server-side route usage.
# VITE_ENABLE_PAYMENTS=false

# Example: staging domain.
# VITE_APP_BASE_URL=https://staging.brandforge.app

# Example: preview environment.
# VITE_APP_ENV=staging

# Example: use the demo DB in local development.
# VITE_DB_MODE=demo

# Example: configure provider-specific values in your deployment environment.
# Do not commit secrets to source control.

# Example: if you later integrate AI providers, keep API credentials on the server.
# VITE_OPENAI_API_KEY=your-key

# Example: set a custom storage bucket name.
# VITE_STORAGE_BUCKET=brandforge-assets

# Example: enable stripe mode when configured.
# VITE_ENABLE_PAYMENTS=false

# Example: disable external services until ready.
# VITE_ENABLE_AI=false

# Example: preview export mode.
# VITE_ENABLE_EXPORTS=true

# Example: custom app slug.
# VITE_APP_NAME=BrandForge

# Example: configure base URL for shared links.
# VITE_APP_BASE_URL=http://localhost:5173

# Example: uncomment and set when using Supabase or storage service.
# VITE_SUPABASE_URL=https://xxx.supabase.co
# VITE_SUPABASE_ANON_KEY=abc123

# Example: use a real AI provider only behind a secure backend route.
# VITE_OPENAI_API_KEY=secret

# Example: defaulting real integrations to false until configured.
# VITE_ENABLE_AI=false
# VITE_ENABLE_PAYMENTS=false
# VITE_ENABLE_EXPORTS=true

# End of template
