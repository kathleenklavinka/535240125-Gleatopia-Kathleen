"use client";

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-5" style={{ 
      background: '#fff',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6 slide-in-left">
            <div style={{
              width: '100%',
              height: '500px',
              background: 'linear-gradient(135deg, #FDF9E4 0%, #E8D6E6 100%)',
              borderRadius: '30px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
            }}>
              {/* Decorative circles */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '80px',
                height: '80px',
                background: 'rgba(157,187,208,0.3)',
                borderRadius: '50%'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                width: '100px',
                height: '100px',
                background: 'rgba(157,187,208,0.2)',
                borderRadius: '50%'
              }}></div>
              
              {/* Main Image Placeholder */}
              <div className="pulse" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '250px',
                height: '250px',
                background: 'rgba(255,255,255,0.5)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(5px)'
              }}>
                <span style={{ fontSize: '8rem', opacity: '0.8' }}>🍨</span>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 slide-in-right">
            <h5 style={{
              color: '#9DBBD0',
              fontSize: '0.9rem',
              fontWeight: '600',
              letterSpacing: '2px',
              marginBottom: '1rem'
            }}>
              MEET YOUR MAKER
            </h5>
            
            <h2 style={{
              fontSize: '3rem',
              color: '#333',
              marginBottom: '1rem',
              fontWeight: '700',
              fontFamily: 'Playfair Display, serif'
            }}>
              Hey, I'm <em style={{ color: '#E8D6E6' }}>Kathleen</em>
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              lineHeight: '1.9',
              marginBottom: '1.5rem'
            }}>
              I am a completely seasoned Chef who has been serving exquisite flavors for over a decade. My passion for creating delightful ice cream experiences stems from a deep love for bringing joy to people through handcrafted sweetness.
            </p>
            
            <p style={{ 
              color: '#666', 
              lineHeight: '1.9',
              marginBottom: '2rem'
            }}>
              Every scoop at Gleatopia is made with premium ingredients and infused with creativity. I believe that ice cream is not just a dessert, it's an experience that brings smiles and creates memories.
            </p>
            
            <button 
              className="btn mt-3 hover-lift"
              style={{
                background: '#9DBBD0',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                padding: '1rem 2.5rem',
                fontWeight: '600',
                fontSize: '0.95rem',
                boxShadow: '0 5px 15px rgba(157,187,208,0.3)'
              }}
            >
              MORE ABOUT ME →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;