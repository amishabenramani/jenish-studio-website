import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import ImageProtection from './components/ImageProtection'

/**
 * =====================================================
 * METADATA - SEO & Security Configuration
 * =====================================================
 */
export const metadata = {
  title: 'Jenish Studio - Professional Photography',
  description: 'Professional photography services for weddings, babies, families, and special moments. Capturing your precious memories with artistic excellence.',
  keywords: 'photography, wedding photography, baby photography, family portraits, professional photographer, Jenish Studio',
  
  // Favicon and app icons
  icons: {
    icon: '/assets/img/logos/logo-01.jpg',
    apple: '/assets/img/logos/logo-01.jpg',
  },
  
  // Open Graph for social sharing (uses low-res preview)
  openGraph: {
    title: 'Jenish Studio - Professional Photography',
    description: 'Capturing your precious memories with artistic excellence.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jenish Studio',
  },
  
  // Security: Prevent indexing of sensitive pages
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'standard', // Limits image preview size in search
    },
  },
  
  // Verification (add your codes when ready)
  // verification: {
  //   google: 'your-google-verification-code',
  // },
}

/**
 * =====================================================
 * VIEWPORT CONFIGURATION
 * =====================================================
 */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Prevents zoom which can help capture higher res screenshots
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* =====================================================
            FONTS - Preconnect for performance
        ===================================================== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        
        {/* =====================================================
            VENDOR CSS
        ===================================================== */}
        <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        
        {/* =====================================================
            MAIN CSS
        ===================================================== */}
        <link href="/assets/css/main.css" rel="stylesheet" />
        
        {/* =====================================================
            SECURITY META TAGS
        ===================================================== */}
        {/* Prevent phone number detection (iOS) */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* Prevent address detection (iOS) */}
        <meta name="format-detection" content="address=no" />
        
        {/* Prevent email detection (iOS) */}
        <meta name="format-detection" content="email=no" />
        
        {/* Theme color for browser */}
        <meta name="theme-color" content="#000000" />
        
        {/* Prevent caching of sensitive content */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body 
        className="index-page" 
        suppressHydrationWarning={true}
      >
        {/* Global image protection (disables right-click, keyboard shortcuts, etc.) */}
        <ImageProtection />
        
        {/* Page content */}
        {children}
        
        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  )
}