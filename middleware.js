import { NextResponse } from 'next/server';

/**
 * =====================================================
 * SECURITY MIDDLEWARE
 * =====================================================
 * 
 * This middleware adds security features:
 * - Prevents direct access to original images
 * - Adds security headers to all responses
 * - Redirects HTTP to HTTPS (handled by Vercel)
 * 
 * Place this file in: middleware.js (root of project)
 */

export function middleware(request) {
  // Get the pathname of the request
  const { pathname } = request.nextUrl;

  // Create response with security headers
  const response = NextResponse.next();

  // =====================================================
  // BLOCK DIRECT ACCESS TO HIGH-RES ORIGINALS
  // =====================================================
  // If you have a separate folder for originals, block access
  if (pathname.startsWith('/originals/') || pathname.startsWith('/private/')) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  // =====================================================
  // BLOCK COMMON SECURITY SCAN PATHS
  // =====================================================
  const blockedPaths = [
    '/wp-admin',
    '/wp-login',
    '/admin',
    '/.env',
    '/.git',
    '/config',
    '/phpinfo',
    '/phpmyadmin',
  ];

  if (blockedPaths.some(path => pathname.toLowerCase().includes(path))) {
    return new NextResponse('Not Found', { status: 404 });
  }

  // =====================================================
  // ADD SECURITY HEADERS
  // =====================================================
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Download-Options', 'noopen');
  
  // Prevent caching of sensitive pages
  if (pathname.includes('/api/')) {
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
  }

  return response;
}

// =====================================================
// CONFIGURE WHICH ROUTES USE MIDDLEWARE
// =====================================================
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
