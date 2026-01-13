'use client';

import Image from 'next/image';

/**
 * =====================================================
 * PROTECTED IMAGE COMPONENT
 * =====================================================
 * 
 * A secure image component that:
 * - Uses Next.js Image optimization (automatic low-res for web)
 * - Adds watermark overlay
 * - Prevents right-click, drag, and selection
 * - Optimizes images for fast loading
 * 
 * Place this in: app/components/ProtectedImage.js
 * 
 * USAGE:
 * import ProtectedImage from './components/ProtectedImage';
 * 
 * <ProtectedImage 
 *   src="/assets/img/Wedding/photo1.jpg"
 *   alt="Wedding Photo"
 *   width={800}
 *   height={600}
 *   watermark={true}
 *   quality={60}
 * />
 * 
 * PROPS:
 * - src: Image source path (required)
 * - alt: Alt text for accessibility (required)
 * - width: Image width (required for optimization)
 * - height: Image height (required for optimization)
 * - watermark: Show watermark overlay (default: true)
 * - quality: Image quality 1-100 (default: 60 for web protection)
 * - className: Additional CSS classes
 * - priority: Load image with priority (for above-fold images)
 * - fill: Use fill mode instead of fixed dimensions
 */

export default function ProtectedImage({
  src,
  alt,
  width,
  height,
  watermark = true,
  quality = 60, // Low quality for web protection - keep originals offline!
  className = '',
  priority = false,
  fill = false,
  sizes = '100vw',
  style = {},
  ...props
}) {
  // Prevent context menu (right-click)
  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  // Prevent drag
  const handleDragStart = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div 
      className={`protected-image-wrapper ${watermark ? 'watermarked' : ''} ${className}`}
      style={{
        position: 'relative',
        display: fill ? 'block' : 'inline-block',
        width: fill ? '100%' : 'auto',
        height: fill ? '100%' : 'auto',
        overflow: 'hidden',
        ...style,
      }}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
    >
      {/* Invisible overlay to block interactions */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          background: 'transparent',
        }}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
      />
      
      {/* Next.js Optimized Image */}
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          style={{
            objectFit: 'cover',
            userSelect: 'none',
            WebkitUserDrag: 'none',
            pointerEvents: 'none',
          }}
          draggable={false}
          {...props}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          style={{
            userSelect: 'none',
            WebkitUserDrag: 'none',
            pointerEvents: 'none',
            maxWidth: '100%',
            height: 'auto',
          }}
          draggable={false}
          {...props}
        />
      )}

      {/* Watermark overlay */}
      {watermark && (
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '12px',
            fontWeight: '600',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
            pointerEvents: 'none',
            zIndex: 3,
            userSelect: 'none',
          }}
        >
          © Jenish Studio
        </div>
      )}
    </div>
  );
}

/**
 * =====================================================
 * USAGE EXAMPLES
 * =====================================================
 * 
 * 1. Basic protected image:
 * <ProtectedImage 
 *   src="/assets/img/Wedding/photo1.jpg"
 *   alt="Wedding Photo"
 *   width={800}
 *   height={600}
 * />
 * 
 * 2. Full-width background image:
 * <div style={{ position: 'relative', height: '500px' }}>
 *   <ProtectedImage 
 *     src="/assets/img/hero.jpg"
 *     alt="Hero"
 *     fill
 *     priority
 *   />
 * </div>
 * 
 * 3. Without watermark (for logos, etc):
 * <ProtectedImage 
 *   src="/assets/img/logo.png"
 *   alt="Logo"
 *   width={200}
 *   height={100}
 *   watermark={false}
 *   quality={90}
 * />
 * 
 * 4. Gallery image with custom quality:
 * <ProtectedImage 
 *   src="/assets/img/gallery/photo.jpg"
 *   alt="Gallery Photo"
 *   width={400}
 *   height={300}
 *   quality={50}  // Very low for extra protection
 * />
 */
