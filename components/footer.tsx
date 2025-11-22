"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #9DBBD0 0%, #7B9EC4 100%)',
      color: '#fff',
      padding: '4rem 0 2rem'
    }}>
      <div className="container">
        <div className="row g-4">
          {/* Brand Column */}
          <div className="col-md-4 fade-in">
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Gleatopia
            </h3>
            <p style={{
              lineHeight: '1.8',
              opacity: '0.9',
              marginBottom: '1.5rem'
            }}>
              Crafting moments of joy through exceptional ice cream experiences. Every scoop tells a story of passion and creativity.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['📘', '📷', '🐦', '💼'].map((icon, idx) => (
                <div key={idx} className="hover-lift" style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease'
                }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-4 fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {['Home', 'About Us', 'Our Services', 'Shop', 'Contact'].map((link, idx) => (
                <li key={idx} style={{ marginBottom: '0.8rem' }}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} style={{
                    color: '#fff',
                    textDecoration: 'none',
                    opacity: '0.9',
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}>
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-md-4 fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Newsletter
            </h4>
            <p style={{
              opacity: '0.9',
              marginBottom: '1.5rem',
              lineHeight: '1.8'
            }}>
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <div style={{
              display: 'flex',
              gap: '0.5rem'
            }}>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                style={{
                  border: 'none',
                  borderRadius: '50px',
                  padding: '0.8rem 1.5rem',
                  fontSize: '0.95rem',
                  flex: 1
                }}
              />
              <button 
                className="btn hover-lift"
                style={{
                  background: '#fff',
                  color: '#9DBBD0',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '0.8rem 1.5rem',
                  fontWeight: '600',
                  whiteSpace: 'nowrap'
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.2)',
          marginTop: '3rem',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{
            margin: 0,
            opacity: '0.8',
            fontSize: '0.95rem'
          }}>
            © 2025 Gleatopia. All rights reserved. Made with ❤️ and 🍦
          </p>
          <p style={{
            margin: '0.5rem 0 0',
            opacity: '0.7',
            fontSize: '0.85rem'
          }}>
            Privacy Policy | Terms of Service | Cookie Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;