import Script from 'next/script';

export default function Gallery() {
  // Define image categories based on actual folder structure
  const imageCategories = {
    Baby: ['10.jpg', '101.jpg', '105.jpg', '106.jpg', '108.jpg', '117.jpg', '122.jpg', '125.jpg', '13.jpg', '131.jpg', '16.jpg', '17.jpg', '21.jpg', '23.jpg', '24.jpg', '34.jpg', '36.jpg', '37.jpg', '4.jpg', '41.jpg', '42.jpg', '44.jpg', '48.jpg', '49.jpg', '51.jpg', '54.jpg', '55.jpg', '58.jpg', '61.jpg', '64.jpg', '65.jpg', '66.jpg', '67.jpg', '68.jpg', '69.jpg', '70.jpg', '72.jpg', '73.jpg', '74.jpg', '75.jpg', '79.jpg', '81.jpg', '83.jpg', '85.jpg', '87.jpg', '90.jpg', '91.jpg', '92.jpg', '95.jpg', '98.jpg'],
    Family: ['100.jpg', '107.jpg', '110.jpg', '114.jpg', '115.jpg', '12.jpg', '127.jpg', '132.jpg', '2.jpg', '50.jpg', '7.jpg', '8.jpg', '84.jpg', '9.jpg', '94.jpg'],
    Festival: ['109.jpg', '113.jpg', '119.jpg', '18.jpg', '19.jpg', '22.jpg', '25.jpg', '29.jpg', '31.jpg', '32.jpg', '38.jpg', '39.jpg', '43.jpg', '57.jpg', '59.jpg', '63.jpg', '71.jpg', '80.jpg', '89.jpg', '93.jpg', '97.jpg'],
    kids: ['1.jpg', '104.jpg', '11.jpg', '116.jpg', '118.jpg', '121.jpg', '123.jpg', '124.jpg', '14.jpg', '20.jpg', '27.jpg', '28.jpg', '3.jpg', '33.jpg', '35.jpg', '40.jpg', '45.jpg', '46.jpg', '47.jpg', '5.jpg', '52.jpg', '53.jpg', '56.jpg', '6.jpg', '60.jpg', '62.jpg', '77.jpg', '78.jpg'],
    Model: ['102.jpg', '129.jpg', '26.jpg', '30.jpg'],
    Product: ['126.jpg'],
    Wedding: ['128.jpg']
  };

  // Generate images array from folder structure
  const images = Object.entries(imageCategories).flatMap(([folder, files]) =>
    files.map(file => ({
      src: `/assets/img/${folder}/${file}`,
      alt: `${folder} Photo`,
      filter: `filter-${folder.toLowerCase()}`
    }))
  );

  return (
    <>
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/aos/aos.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />

      <header id="header" className="header d-flex align-items-center fixed-top" style={{ backgroundColor: '#13131383' }}>
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center me-auto me-lg-0">
            <img src="/assets/img/logos/logo-01.png" alt="Logo" />
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#Gallery">Gallery</a></li>
              <li><a href="/#portfolio">Portfolio</a></li>
              <li><a href="/#feedbacks">Feedbacks</a></li>
           
             
            
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
          <a className="btn-getstarted" href="/#contact">Contact</a>
        </div>
      </header>

      <main className="main">
        <section className="portfolio section" style={{ marginTop: '80px' }}>
          <div className="container section-title" data-aos="fade-up">
            <h2>Photos Gallery</h2>
            <p>Explore our complete collection of photography work</p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="isotope-layout" data-layout="masonry" data-sort="original-order">
              <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-baby">Baby</li>
                <li data-filter=".filter-family">Family</li>
                <li data-filter=".filter-festival">Festival</li>
                <li data-filter=".filter-kids">Kids</li>
                <li data-filter=".filter-model">Model</li>
                <li data-filter=".filter-product">Product</li>
                <li data-filter=".filter-wedding">Wedding</li>
              </ul>
              <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                {images.map((image, index) => (
                  <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${image.filter}`}>
                    <div className="portfolio-content h-100">
                      <a href={image.src} data-gallery="gallery" className="glightbox">
                        <img src={image.src} alt={image.alt} className="img-fluid" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer dark-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="/" className="logo d-flex align-items-center">
                <img src="/assets/img/logos/logo-01.png" alt="Jenish Studio Logo" />
              </a>
              <div className="footer-contact pt-3">
                <p>Capturing life's precious moments with creativity and passion.</p>
                <p className="mt-3"><strong>Phone:</strong> <span>9925418682, 9638155070</span></p>
                <p><strong>Email:</strong> <span>jenish.photo@gmail.com</span></p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About us</a></li>
                <li><a href="/#services">Services</a></li>
                <li><a href="/#Gallery">Gallery</a></li>
                <li><a href="/gallery">Photos</a></li>
                <li><a href="/#feedbacks">Feedbacks</a></li>
                <li><a href="/#recent-photos">Recent Photos</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="/#services">Wedding Photography</a></li>
                <li><a href="/#services">Family Portraits</a></li>
                <li><a href="/#services">Baby Photography</a></li>
                <li><a href="/#services">Kids Photography</a></li>
                <li><a href="/#services">Maternity Shoots</a></li>
                <li><a href="/#services">Model Shoots</a></li>
                <li><a href="/#services">Product Photography</a></li>
                <li><a href="/#services">Festival Photography</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Follow Us</h4>
              <p>Stay connected and see our latest work on social media.</p>
              <div className="social-links d-flex mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/jenish_studio" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                <a href="https://wa.me/9638155070" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">Jenish Studio</strong> <span>All Rights Reserved</span></p>
        </div>
      </footer>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
}