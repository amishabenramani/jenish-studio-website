import Script from "next/script";

export default function Gallery() {
  // Define image categories based on actual folder structure with proper naming
  const imageCategories = {
    Baby: Array.from(
      { length: 77 },
      (_, i) => `baby-${String(i + 1).padStart(2, "0")}.jpg`
    ),
    Family: Array.from(
      { length: 21 },
      (_, i) => `family-${String(i + 1).padStart(2, "0")}.jpg`
    ),
    Festival: Array.from(
      { length: 56 },
      (_, i) => `festival-${String(i + 1).padStart(2, "0")}.jpg`
    ),
    kids: Array.from(
      { length: 45 },
      (_, i) => `kids-${String(i + 1).padStart(2, "0")}.jpg`
    ),
    Model: Array.from(
      { length: 15 },
      (_, i) => `model-${String(i + 1).padStart(2, "0")}.jpg`
    ),
    Product: Array.from(
      { length: 15 },
      (_, i) => `product-${String(i + 1).padStart(2, "0")}.jpg`
    ),
    Wedding: ["wedding-01.jpg"],
  };

  // Generate images array from folder structure
  const images = Object.entries(imageCategories).flatMap(([folder, files]) =>
    files.map((file) => ({
      src: `/assets/img/${folder}/${file}`,
      alt: `${folder} Photo`,
      filter: `filter-${folder.toLowerCase()}`,
    }))
  );

  return (
    <>
      <Script
        src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/vendor/aos/aos.js" strategy="beforeInteractive" />
      <Script
        src="/assets/vendor/glightbox/js/glightbox.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/vendor/isotope-layout/isotope.pkgd.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />

      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
        style={{ backgroundColor: "#13131383" }}
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a
            href="/"
            className="logo d-flex align-items-center me-auto me-lg-0"
          >
            <img src="/assets/img/logos/logo-02.png" alt="Logo" />
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#Gallery">Gallery</a>
              </li>
              <li>
                <a href="/#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/#feedbacks">Feedbacks</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
          <a className="btn-getstarted" href="/#contact">
            Contact
          </a>
        </div>
      </header>

      <main className="main">
        <section className="portfolio section" style={{ marginTop: "80px" }}>
          <div
            className="container section-title"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2>Photos Gallery</h2>
            <p>Explore our complete collection of photography work</p>
          </div>
          <div className="container">
            <div
              className="isotope-layout"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
              >
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-baby">Baby</li>
                <li data-filter=".filter-family">Family</li>
                <li data-filter=".filter-festival">Festival</li>
                <li data-filter=".filter-kids">Kids</li>
                <li data-filter=".filter-model">Model</li>
                <li data-filter=".filter-product">Product</li>
                <li data-filter=".filter-wedding">Wedding</li>
              </ul>
              <div className="row gy-4 isotope-container">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`col-lg-4 col-md-6 portfolio-item isotope-item ${image.filter}`}
                    data-aos="fade-up"
                    data-aos-delay={100 + (index % 6) * 50}
                    data-aos-duration="600"
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
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer dark-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="/" className="logo d-flex align-items-center">
                <img
                  src="/assets/img/logos/logo-02.png"
                  alt="Jenish Studio Logo"
                />
              </a>
              <div className="footer-contact pt-3">
                <p>
                  Capturing life's precious moments with creativity and passion.
                </p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>9925418682, 9638155070</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>jenish.photo@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#about">About us</a>
                </li>
                <li>
                  <a href="/#services">Services</a>
                </li>
                <li>
                  <a href="/#Gallery">Gallery</a>
                </li>
                <li>
                  <a href="/gallery">Photos</a>
                </li>
                <li>
                  <a href="/#feedbacks">Feedbacks</a>
                </li>
                <li>
                  <a href="/#recent-photos">Recent Photos</a>
                </li>
                <li>
                  <a href="/#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="/#services">Wedding Photography</a>
                </li>
                <li>
                  <a href="/#services">Family Portraits</a>
                </li>
                <li>
                  <a href="/#services">Baby Photography</a>
                </li>
                <li>
                  <a href="/#services">Kids Photography</a>
                </li>
                <li>
                  <a href="/#services">Maternity Shoots</a>
                </li>
                <li>
                  <a href="/#services">Model Shoots</a>
                </li>
                <li>
                  <a href="/#services">Product Photography</a>
                </li>
                <li>
                  <a href="/#services">Festival Photography</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Follow Us</h4>
              <p>Stay connected and see our latest work on social media.</p>
              <div className="social-links d-flex mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/jenish_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://wa.me/9638155070"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Jenish Studio</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
