'use client';

import { useEffect, useRef, useState } from 'react';

export default function GalleryClient({ images }) {
  const [activeFilter, setActiveFilter] = useState('*');
  const [isotopeInstance, setIsotopeInstance] = useState(null);
  const containerRef = useRef(null);
  const isInitialized = useRef(false);

  // Initialize Isotope and other libraries
  useEffect(() => {
    if (isInitialized.current) return;
    
    const initGallery = () => {
      if (typeof window === 'undefined' || !containerRef.current) return;

      // Initialize GLightbox
      if (window.GLightbox) {
        window.GLightbox({
          selector: '.glightbox'
        });
      }

      // Initialize Isotope
      if (window.Isotope && window.imagesLoaded) {
        window.imagesLoaded(containerRef.current, function() {
          const iso = new window.Isotope(containerRef.current, {
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
            filter: '*',
            sortBy: 'original-order',
            transitionDuration: 0 // No transition for testing
          });
          
          setIsotopeInstance(iso);
          isInitialized.current = true;
          
          // Force initial layout
          setTimeout(() => iso.layout(), 50);
          setTimeout(() => iso.layout(), 200);
        });
      }
    };

    // Poll until all scripts are loaded
    const checkAndInit = () => {
      if (window.Isotope && window.imagesLoaded && window.GLightbox) {
        initGallery();
      } else {
        setTimeout(checkAndInit, 50);
      }
    };

    setTimeout(checkAndInit, 50);

    return () => {
      if (isotopeInstance) {
        isotopeInstance.destroy();
      }
    };
  }, []);

  // Handle filter changes
  useEffect(() => {
    if (isotopeInstance) {
      isotopeInstance.arrange({ filter: activeFilter });
      
      // Force layout multiple times to ensure proper rendering
      setTimeout(() => isotopeInstance.layout(), 10);
      setTimeout(() => isotopeInstance.layout(), 100);
      setTimeout(() => isotopeInstance.layout(), 300);
    }
  }, [activeFilter, isotopeInstance]);

  // Handle filter button click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filters = [
    { filter: '*', label: 'All' },
    { filter: '.filter-baby', label: 'Baby' },
    { filter: '.filter-family', label: 'Family' },
    { filter: '.filter-festival', label: 'Festival' },
    { filter: '.filter-kids', label: 'Kids' },
    { filter: '.filter-model', label: 'Model' },
    { filter: '.filter-product', label: 'Product' },
    { filter: '.filter-wedding', label: 'Wedding' },
  ];

  return (
    <>
      <ul className="portfolio-filters isotope-filters">
        {filters.map((item) => (
          <li
            key={item.filter}
            data-filter={item.filter}
            className={activeFilter === item.filter ? 'filter-active' : ''}
            onClick={() => handleFilterClick(item.filter)}
            style={{ cursor: 'pointer' }}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="row gy-4 isotope-container" ref={containerRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`col-lg-4 col-md-6 portfolio-item isotope-item ${image.filter}`}
          >
            <div className="portfolio-content h-100">
              <a
                href={image.src}
                data-gallery="gallery"
                className="glightbox"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
