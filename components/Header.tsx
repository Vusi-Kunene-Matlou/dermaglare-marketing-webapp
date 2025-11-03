'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link href="/">
            <div className="logo-text">
              <img src="/images/logo.png" alt="Dermaglare Logo" className="hero-img" />
            </div>
          </Link>
        </div>

        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li>
              <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className={`nav-dropdown ${isServicesOpen ? 'active' : ''}`}>
              <button 
                className="nav-link dropdown-toggle"
                onClick={toggleServices}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/services/paediatric" onClick={() => setIsMenuOpen(false)}>
                    Paediatric Dermatology
                  </Link>
                </li>
                <li>
                  <Link href="/services/medical" onClick={() => setIsMenuOpen(false)}>
                    Medical Dermatology
                  </Link>
                </li>
                <li>
                  <Link href="/services/surgical" onClick={() => setIsMenuOpen(false)}>
                    Surgical Dermatology
                  </Link>
                </li>
                <li>
                  <Link href="/services/cosmetic" onClick={() => setIsMenuOpen(false)}>
                    Cosmetic Dermatology
                  </Link>
                </li>
                
                <li>
                  <Link href="/services/medical" onClick={() => setIsMenuOpen(false)}>
                    Medical Dermatology
                  </Link>
                </li>

                <li>
                  <Link href="/services/botox" onClick={() => setIsMenuOpen(false)}>
                    Botox
                  </Link>
                </li>

                <li>
                  <Link href="/services/peeling" onClick={() => setIsMenuOpen(false)}>
                    Medical Peeling
                  </Link>
                </li>

                <li>
                  <Link href="/services/skin-tightening" onClick={() => setIsMenuOpen(false)}>
                    Skin Tightening
                  </Link>
                </li>

                <li>
                  <Link href="/services/micro-needling" onClick={() => setIsMenuOpen(false)}>
                    Micro-needling 
                  </Link>
                </li>

                <li>
                  <Link href="/services/prp " onClick={() => setIsMenuOpen(false)}>
                    Platelet-Rich Plasma 
                  </Link>
                </li>

                <li>
                  <Link href="/services/electrocautery " onClick={() => setIsMenuOpen(false)}>
                    Electrocautery & Curettage 
                  </Link>
                </li>

                <li>
                  <Link href="/services/cryosurgery " onClick={() => setIsMenuOpen(false)}>
                    Cryosurgery
                  </Link>
                </li>

              </ul>
            </li>
            <li>
              <Link href="https://dermaglare-patient-portal.vercel.app" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                BOOK APPOINTMENT
              </Link>
            </li>
            <li>
             <Link href="/download-app" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                DOWNLOAD OUR APP
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}