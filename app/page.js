'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

export default function Home() {
  const heroImageRef = useRef(null);
  
  useEffect(() => {
    document.title = 'Index - Gp Bootstrap Template';
    
    // Initialize libraries after component mounts
    const initLibraries = () => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }
      if (typeof GLightbox !== 'undefined') {
        GLightbox({ selector: '.glightbox' });
      }
      if (typeof PureCounter !== 'undefined') {
        new PureCounter();
      }
    };
    
    // Try to init immediately and also after a delay
    initLibraries();
    const timeout = setTimeout(initLibraries, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Array of 7 images from photos folder
    const images = [
      '/assets/img/photos/109.jpg',
      '/assets/img/photos/127.jpg',
      '/assets/img/photos/69.jpg',
      '/assets/img/photos/108.jpg',
      '/assets/img/photos/87.jpg',
      '/assets/img/photos/33.jpg',
      '/assets/img/photos/73.jpg'
    ];
    
    let currentImageIndex = 0;
    
    // Function to change background image
    const changeBackgroundImage = () => {
      if (heroImageRef.current) {
        heroImageRef.current.src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
        console.log('Image changed to:', currentImageIndex, images[currentImageIndex]);
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
      <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/aos/aos.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/glightbox/js/glightbox.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/purecounter/purecounter_vanilla.js" strategy="beforeInteractive" />
      <Script src="/assets/vendor/php-email-form/validate.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="lazyOnload" />

      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center me-auto me-lg-0">
            <img src="/assets/img/photos/logo-01.png" alt="Logo" />
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Gallery</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
          <a className="btn-getstarted" href="#about">Contact</a>
        </div>
      </header>

      <main className="main">
        <section id="hero" className="hero section dark-background">
          <img ref={heroImageRef} src="/assets/img/photos/109.jpg" alt="" data-aos="fade-in" />
          <div className="container">
            <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="col-xl-6 col-lg-8">
                <h2>Jenish Studio<span>.</span></h2>
                <p>Professional photographer</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <br></br>
           <div className="container section-title" data-aos="fade-up">
            <h2>About Us</h2>
            <p>At Jenish Studio, we believe every picture tells a story.</p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6">
                <img src="/assets/img/photos/14.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 content">
               
                   <h3>Our mission is to capture emotions, moments, and memories that last a lifetime.</h3>
                <p className="fst-italic">We specialize in wedding photography, maternity shoots, family portraits, kids photography, baby shoots, product photography, and model portfolios. With a creative eye and modern techniques, we focus on natural expressions, perfect lighting, and cinematic compositions.</p>
               
                <p>Our team uses professional cameras, advanced editing, and the latest trends to deliver high-quality images that truly reflect your special moments. Whether it’s a grand wedding or a simple family shoot, we give the same passion and attention to every project.</p>
              </div>
            </div>
          </div>
        </section>

      
  <section id="services" className="team section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="team-member">
                  <div className="member-img">
                    <img src="/assets/img/photos/72.jpg" className="img-fluid" alt="" />
                  
                  </div>
                  <div className="member-info">
                    <h4>Baby photography</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="team-member">
                  <div className="member-img">
                    <img src="/assets/img/photos/118.jpg" className="img-fluid" alt="" />
                  
                  </div>
                  <div className="member-info">
                    <h4>Kids photography</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                <div className="team-member">
                  <div className="member-img">
                    <img src="/assets/img/photos/132.jpg" className="img-fluid" alt="" />
                   
                  </div>
                  <div className="member-info">
                    <h4>Family photography</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                <div className="team-member">
                  <div className="member-img">
                    <img src="/assets/img/photos/128.jpg" className="img-fluid" alt="" />
                  
                  </div>
                  <div className="member-info">
                    <h4>Wedding photography</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>
               <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                <div className="team-member">
                  <div className="member-img">
                    <img src="/assets/img/photos/38.jpg" className="img-fluid" alt="" />
                  
                  </div>
                  <div className="member-info">
                    <h4> Festival photography</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>
               <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                <div className="team-member">
                  <div className="member-img">
                    <img src="/assets/img/photos/127.jpg" className="img-fluid" alt="" />
                  
                  </div>
                  <div className="member-info">
                    <h4> Maternity  Photoshoot</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                <div className="team-member">
                  <div className="member-img">
                    <img src="/assets/img/photos/129.jpg" className="img-fluid" alt="" />
                  
                  </div>
                  <div className="member-info">
                    <h4> Model  Photoshoot</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>

  <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
                <div className="team-member">
                  <div className="member-img">
                    <img src="/assets/img/photos/126.jpg" className="img-fluid" alt="" />
                  
                  </div>
                  <div className="member-info">
                    <h4> Product  Photoshoot</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </section>
       

        

        <section id="call-to-action" className="call-to-action section dark-background">
          <img src="/assets/img/photos/65.jpg" alt="" />
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-xl-9">
                <h3>Call To Action</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="col-xl-3 d-flex align-items-center justify-content-end">
                <a className="cta-btn" href="#contact">Call To Action</a>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Gallery</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          <div className="container">
            <div className="isotope-layout" data-layout="masonry" data-sort="original-order">
              <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Product</li>
                <li data-filter=".filter-branding">Branding</li>
                <li data-filter=".filter-books">Books</li>
              </ul>
              <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                  <div className="portfolio-content h-100">
                    <img src="/assets/img/photos/110.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="/assets/img/photos/110.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                  <div className="portfolio-content h-100">
                    <img src="/assets/img/photos/74.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Product 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="/assets/img/photos/74.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                  <div className="portfolio-content h-100">
                    <img src="/assets/img/photos/112.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Branding 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="/assets/img/photos/112 .jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                  <div className="portfolio-content h-100">
                    <img src="/assets/img/photos/113.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Books 1</h4>
                      <p>Lorem ipsum, dolor sit amet consectetur</p>
                      <a href="/assets/img/photos/113.jpg" title="Books 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                      <a href="/portfolio-details" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      

        <section id="testimonials" className="testimonials section dark-background">
          <img src="/assets/img/photos/106.jpg" className="testimonials-bg" alt="" />
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper init-swiper">
              <script type="application/json" className="swiper-config" dangerouslySetInnerHTML={{ __html: '{"loop":true,"speed":600,"autoplay":{"delay":5000},"slidesPerView":"auto","pagination":{"el":".swiper-pagination","type":"bullets","clickable":true}}' }} />
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p><i className="bi bi-quote quote-icon-left"></i>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.<i className="bi bi-quote quote-icon-right"></i></p>
                          <h3>Saul Goodman</h3>
                          <h4>Ceo & Founder</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img src="/assets/img/testimonials/testimonials-1.jpg" className="img-fluid testimonial-img" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p><i className="bi bi-quote quote-icon-left"></i>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.<i className="bi bi-quote quote-icon-right"></i></p>
                          <h3>Sara Wilsson</h3>
                          <h4>Designer</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img src="/assets/img/testimonials/testimonials-2.jpg" className="img-fluid testimonial-img" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p><i className="bi bi-quote quote-icon-left"></i>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.<i className="bi bi-quote quote-icon-right"></i></p>
                          <h3>Jena Karlis</h3>
                          <h4>Store Owner</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img src="/assets/img/testimonials/testimonials-3.jpg" className="img-fluid testimonial-img" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p><i className="bi bi-quote quote-icon-left"></i>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.<i className="bi bi-quote quote-icon-right"></i></p>
                          <h3>John Larson</h3>
                          <h4>Entrepreneur</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img src="/assets/img/testimonials/testimonials-4.jpg" className="img-fluid testimonial-img" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p><i className="bi bi-quote quote-icon-left"></i>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.<i className="bi bi-quote quote-icon-right"></i></p>
                          <h3>Emily Harison</h3>
                          <h4>Freelancer</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img src="/assets/img/testimonials/testimonials-5.jpg" className="img-fluid testimonial-img" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

      

        <section id="contact" className="contact section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="200">
                      <i className="bi bi-geo-alt"></i>
                      <h3>Address</h3>
                      <p>A108 Adam Street</p>
                      <p>New York, NY 535022</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="300">
                      <i className="bi bi-telephone"></i>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                      <p>+1 6678 254445 41</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="400">
                      <i className="bi bi-envelope"></i>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                      <p>contact@example.com</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-item" data-aos="fade" data-aos-delay="500">
                      <i className="bi bi-clock"></i>
                      <h3>Open Hours</h3>
                      <p>Monday - Friday</p>
                      <p>9:00AM - 05:00PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="php-email-form" data-aos="fade-up" data-aos-delay="200" action="/api/contact" method="post">
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Your Name" required="" name="name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" placeholder="Your Email" required="" name="email" />
                    </div>
                    <div className="col-md-12">
                      <input type="text" className="form-control" placeholder="Subject" required="" name="subject" />
                    </div>
                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
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
                <span className="sitename">Jenish Studio</span>
              </a>
              <div className="footer-contact pt-3">
                <p>Capturing life's precious moments with creativity and passion.</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                <p><strong>Email:</strong> <span>info@jenishstudio.com</span></p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#services">Wedding Photography</a></li>
                <li><a href="#services">Family Portraits</a></li>
                <li><a href="#services">Baby Photography</a></li>
                <li><a href="#services">Model Shoots</a></li>
                <li><a href="#services">Product Photography</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Follow Us</h4>
              <p>Stay connected and see our latest work on social media.</p>
              <div className="social-links d-flex mt-4">
                <a href="#"><i className="bi bi-twitter-x"></i></a>
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-linkedin"></i></a>
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