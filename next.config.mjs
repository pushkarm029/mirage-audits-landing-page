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
      usedExports: true,
      sideEffects: false,
    };
    
    return config;
  },
  
  // Compress static assets
  compress: true
  
  // Note: swcMinify is now default in Next.js 15+
};

export default nextConfig;
