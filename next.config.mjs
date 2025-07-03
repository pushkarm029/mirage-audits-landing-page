/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for maximum performance
  output: 'export',
  
  // Optimize for static hosting
  trailingSlash: true,
  
  // Image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Performance optimizations
  // Note: optimizeCss requires 'critters' package, removed for now
  
  // Bundle optimization
  webpack: (config, { isServer }) => {
    // Optimize for production
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // Tree shaking optimization
    config.optimization = {
      ...config.optimization,
      sideEffects: false,
    };
    
    return config;
  },
  
  // Compress static assets
  compress: true,

  // Add rewrites for PostHog
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/ingest/decide',
        destination: 'https://us.i.posthog.com/decide',
      },
    ];
  },

  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,

  // Note: swcMinify is now default in Next.js 15+
};

export default nextConfig;
