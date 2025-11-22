"use client";

import React, { useState } from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "The best ice cream I've ever tasted! The vanilla dream is absolutely divine and the service is exceptional. Gleatopia really knows how to make every customer feel special.",
      author: "Dillan Cornelius",
      rating: 5
    },
    {
      text: "Gleatopia catered our wedding and it was a huge hit! Everyone loved the custom flavors we created together. Highly recommended for any special event!",
      author: "Brenda Anastasya",
      rating: 5
    },
    {
      text: "I took the ice cream making class and learned so much! Gleatopia's atmosphere is so welcoming. Can't wait to come back!",
      author: "Happy Calista",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-5" style={{
      background: 'linear-gradient(135deg, #E8D6E6 0%, #9DBBD0 100%)',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div className="text-center mb-5 fade-in">
          <h5 style={{
            color: '#fff',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '2px',
            marginBottom: '1rem'
          }}>
            TESTIMONIALS
          </h5>
          <h2 style={{
            fontSize: '3rem',
            color: '#fff',
            marginBottom: '1rem',
            fontWeight: '700',
            fontFamily: 'Playfair Display, serif'
          }}>
            What Our <em style={{ fontStyle: 'italic' }}>Customers</em> Say
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="scale-in" style={{
              background: 'rgba(255,255,255,0.95)',
              borderRadius: '30px',
              padding: '4rem 3rem',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
              position: 'relative',
              minHeight: '300px'
            }}>
              {/* Quote Icon */}
              <div style={{
                fontSize: '4rem',
                color: '#E8D6E6',
                marginBottom: '1rem',
                opacity: '0.5'
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ marginBottom: '1.5rem' }}>
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} style={{ 
                    color: '#FFD700', 
                    fontSize: '1.5rem',
                    marginRight: '0.2rem'
                  }}>
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p style={{
                fontSize: '1.2rem',
                color: '#333',
                lineHeight: '1.9',
                marginBottom: '2rem',
                fontStyle: 'italic'
              }}>
                {testimonials[currentIndex].text}
              </p>

              {/* Author */}
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: '#9DBBD0',
                fontFamily: 'Playfair Display, serif'
              }}>
                — {testimonials[currentIndex].author}
              </h4>

              {/* Navigation Arrows */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                marginTop: '2rem'
              }}>
                <button
                  onClick={prevTestimonial}
                  className="btn hover-lift"
                  style={{
                    background: '#9DBBD0',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    fontSize: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  ←
                </button>
                <button
                  onClick={nextTestimonial}
                  className="btn hover-lift"
                  style={{
                    background: '#9DBBD0',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    fontSize: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  →
                </button>
              </div>

              {/* Dots Indicator */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '1.5rem'
              }}>
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: index === currentIndex ? '#9DBBD0' : '#ddd',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;