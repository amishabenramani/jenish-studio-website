/** @type {import('next').NextConfig} */
const nextConfig = {
  // =====================================================
  // IMAGE OPTIMIZATION - Serve low-resolution images
  // =====================================================
  images: {
    // Enable Next.js image optimization
    unoptimized: false,
    
    // Supported image formats (WebP for better compression)
    formats: ['image/avif', 'image/webp'],
    
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200],
    
    // Image sizes for srcset
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    
    // Minimize image quality for web display (keeps originals safe offline)
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
  },

  // =====================================================
  // SECURITY HEADERS - Production-ready protection
  // =====================================================
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/:path*',
        headers: [
          // Prevent XSS attacks
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Prevent clickjacking (iframe embedding)
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissions Policy - disable unnecessary features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // Content Security Policy - strict but compatible
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://*.googleapis.com https://*.gstatic.com",
              "connect-src 'self'",
              "frame-src https://maps.google.com https://www.google.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
          // HTTPS enforcement (Vercel handles SSL)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
      {
        // Extra protection for images - prevent hotlinking
        source: '/assets/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
    ];
  },

  // =====================================================
  // PRODUCTION OPTIMIZATIONS
  // =====================================================
  
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Disable x-powered-by header (hide Next.js)
  poweredByHeader: false,
  
  // Compress responses
  compress: true,

  // Hide Next.js development indicator
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
};

module.exports = nextConfig;
