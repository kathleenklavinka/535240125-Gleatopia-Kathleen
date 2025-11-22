"use client";

import React, { useState } from 'react';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    { 
      title: 'Custom Flavors',
      description: 'Explore our signature menu or craft your own unique combination with premium ingredients',
      color: '#FDF9E4',
      icon: '🎨',
      stat: '100+',
      statLabel: 'Unique Flavors',
      price: 'Starting from $4.50',
      image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80'
    },
    {
      title: 'Catering Events',
      description: 'Make your events memorable with our ice cream catering service for all occasions',
      color: '#E8D6E6',
      icon: '🎉',
      stat: '500+',
      statLabel: 'Events Catered',
      price: 'Starting from $250',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80'
    },
    {
      title: 'Ice Cream Classes',
      description: 'Learn the art of ice cream making in our fun and interactive workshop sessions',
      color: '#9DBBD0',
      icon: '👩‍🍳',
      stat: '50+',
      statLabel: 'Classes Monthly',
      price: 'Starting from $35/person',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80'
    }
  ];

  return (
    <section id="services" className="py-5" style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Floating Shapes */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(157,187,208,0.1)',
        filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '8%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'rgba(232,214,230,0.15)',
        filter: 'blur(50px)',
        animation: 'float 10s ease-in-out infinite reverse'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="text-center mb-5 fade-in">
          <h5 style={{
            color: '#9DBBD0',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '2px',
            marginBottom: '1rem'
          }}>
            WHAT WE OFFER
          </h5>
          <h2 style={{
            fontSize: '3rem',
            color: '#333',
            marginBottom: '1rem',
            fontWeight: '700',
            fontFamily: 'Playfair Display, serif'
          }}>
            Our <em style={{ color: '#9DBBD0' }}>Services</em>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Discover the sweet experiences we create for you
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index: number) => (
            <div 
              key={index} 
              className="col-md-4 scale-in" 
              style={{
                animationDelay: `${index * 0.2}s`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className="card"
                style={{
                  background: service.color,
                  border: 'none',
                  borderRadius: '25px',
                  padding: '0',
                  height: '100%',
                  boxShadow: hoveredCard === index 
                    ? '0 20px 60px rgba(0,0,0,0.2)' 
                    : '0 5px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: hoveredCard === index ? 'translateY(-15px) scale(1.02)' : 'translateY(0) scale(1)',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {/* Image with Overlay */}
                <div style={{
                  height: '200px',
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  transition: 'transform 0.4s ease',
                  transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)'
                }}>
                  {/* Icon Floating */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '5rem',
                    transition: 'all 0.4s ease',
                    animation: hoveredCard === index ? 'bounce 0.6s ease' : 'none',
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                  }}>
                    {service.icon}
                  </div>

                  {/* Glow Effect behind icon */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '150px',
                    height: '150px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    filter: 'blur(30px)',
                    opacity: hoveredCard === index ? 1 : 0.5,
                    transition: 'opacity 0.4s ease'
                  }}></div>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '1rem',
                    fontFamily: 'Playfair Display, serif',
                    textAlign: 'center'
                  }}>
                    {service.title}
                  </h3>
                  
                  <p style={{
                    color: '#666',
                    lineHeight: '1.8',
                    fontSize: '1rem',
                    textAlign: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    {service.description}
                  </p>

                  {/* Stats Counter */}
                  <div style={{
                    background: 'rgba(255,255,255,0.5)',
                    borderRadius: '15px',
                    padding: '1rem',
                    textAlign: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#9DBBD0',
                      fontFamily: 'Playfair Display, serif'
                    }}>
                      {service.stat}
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      color: '#666',
                      fontWeight: '600',
                      letterSpacing: '1px'
                    }}>
                      {service.statLabel}
                    </div>
                  </div>

                  {/* Price */}
                  <div style={{
                    textAlign: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <span style={{
                      background: 'rgba(157,187,208,0.2)',
                      padding: '0.5rem 1.5rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      {service.price}
                    </span>
                  </div>

                  {/* Learn More Button */}
                  <button
                    className="hover-lift"
                    style={{
                      width: '100%',
                      background: hoveredCard === index ? '#9DBBD0' : 'rgba(255,255,255,0.7)',
                      color: hoveredCard === index ? '#fff' : '#333',
                      border: hoveredCard === index ? 'none' : '2px solid #9DBBD0',
                      borderRadius: '50px',
                      padding: '1rem 2rem',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: hoveredCard === index ? '0 5px 20px rgba(157,187,208,0.4)' : 'none'
                    }}
                  >
                    Learn More →
                  </button>
                </div>

                {/* Decorative Corner Element */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '100px',
                  height: '100px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  transition: 'all 0.4s ease',
                  transform: hoveredCard === index ? 'scale(1.5)' : 'scale(1)'
                }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5 pt-4 fade-in" style={{
          background: 'rgba(255,255,255,0.7)',
          borderRadius: '25px',
          padding: '3rem 2rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#333',
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif'
          }}>
            Ready to Create Something Sweet?
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Let's make your next event unforgettable with our premium ice cream services
          </p>
          <button 
            className="btn hover-lift"
            style={{
              background: 'linear-gradient(135deg, #9DBBD0, #7B9EC4)',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              padding: '1.2rem 3rem',
              fontWeight: '600',
              fontSize: '1rem',
              boxShadow: '0 10px 30px rgba(157,187,208,0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            GET IN TOUCH ✨
          </button>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        @media (max-width: 768px) {
          .col-md-4 {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;