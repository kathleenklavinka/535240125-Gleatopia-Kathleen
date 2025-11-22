"use client";

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-white shadow' : 'bg-transparent'}`}
      style={{
        transition: 'all 0.3s ease',
        padding: '1rem 0'
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="#" style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '1.8rem',
          fontWeight: '700',
          color: scrolled ? '#9DBBD0' : '#fff',
          textShadow: scrolled ? 'none' : '2px 2px 4px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease'
        }}>
          Gleatopia
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{
            border: scrolled ? '1px solid #9DBBD0' : '1px solid #fff'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {['HOME', 'ABOUT', 'SERVICES', 'SHOP'].map((item, idx) => (
              <li className="nav-item" key={idx}>
                <a 
                  className="nav-link" 
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: scrolled ? '#333' : '#fff',
                    fontWeight: '500',
                    margin: '0 1rem',
                    transition: 'all 0.3s ease',
                    textShadow: scrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.2)',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#9DBBD0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = scrolled ? '#333' : '#fff';
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;