"use client";

import React from 'react';

const GallerySection = () => {
  const flavors = [
    { name: 'Vanilla Dream', color: '#FDF9E4', emoji: '🍦' },
    { name: 'Strawberry Bliss', color: '#E8D6E6', emoji: '🍓' },
    { name: 'Chocolate Heaven', color: '#BBA249', emoji: '🍫' },
    { name: 'Mint Fresh', color: '#7B9EC4', emoji: '🌿' },
    { name: 'Caramel Delight', color: '#EDDDC8', emoji: '🍮' },
    { name: 'Berry Burst', color: '#9DBBD0', emoji: '🫐' }
  ];

  return (
    <section id="shop" className="py-5" style={{
      background: '#fff',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <h5 style={{
            color: '#9DBBD0',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '2px',
            marginBottom: '1rem'
          }}>
            OUR COLLECTION
          </h5>
          <h2 style={{
            fontSize: '3rem',
            color: '#333',
            marginBottom: '1rem',
            fontWeight: '700',
            fontFamily: 'Playfair Display, serif'
          }}>
            Signature <em style={{ color: '#E8D6E6' }}>Flavors</em>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Handcrafted with love, served with a smile
          </p>
        </div>

        <div className="row g-4">
          {flavors.map((flavor, index) => (
            <div key={index} className="col-md-4 col-sm-6 scale-in" style={{
              animationDelay: `${index * 0.1}s`
            }}>
              <div className="card hover-lift" style={{
                background: flavor.color,
                border: 'none',
                borderRadius: '25px',
                padding: '2.5rem 2rem',
                height: '100%',
                textAlign: 'center',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Decorative element */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '80px',
                  height: '80px',
                  background: 'rgba(255,255,255,0.3)',
                  borderRadius: '50%'
                }}></div>
                
                <div style={{
                  fontSize: '5rem',
                  marginBottom: '1rem',
                  display: 'inline-block'
                }} className="pulse">
                  {flavor.emoji}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#333',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  {flavor.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button 
            className="btn btn-lg hover-lift"
            style={{
              background: '#9DBBD0',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              padding: '1rem 3rem',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 5px 20px rgba(157,187,208,0.3)'
            }}
          >
            VIEW FULL MENU
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;