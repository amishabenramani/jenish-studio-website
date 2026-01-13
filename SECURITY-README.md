# 🔒 Jenish Studio - Security Implementation Guide

## Overview

This document explains all the security measures implemented to protect your photography website.

---

## 📁 File Structure

```
jenish-studio-website/
├── next.config.js          ← Security headers & image optimization
├── middleware.js           ← Route protection & security checks
├── app/
│   ├── layout.js           ← Security meta tags
│   ├── globals.css         ← CSS-based protection
│   └── components/
│       ├── ImageProtection.js   ← Global JS protection
│       └── ProtectedImage.js    ← Secure image component
└── public/
    └── assets/img/         ← LOW-RES images for web (keep originals offline!)
```

---

## 🛡️ Security Features Implemented

### 1. Security Headers (next.config.js)

| Header | Protection |
|--------|------------|
| `X-XSS-Protection` | Blocks XSS attacks |
| `X-Frame-Options: DENY` | Prevents clickjacking |
| `X-Content-Type-Options` | Prevents MIME sniffing |
| `Content-Security-Policy` | Controls resource loading |
| `Strict-Transport-Security` | Forces HTTPS |
| `Referrer-Policy` | Controls referrer info |
| `Permissions-Policy` | Disables unnecessary APIs |

### 2. Image Protection (ImageProtection.js)

- ✅ Right-click disabled
- ✅ Keyboard shortcuts blocked (Ctrl+S, Ctrl+U, F12, etc.)
- ✅ Drag & drop prevented
- ✅ Image selection disabled
- ✅ Print screen detection
- ✅ DevTools detection (basic)
- ✅ Copy/Cut prevention
- ✅ Mobile long-press blocked

### 3. CSS Protection (globals.css)

- ✅ Image selection disabled via CSS
- ✅ Image dragging disabled
- ✅ Touch callout disabled (iOS)
- ✅ Watermark overlay on images
- ✅ Print protection (hides/blurs content)

### 4. Image Optimization (next.config.js)

- ✅ Automatic WebP/AVIF conversion
- ✅ Responsive image sizes
- ✅ Quality reduced to 60% for web
- ✅ Browser caching enabled

---

## 🖼️ IMAGE PROTECTION STRATEGY

### Best Practice: 3-Tier Image System

```
📁 Your Computer (OFFLINE - NEVER UPLOAD)
└── Original High-Resolution Images
    ├── RAW files
    └── Full-quality exports (300 DPI)

📁 Website Server (public/assets/img/)
└── Web-Optimized Images
    ├── Maximum 1920px wide
    ├── 72 DPI only
    ├── JPEG quality: 60-70%
    └── Watermarked if possible

📁 Client Delivery (Separate Service)
└── Use Google Drive, Dropbox, or Pic-Time
    └── Password protected links
```

### How to Prepare Images for Website

1. **Resize**: Maximum 1920px on longest side
2. **Quality**: Export at 60-70% JPEG quality
3. **DPI**: 72 DPI (screen resolution only)
4. **Watermark**: Add visible watermark in corner
5. **Metadata**: Remove EXIF data (location, camera info)

### Recommended Tools for Image Preparation

- **Adobe Lightroom**: Export presets for web
- **Photoshop**: Save for Web (Legacy)
- **Free Option**: [Squoosh.app](https://squoosh.app/)
- **Bulk Processing**: XnConvert (free)

---

## 🚀 Using the ProtectedImage Component

```jsx
import ProtectedImage from './components/ProtectedImage';

// Basic usage
<ProtectedImage 
  src="/assets/img/Wedding/photo1.jpg"
  alt="Wedding Photo"
  width={800}
  height={600}
/>

// Without watermark (for logos)
<ProtectedImage 
  src="/assets/img/logo.png"
  alt="Logo"
  width={200}
  height={100}
  watermark={false}
/>

// Full-width hero image
<div style={{ position: 'relative', height: '500px' }}>
  <ProtectedImage 
    src="/assets/img/hero.jpg"
    alt="Hero"
    fill
    priority
  />
</div>
```

---

## ✅ HTTPS Configuration (Vercel)

When deploying to Vercel:

1. **Automatic HTTPS**: Vercel provides free SSL certificates
2. **Force HTTPS**: Add to `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "header", "key": "x-forwarded-proto", "value": "http" }],
      "destination": "https://yourdomain.com/:path*",
      "permanent": true
    }
  ]
}
```

---

## ⚠️ Important Limitations

**These protections are deterrents, not absolute security:**

1. ❌ Cannot prevent screenshots
2. ❌ Cannot stop determined users with dev skills
3. ❌ Cannot block screen recording
4. ❌ Browser extensions can bypass JS protection

**Best defense**: Only upload low-resolution, watermarked images!

---

## 🔧 Customization

### Change Watermark Text

1. In `globals.css`, find:
```css
.watermarked::after {
  content: '© Jenish Studio';
```

2. In `ProtectedImage.js`, find:
```jsx
© Jenish Studio
```

### Adjust Image Quality

In `next.config.js`:
```js
// Lower = more protection, less quality
// Higher = better quality, less protection
quality: 60, // Recommended: 50-70
```

### Enable Text Selection

In `globals.css`, uncomment:
```css
body {
  /* -webkit-user-select: none; */
  /* user-select: none; */
}
```

---

## 📋 Deployment Checklist

- [ ] All images resized to max 1920px
- [ ] Image quality reduced to 60-70%
- [ ] Watermarks added to portfolio images
- [ ] EXIF data removed from images
- [ ] Original files stored offline
- [ ] Test right-click disabled
- [ ] Test keyboard shortcuts blocked
- [ ] Verify HTTPS working
- [ ] Check security headers: [securityheaders.com](https://securityheaders.com)

---

## 🆘 Support

If you need to allow right-click for specific elements (like forms), the `ImageProtection.js` already allows this for INPUT and TEXTAREA elements.

For any issues, check the browser console for errors.
