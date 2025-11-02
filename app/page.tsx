import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-subtitle">DERMATOLOGY & SKIN CARE</p>
            <h1 className="hero-title">
              Welcome to<br />
              Dermaglare Skin
            </h1>
            <p className="hero-description">
              Specialist Dermatologist - Dr Jabu Nkehli
            </p>
            <a href="https://vusi-kunene-matlou.github.io/" target="_blank">
              <button className="cta-button">MAKE AN APPOINTMENT</button>
            </a>

            <a href="https://vusi-kunene-matlou.github.io/" target="_blank">
              <button className="cta-button">Download our APP</button>
            </a>
          </div>
          <div className="hero-image">
            {/* Replace with your actual image path */}
            <div className="placeholder-image">
                <img src="/images/doctor-office.jpg" alt="Doctor Office" className="hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-images">
            <div className="main-image">
              <div className="placeholder-image">
                  <img src="/images/smallimage.jpg" alt="Skin-Care" className="hero-img" />
              </div>
            </div>
            <div className="small-image">
              <div className="placeholder-image">
                  <img src="/images/doctor-close-up.jpeg" alt="Doctor Close Up" className="hero-img" />
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <p className="section-label">WHO WE ARE</p>
            <h2 className="section-title">
              Your Dermatology Expert<br />
              - Dr. Jabu Nkehli
            </h2>
            <p className="section-description">
              With a passion for revealing the natural beauty of your skin, hair, and nails, Dr. 
              Jabu Nkehli is a trusted dermatologist in Johannesburg. Her expertise spans 
              across an extensive range of skin conditions, providing personalised and 
              effective treatments for each patient.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Enhance Your Natural Glow</h3>
                  <p className="feature-description">
                    Dr. Nkehli employs her comprehensive dermatology expertise to not 
                    only treat but also enhance the health of your skin, hair, and nails.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                    <line x1="9" y1="9" x2="15" y2="9" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Comprehensive Care for Various Conditions</h3>
                  <p className="feature-description">
                    Dr. Nkehli expertly addresses a range of skin conditions from acne 
                    and pigmentation to complex diseases, leveraging her extensive 
                    experience to guide your recovery journey.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeWidth="2"/>
                    <polyline points="14 2 14 8 20 8" strokeWidth="2"/>
                    <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Personalised Path to Recovery</h3>
                  <p className="feature-description">
                    Recognising the uniqueness of each patient&apos;s skin condition at 
                    Dermaglare Skin, Dr. Nkehli tailors treatment plans to address specific 
                    concerns and promote overall skin health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="why-choose-image">
            <div className="experience-badge">
              <div className="experience-number">15+</div>
              <div className="experience-text">Years Experience</div>
            </div>
            <div className="placeholder-image">
              <img src="/images/doctor-working.jpeg" alt="Doctor Working" className="hero-img" />
            </div>
          </div>

          <div className="why-choose-content">
            <p className="section-label">WHY CHOOSE US</p>
            <h2 className="section-title">
              Experience Dermatological<br />
              Excellence
            </h2>
            <p className="section-description">
              At Dermaglare Skin, you&apos;re not just choosing dermatological care – you&apos;re 
              choosing a trusted partner in your journey to optimal skin health.
            </p>

            <div className="why-choose-features">
              <div className="why-feature-item">
                <div className="why-feature-icon">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="6" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="2" strokeWidth="2" fill="currentColor"/>
                  </svg>
                </div>
                <div className="why-feature-content">
                  <h3 className="why-feature-title">Unmatched Expertise</h3>
                  <p className="why-feature-description">
                    Delivering excellent care to both adult and pediatric patients.
                  </p>
                </div>
              </div>

              <div className="why-feature-item">
                <div className="why-feature-icon">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="why-feature-content">
                  <h3 className="why-feature-title">Making a Difference</h3>
                  <p className="why-feature-description">
                    Beyond clinical practice, Dr Nkehli is deeply committed to 
                    addressing and eradicating disfiguring skin conditions, including 
                    leprosy.
                  </p>
                </div>
              </div>

              <div className="why-feature-item">
                <div className="why-feature-icon">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 3v18h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 17V9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 17v-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 17v-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="why-feature-content">
                  <h3 className="why-feature-title">Leading-edge Dermatology</h3>
                  <p className="why-feature-description">
                    By keeping abreast with the latest advances in dermatology, Dr 
                    Nkehli ensures that her patients receive the most current and 
                    effective treatments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="services-section">
        <div className="services-container">
          <p className="section-label center">WHAT WE OFFER</p>
          <h2 className="section-title center">Revitalise Your Skin</h2>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="8" r="5" strokeWidth="1.5"/>
                  <path d="M20 21a8 8 0 00-16 0" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="service-title">Medical Dermatology</h3>
              <p className="service-description">
                Comprehensive diagnosis, treatment for all ages&apos; skin, nail, hair conditions.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="8" r="5" strokeWidth="1.5"/>
                  <path d="M3 21h18" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 13v8" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="service-title">Botox Injections</h3>
              <p className="service-description">
                Used for treatment of hyperhidrosis (excessive sweating) and facial wrinkles
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="8" r="5" strokeWidth="1.5"/>
                  <path d="M20 21a8 8 0 00-16 0" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 13v3" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="service-title">Paediatric Dermatology</h3>
              <p className="service-description">
                Treatment of all neonatal and childhood skin ailments, infections, and 
                inflammatory disorders.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 3L5 7l4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 3l4 4-4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="3" x2="12" y2="21" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="service-title">Surgical Dermatology</h3>
              <p className="service-description">
                Offering injections, biopsies, excisions, and surgical removal of skin growths.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeWidth="1.5"/>
                  <path d="M12 22V12" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="service-title">Cryosurgery</h3>
              <p className="service-description">
                Cryotherapy uses liquid nitrogen to treat diverse skin conditions effectively.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2a3 3 0 00-3 3v4a3 3 0 006 0V5a3 3 0 00-3-3z" strokeWidth="1.5"/>
                  <path d="M19 10v2a7 7 0 01-14 0v-2" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="12" y1="19" x2="12" y2="22" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="service-title">Cosmetic Dermatology</h3>
              <p className="service-description">
                Aesthetic skin rejuvenation through various methods to achieve healthy skin 
                while minimising imperfections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="map-container">
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.0234567890!2d28.0!3d-26.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA5JzAwLjAiUyAyOMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-info">
                <h3>8 Leicester Rd</h3>
                <p>8 Leicester Rd, Kensington, Johannesburg, 2007</p>
                <Link href="#" className="map-link">View larger map</Link>
                <Link href="#" className="directions-link">Directions</Link>
              </div>
            </div>
          </div>

          <div className="contact-info">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-description">
              Don&apos;t hesitate, to get in touch with us at Dermaglare Skin today, and 
              let&apos;s bring the glow back to your skin!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon phone-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="contact-text">069 322 3134</p>
              </div>

              <div className="contact-item">
                <div className="contact-icon email-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="contact-text">drnkehli@dermaglareskin.co.za</p>
              </div>

              <div className="contact-item">
                <div className="contact-icon location-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeWidth="2"/>
                    <circle cx="12" cy="10" r="3" strokeWidth="2"/>
                  </svg>
                </div>
                <p className="contact-text">
                  Suite 3 Eastwing, Ground floor Wingwood Place<br />
                  Leicester Rd Medical Suites Life Bedford Gardens<br />
                  Hospital 8 Leicester Rd Bedford Gardens
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="footer-info">
          <div className="footer-container">
            <div className="footer-brand">
              <div className="footer-logo">
                <h3>Dermaglare Skin</h3>
              </div>
              <p className="footer-description">
                Your skin health journey begins here at<br />
                Dermaglare Skin. With Dr Jabu Nkehli&apos;s expert<br />
                guidance, we ensure your skin shines its<br />
                brightest.
              </p>
            </div>

            <div className="footer-services">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-list">
                <li><Link href="/services/paediatric">Paediatric Dermatology</Link></li>
                <li><Link href="/services/medical">Medical Dermatology</Link></li>
                <li><Link href="/services/surgical">Surgical Dermatology</Link></li>
                <li><Link href="/services/cosmetic">Cosmetic Dermatology</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3 className="footer-heading">Contact Us</h3>
              <ul className="footer-list">
                <li>069 322 3134</li>
                <li>info@dermaglareskin.co.za</li>
                <li>
                  Suite 3, East Wing Wingwood Medical<br />
                  Suites Life Bedford Gardens 8 Leicester<br />
                  Rd Bedford Gardens
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}