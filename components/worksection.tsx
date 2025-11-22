"use client";

import React, { useState, useEffect } from 'react';

const WorkSection = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    setWidth(window.innerWidth); 

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const steps = [
    {
      step: '01',
      title: 'Choose Your Flavor',
      description: 'Browse our extensive menu of classic and signature flavors, or create your own custom combination',
      icon: '🍦',
      color: '#FDF9E4'
    },
    {
      step: '02',
      title: 'Select Your Style',
      description: 'Pick your preferred serving style - cone, cup, sundae, or even an ice cream sandwich',
      icon: '🥤',
      color: '#E8D6E6'
    },
    {
      step: '03',
      title: 'Add Toppings',
      description: 'Customize with our wide selection of premium toppings, sauces, and mix-ins',
      icon: '🍫',
      color: '#EDDDC8'
    },
    {
      step: '04',
      title: 'Enjoy & Share',
      description: 'Savor every moment and share your delicious experience with friends and family',
      icon: '😋',
      color: '#9DBBD0'
    }
  ];

  return (
    <section className="py-5" style={{
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
            THE PROCESS
          </h5>

          <h2 style={{
            fontSize: '3rem',
            color: '#333',
            marginBottom: '1rem',
            fontWeight: '700',
            fontFamily: 'Playfair Display, serif'
          }}>
            How It <em style={{ color: '#E8D6E6' }}>Works</em>
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Your journey to ice cream bliss in four simple steps
          </p>
        </div>

        <div className="row g-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-3 scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className="text-center hover-lift"
                style={{
                  background: step.color,
                  borderRadius: '25px',
                  padding: '2.5rem 1.5rem',
                  height: '100%',
                  position: 'relative',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease'
                }}
              >

                {/* Step number bubble */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#9DBBD0',
                  color: '#fff',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  boxShadow: '0 5px 15px rgba(157,187,208,0.4)'
                }}>
                  {step.step}
                </div>

                {/* Icon */}
                <div className="float" style={{
                  fontSize: '4rem',
                  margin: '2rem 0 1.5rem'
                }}>
                  {step.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '1rem',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p style={{
                  color: '#666',
                  lineHeight: '1.8',
                  fontSize: '0.95rem',
                  margin: 0
                }}>
                  {step.description}
                </p>

                {/* Arrow → only on desktop */}
                {index < steps.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '-20px',
                      transform: 'translateY(-50%)',
                      fontSize: '2rem',
                      color: '#9DBBD0',
                      display: width >= 768 ? 'block' : 'none'
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5 fade-in">
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '2rem'
          }}>
            Ready to create your perfect ice cream experience?
          </p>

          <button
            className="btn btn-lg hover-lift"
            style={{
              background: 'linear-gradient(135deg, #9DBBD0 0%, #7B9EC4 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              padding: '1rem 3rem',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 5px 20px rgba(157,187,208,0.3)'
            }}
          >
            START YOUR ORDER
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;