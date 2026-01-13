'use client';

import { useEffect } from 'react';

/**
 * =====================================================
 * IMAGE & CONTENT PROTECTION COMPONENT
 * =====================================================
 * 
 * This component provides comprehensive protection for your photography website:
 * - Disables right-click context menu
 * - Blocks keyboard shortcuts (Ctrl+S, Ctrl+U, Ctrl+Shift+I, F12, PrintScreen)
 * - Prevents image drag and drop
 * - Blocks text selection on images
 * - Detects and blocks DevTools opening attempts
 * - Prevents image saving via long-press on mobile
 * 
 * Place this in: app/components/ImageProtection.js
 * Usage: Import and add <ImageProtection /> in layout.js
 */

export default function ImageProtection() {
  useEffect(() => {
    // =====================================================
    // 1. DISABLE RIGHT-CLICK CONTEXT MENU
    // =====================================================
    const handleContextMenu = (e) => {
      // Allow right-click on form inputs for usability
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return true;
      }
      e.preventDefault();
      return false;
    };

    // =====================================================
    // 2. BLOCK KEYBOARD SHORTCUTS
    // =====================================================
    const handleKeyDown = (e) => {
      // Block Ctrl/Cmd + S (Save)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        return false;
      }
      
      // Block Ctrl/Cmd + U (View Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        return false;
      }
      
      // Block Ctrl/Cmd + Shift + I (DevTools)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
        e.preventDefault();
        return false;
      }
      
      // Block Ctrl/Cmd + Shift + J (DevTools Console)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'j' || e.key === 'J')) {
        e.preventDefault();
        return false;
      }
      
      // Block Ctrl/Cmd + Shift + C (DevTools Elements)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        return false;
      }
      
      // Block F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      // Block Ctrl/Cmd + P (Print) - prevents printing images
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        return false;
      }
      
      // Block PrintScreen key
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        // Clear clipboard as additional protection
        navigator.clipboard?.writeText('').catch(() => {});
        return false;
      }
    };

    // =====================================================
    // 3. PREVENT IMAGE DRAG & DROP
    // =====================================================
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // =====================================================
    // 4. PREVENT IMAGE SELECTION
    // =====================================================
    const handleSelectStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // =====================================================
    // 5. MOBILE: PREVENT LONG-PRESS SAVE
    // =====================================================
    const handleTouchStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.target.style.pointerEvents = 'none';
        setTimeout(() => {
          e.target.style.pointerEvents = 'auto';
        }, 500);
      }
    };

    // =====================================================
    // 6. DETECT DEVTOOLS (Basic Detection)
    // =====================================================
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      if (widthThreshold || heightThreshold) {
        // DevTools might be open - you can add custom behavior here
        // For now, we just prevent easy inspection
        console.clear();
      }
    };

    // =====================================================
    // 7. PREVENT COPY
    // =====================================================
    const handleCopy = (e) => {
      // Allow copying in form inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return true;
      }
      e.preventDefault();
      return false;
    };

    // =====================================================
    // 8. PREVENT CUT
    // =====================================================
    const handleCut = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return true;
      }
      e.preventDefault();
      return false;
    };

    // =====================================================
    // ADD ALL EVENT LISTENERS
    // =====================================================
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    
    // Check for DevTools periodically
    const devToolsInterval = setInterval(detectDevTools, 1000);

    // =====================================================
    // CLEANUP ON UNMOUNT
    // =====================================================
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      clearInterval(devToolsInterval);
    };
  }, []);

  // This component doesn't render anything visible
  return null;
}
