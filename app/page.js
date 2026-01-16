"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroImageRef = useRef(null);

  useEffect(() => {
    document.title = "Jenish Studio";

    // Initialize libraries after component mounts
    const initLibraries = () => {
      if (typeof AOS !== "undefined") {
        AOS.init({
          duration: 800,
          easing: "ease-out-cubic",
          once: true,
          mirror: false,
          offset: 80,
          anchorPlacement: "top-bottom",
        });
      }
      if (typeof GLightbox !== "undefined") {
        GLightbox({ selector: ".glightbox" });
      }
      if (typeof PureCounter !== "undefined") {
        new PureCounter();
      }
    };

    // Try to init immediately and also after a delay
    initLibraries();
    const timeout = setTimeout(initLibraries, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Initialize Swiper for testimonials
    if (typeof Swiper !== "undefined") {
      const swiperElement = document.querySelector(".init-swiper");
      if (swiperElement && !swiperElement.swiper) {
        new Swiper(swiperElement, {
          loop: true,
          speed: 600,
          autoplay: {
            delay: 5000,
          },
          slidesPerView: "auto",
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
        });
      }
    }
  }, []);

  useEffect(() => {
    // Array of 7 images from photos folder
    const images = [
      "/assets/img/kids/kids-10.jpg",
      "/assets/img/Baby/baby-60.jpg",
      "/assets/img/Baby/baby-63.jpg",
      "/assets/img/Family/family-08.jpg",
      "/assets/img/Baby/baby-30.jpg",
    ];

    let currentImageIndex = 0;

    // Function to change background image
    const changeBackgroundImage = () => {
      if (heroImageRef.current) {
        heroImageRef.current.src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
        console.log(
          "Image changed to:",
          currentImageIndex,
          images[currentImageIndex]
        );
      }
    };

    // Set initial image
    changeBackgroundImage();

    // Change image every 3 seconds
    const interval = setInterval(changeBackgroundImage, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Script
        src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/vendor/aos/aos.js" strategy="beforeInteractive" />
      <Script
        src="/assets/vendor/swiper/swiper-bundle.min.js"
        strategy="beforeInteractive"
      />
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
      <Script
        src="/assets/vendor/purecounter/purecounter_vanilla.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />

      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
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
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#feedbacks">Feedbacks</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
          <a className="btn-getstarted" href="#contact">
            Contact
          </a>
        </div>
      </header>

      <main className="main">
        <section id="hero" className="hero section dark-background">
          <img
            ref={heroImageRef}
            src="/assets/img/Kids/kids-10.jpg"
            alt=""
            className="hero-bg-image"
          />
          <div className="container">
            <div
              className="row justify-content-center text-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="col-xl-6 col-lg-8">
                <h2
                  data-aos="fade-down"
                  data-aos-delay="200"
                  data-aos-duration="800"
                >
                  Jenish Studio<span>.</span>
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="800"
                >
                  Capturing Moments, Creating Memories
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <br></br>
          <div
            className="container section-title"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2>About Us</h2>
            <p>At Jenish Studio, we believe every picture tells a story.</p>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <img
                  src="/assets/img/kids/kids-07.jpg"
                  className="img-fluid about-image"
                  alt=""
                />
              </div>
              <div
                className="col-lg-6 content"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3>Our Story</h3>
                <p className="fst-italic">
                  Founded with a passion for capturing life's beautiful moments,
                  Jenish Studio has been serving clients for over 5 years. What
                  started as a small photography venture has grown into a
                  trusted name in professional photography, specializing in
                  creating memories that last a lifetime.
                </p>
                <div className="row gy-3">
                  <div
                    className="col-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>25+ Years Experience</span>
                    </div>
                  </div>
                  <div
                    className="col-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>Professional Photographers</span>
                    </div>
                  </div>
                  <div
                    className="col-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>Modern Equipment</span>
                    </div>
                  </div>
                  <div
                    className="col-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      <span>Client Satisfaction Focus</span>
                    </div>
                  </div>
                </div>
                <h4 className="mt-4">Our Photography Style & Passion</h4>
                <p>
                  Our photography blends creativity with natural storytelling to
                  capture real emotions and timeless moments. We specialize in
                  weddings, maternity, family, kids, baby, product photography,
                  and model portfolios, focusing on natural expressions, perfect
                  lighting, and cinematic visuals.{" "}
                </p>
                <h4 className="mt-4">Why Choose Jenish Studio?</h4>
                <p>
                  Clients choose us for our professional approach, advanced
                  equipment, and dedication to quality. Using modern cameras,
                  expert editing, and the latest trends, we deliver stunning
                  images with the same passion and care for every shoot—big or
                  small.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="team section">
          <div
            className="container section-title"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2>Services</h2>
            <p>
              Professional photography capturing real emotions, perfect moments,
              and timeless memories.
            </p>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="600"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="/assets/img/Baby/baby-48.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Baby photography</h4>
                    <span>Capturing precious newborn moments</span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="600"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="/assets/img/kids/kids-19.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Kids photography</h4>
                    <span>Freezing playful childhood memories</span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="600"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="/assets/img/Family/family-09.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Family photography</h4>
                    <span>Creating lasting family portraits</span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="/assets/img/Wedding/wedding-01.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Wedding photography</h4>
                    <span>Documenting your special day</span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="600"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="/assets/img/Festival/festival-06.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Festival photography</h4>
                    <span>Celebrating cultural traditions</span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="600"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="/assets/img/Family/family-08.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Maternity Photoshoot</h4>
                    <span>Capturing the beauty of motherhood</span>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="600"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="/assets/img/Model/model-06.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Model Photoshoot</h4>
                    <span>Professional portfolio creation</span>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-duration="600"
              >
                <div className="team-member">
                  <div className="member-img">
                    <img
                      src="/assets/img/Product/product-01.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Product Photoshoot</h4>
                    <span>Showcasing products beautifully</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="call-to-action"
          className="call-to-action section dark-background"
        >
          <img
            src="/assets/img/Baby/baby-36.jpg"
            alt=""
            data-aos="fade-in"
            data-aos-duration="1200"
          />
          <div className="container">
            <div className="row">
              <div
                className="col-xl-9"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h3>Jenish Studio</h3>
                <p>
                  EVERY SMILE. EVERY TEAR. EVERY MEMORY—PERFECTLY PRESERVED.
                </p>
              </div>
              <div
                className="col-xl-3 d-flex align-items-center justify-content-end"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <a className="cta-btn" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio section">
          <div
            className="container section-title"
          >
            <h2>Portfolio</h2>
            <p>Timeless stories crafted in every frame.</p>
          </div>
          <div className="container">
            <div
              className="isotope-layout"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
              >
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">Baby</li>
                <li data-filter=".filter-product">Festival</li>
                <li data-filter=".filter-branding">Family</li>
                <li data-filter=".filter-books">Kids</li>
              </ul>
              <div className="row gy-4 isotope-container">
                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"
                >
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/Baby/baby-10.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Baby Photography</h4>
                      <p>Capturing precious moments of your little ones</p>
                      <a
                        href="/assets/img/Baby/baby-10.jpg"
                        title="Baby Photography"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="/gallery"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product"
                >
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/Festival/festival-11.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Festival Photography</h4>
                      <p>Celebrating cultural moments and festive joy</p>
                      <a
                        href="/assets/img/Festival/festival-11.jpg"
                        title="Festival Photography"
                        data-gallery="portfolio-gallery-product"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="/gallery"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding"
                >
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/Family/family-05.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Family Photography</h4>
                      <p>Creating lasting memories of family bonds</p>
                      <a
                        href="/assets/img/Family/family-05.jpg"
                        title="Family Photography"
                        data-gallery="portfolio-gallery-family"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="/gallery"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books"
                >
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/Baby/baby-71.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Kids Photography</h4>
                      <p>Capturing innocent smiles and playful moments</p>
                      <a
                        href="/assets/img/Baby/baby-71.jpg"
                        title="Kids Photography"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="/gallery"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books"
                >
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/kids/kids-23.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Kids Photography</h4>
                      <p>Freezing joyful childhood adventures</p>
                      <a
                        href="/assets/img/kids/kids-23.jpg"
                        title="Kids Photography"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="/gallery"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books"
                >
                  <div className="portfolio-content h-100">
                    <img
                      src="/assets/img/Baby/baby-72.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>Kids Photography</h4>
                      <p>Documenting magical childhood expressions</p>
                      <a
                        href="/assets/img/Baby/baby-72.jpg"
                        title="Kids Photography"
                        data-gallery="portfolio-gallery-book"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="/gallery"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          id="feedbacks"
          className="container section-title"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2>Customer's Feedbacks</h2>
          <p>What our clients say about Jenish Studio</p>
        </div>
        <section
          id="feedbacks"
          className="testimonials section dark-background"
        >
          <img
            src="/assets/img/Baby/baby-17.jpg"
            className="testimonials-bg"
            alt=""
            data-aos="fade-in"
            data-aos-duration="1200"
          />
          <div
            className="container"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <div className="swiper init-swiper">
              <script
                type="application/json"
                className="swiper-config"
                dangerouslySetInnerHTML={{
                  __html:
                    '{"loop":true,"speed":600,"autoplay":{"delay":5000},"slidesPerView":"auto","pagination":{"el":".swiper-pagination","type":"bullets","clickable":true}}',
                }}
              />
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Jenish Studio captured our wedding day perfectly!
                            Every moment was beautifully documented with such
                            creativity and attention to detail. The photos are
                            stunning and truly reflect the joy of our special
                            day.<i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Priya Patel</h3>
                          <h4>Wedding Client</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Amazing experience with Jenish Studio for our family
                            portraits! They made our kids comfortable and
                            captured genuine smiles and emotions. The photos are
                            perfect for our home and we couldn't be happier.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Rahul Sharma</h3>
                          <h4>Family Client</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Jenish Studio did an incredible job with our
                            maternity shoot! The lighting and composition were
                            perfect, capturing the beauty of pregnancy in such
                            an artistic way. Highly recommend their services!
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Meera Joshi</h3>
                          <h4>Maternity Client</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Outstanding baby photography session! Jenish Studio
                            made our little one feel comfortable and captured
                            the most precious moments. The photos are absolutely
                            adorable and professionally done.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Amit Kumar</h3>
                          <h4>Baby Photography Client</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            Exceptional model portfolio shoot! Jenish Studio
                            understood exactly what we needed and delivered
                            stunning, professional images that perfectly
                            showcase the model's style and personality.
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>Kavita Singh</h3>
                          <h4>Model Portfolio Client</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="recent-photos" className="recent-photos section">
          <div
            className="container section-title"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2>Recent Photos</h2>
            <p>Explore our latest photography work</p>
          </div>
          <div
            className="container"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="continuous-scroll">
              <div className="scroll-content">
                {/* First set of images */}
                <img src="/assets/img/Baby/baby-01.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-05.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-10.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-15.jpg" alt="Baby Photo" />
                <img src="/assets/img/kids/kids-10.jpg" alt="Kids Photo" />
                <img src="/assets/img/Baby/baby-20.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-25.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-30.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-35.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-45.jpg" alt="Baby Photo" />
                <img
                  src="/assets/img/Festival/festival-15.jpg"
                  alt="Festival Photo"
                />
                <img src="/assets/img/Baby/baby-50.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-65.jpg" alt="Baby Photo" />
                <img
                  src="/assets/img/Festival/festival-25.jpg"
                  alt="Festival Photo"
                />
                <img src="/assets/img/Baby/baby-70.jpg" alt="Baby Photo" />
                <img
                  src="/assets/img/Festival/festival-30.jpg"
                  alt="Festival Photo"
                />
                <img src="/assets/img/Baby/baby-75.jpg" alt="Baby Photo" />
                
                {/* Duplicate set for seamless loop */}
                <img src="/assets/img/Baby/baby-01.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-05.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-10.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-15.jpg" alt="Baby Photo" />
                <img src="/assets/img/kids/kids-10.jpg" alt="Kids Photo" />
                <img src="/assets/img/Baby/baby-20.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-25.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-30.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-35.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-45.jpg" alt="Baby Photo" />
                <img
                  src="/assets/img/Festival/festival-15.jpg"
                  alt="Festival Photo"
                />
                <img src="/assets/img/Baby/baby-50.jpg" alt="Baby Photo" />
                <img src="/assets/img/Baby/baby-65.jpg" alt="Baby Photo" />
                <img
                  src="/assets/img/Festival/festival-25.jpg"
                  alt="Festival Photo"
                />
                <img src="/assets/img/Baby/baby-70.jpg" alt="Baby Photo" />
                <img
                  src="/assets/img/Festival/festival-30.jpg"
                  alt="Festival Photo"
                />
                <img src="/assets/img/Baby/baby-75.jpg" alt="Baby Photo" />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div
            className="container section-title"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2>Contact</h2>
            <p>Book your shoot or ask us anything—we're here to help.</p>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="600"
                    >
                      <i className="bi bi-geo-alt"></i>
                      <br></br>
                      <h3>Address</h3>
                      <p>Shivshakti Soc-2, 8, Near Sadhna Niketan School</p>
                      <p>
                        Near Kargil Chowk, Punagam, Varachha, Surat, Gujarat
                        395011
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="600"
                    >
                      <i className="bi bi-telephone"></i>
                      <br></br>
                      <h3>Call Us</h3>
                      <p>9925418682</p>
                      <p>9638155070</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="600"
                    >
                      <i className="bi bi-envelope"></i>
                      <br></br>
                      <h3>Email Us</h3>
                      <p>jenish.photo@gmail.com</p>
                      <p></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="600"
                    >
                      <i className="bi bi-clock"></i>
                      <br></br>
                      <h3>Open Hours</h3>

                      <p>Monday - Sunday</p>
                      <p>9:00AM - 08:00PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <form
                  className="php-email-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    const loadingDiv = form.querySelector('.loading');
                    const errorDiv = form.querySelector('.error-message');
                    const successDiv = form.querySelector('.sent-message');
                    const submitBtn = form.querySelector('button[type="submit"]');

                    loadingDiv.style.display = 'block';
                    errorDiv.style.display = 'none';
                    successDiv.style.display = 'none';
                    submitBtn.disabled = true;

                    const formData = new FormData(form);
                    fetch('/api/contact', {
                      method: 'POST',
                      body: formData,
                    })
                      .then((response) => response.json())
                      .then((data) => {
                        loadingDiv.style.display = 'none';
                        successDiv.style.display = 'block';
                        form.reset();
                        setTimeout(() => {
                          successDiv.style.display = 'none';
                        }, 5000);
                        submitBtn.disabled = false;
                      })
                      .catch((error) => {
                        loadingDiv.style.display = 'none';
                        errorDiv.textContent = 'Failed to send message. Please try again.';
                        errorDiv.style.display = 'block';
                        submitBtn.disabled = false;
                      });
                  }}
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required=""
                        name="name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required=""
                        name="email"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        required=""
                        name="subject"
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required=""
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <br></br>
          <div
            className="container"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="row">
              <div className="col-12">
                <iframe
                  src="https://maps.google.com/maps?q=Shivshakti%20Soc-2%208%20Near%20Sadhna%20Niketan%20School%20Near%20Kargil%20Chowk%20Punagam%20Varachha%20Surat%20Gujarat%20395011&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jenish Studio Location"
                ></iframe>
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
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#Gallery">Gallery</a>
                </li>
                <li>
                  <a href="">Photos</a>
                </li>
                <li>
                  <a href="#feedbacks">Feedbacks</a>
                </li>
                <li>
                  <a href="#recent-photos">Recent Photos</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#services">Wedding Photography</a>
                </li>
                <li>
                  <a href="#services">Family Portraits</a>
                </li>
                <li>
                  <a href="#services">Baby Photography</a>
                </li>
                <li>
                  <a href="#services">Kids Photography</a>
                </li>
                <li>
                  <a href="#services">Maternity Shoots</a>
                </li>
                <li>
                  <a href="#services">Model Shoots</a>
                </li>
                <li>
                  <a href="#services">Product Photography</a>
                </li>
                <li>
                  <a href="#services">Festival Photography</a>
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
