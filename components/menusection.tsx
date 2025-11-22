"use client";

import React, { useState, useEffect } from 'react';

const MenuSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Vanilla Dream",
      image: "https://i.pinimg.com/1200x/e1/60/4f/e1604fefcae1a04721f7c78a9821dc0c.jpg",
      accentColor: "#BBA249"
    },
    {
      id: 2,
      title: "Strawberry Bliss",
      image: "https://i.pinimg.com/1200x/dc/eb/a0/dceba030068861ab448e9d98f12bf6a2.jpg",
      accentColor: "#e7bbe1ff"
    },
    {
      id: 3,
      title: "Chocolate Heaven",
      image: "https://i.pinimg.com/736x/6d/18/3f/6d183fa46ad34df2f70ddcbabd8c9035.jpg",
      accentColor: "#BBA249"
    },
    {
      id: 4,
      title: "Mint Fresh",
      image: "https://i.pinimg.com/1200x/da/b4/a3/dab4a3676a7f0f1259eee3ea5b046591.jpg",
      accentColor: "#7B9EC4"
    }
  ];

  const menuItems = [
    {
      category: 'Classic Flavors',
      items: [
        { name: 'Vanilla Bean', price: '$4.50', description: 'Pure Madagascar vanilla' },
        { name: 'Chocolate Fudge', price: '$4.50', description: 'Rich Belgian chocolate' },
        { name: 'Strawberry Fresh', price: '$4.50', description: 'Real strawberry chunks' }
      ],
      color: '#FDF9E4'
    },
    {
      category: 'Signature Creations',
      items: [
        { name: 'Salted Caramel', price: '$5.50', description: 'House-made caramel swirl' },
        { name: 'Mint Chocolate Chip', price: '$5.50', description: 'Fresh mint leaves' },
        { name: 'Cookie Dough', price: '$5.50', description: 'Edible cookie pieces' }
      ],
      color: '#E8D6E6'
    },
    {
      category: 'Premium Selection',
      items: [
        { name: 'Tiramisu Dream', price: '$6.50', description: 'Coffee & mascarpone' },
        { name: 'Pistachio Rose', price: '$6.50', description: 'Turkish pistachios' },
        { name: 'Lavender Honey', price: '$6.50', description: 'Organic lavender' }
      ],
      color: '#9DBBD0'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="menu" className="py-5" style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5 fade-in">
          <h5 style={{
            color: '#9DBBD0',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '2px',
            marginBottom: '1rem'
          }}>
            OUR MENU
          </h5>
          <h2 style={{
            fontSize: '3rem',
            color: '#333',
            marginBottom: '1rem',
            fontWeight: '700',
            fontFamily: 'Playfair Display, serif'
          }}>
            Explore Our <em style={{ color: '#9DBBD0' }}>Flavors</em>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            From timeless classics to innovative creations
          </p>
        </div>

        {/* Image Slider */}
        <div style={{
          position: 'relative',
          borderRadius: '30px',
          overflow: 'hidden',
          marginBottom: '4rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          height: '400px'
        }} className="scale-in">
          {/* Slider Images */}
          {slides.map((slide, index: number) => (
            <div
              key={slide.id}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Slide Title */}
              <div style={{
                position: 'absolute',
                bottom: '3rem',
                left: '3rem',
                color: '#fff',
                zIndex: 2
              }}>
                <h3 style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  fontFamily: 'Playfair Display, serif',
                  textShadow: '0 5px 20px rgba(0,0,0,0.5)',
                  margin: 0
                }}>
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hover-lift"
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
              zIndex: 10,
              transition: 'all 0.3s ease',
              fontSize: '1.8rem',
              color: '#333',
              fontWeight: 'bold'
            }}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="hover-lift"
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
              zIndex: 10,
              transition: 'all 0.3s ease',
              fontSize: '1.8rem',
              color: '#333',
              fontWeight: 'bold'
            }}
            aria-label="Next slide"
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '0.8rem',
            zIndex: 10
          }}>
            {slides.map((_, index: number) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: currentSlide === index ? '35px' : '10px',
                  height: '10px',
                  borderRadius: '10px',
                  border: 'none',
                  background: currentSlide === index 
                    ? '#fff'
                    : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: currentSlide === index 
                    ? '0 3px 10px rgba(0,0,0,0.3)'
                    : 'none'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Menu Cards */}
        <div className="row g-4 mb-5">
          {menuItems.map((category, catIndex: number) => (
            <div key={catIndex} className="col-md-4 scale-in" style={{
              animationDelay: `${catIndex * 0.2}s`
            }}>
              <div style={{
                background: category.color,
                borderRadius: '25px',
                padding: '2.5rem 2rem',
                height: '100%',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '2rem',
                  fontFamily: 'Playfair Display, serif',
                  textAlign: 'center'
                }}>
                  {category.category}
                </h3>

                {category.items.map((item, itemIndex: number) => (
                  <div key={itemIndex} className="hover-lift" style={{
                    background: 'rgba(255,255,255,0.6)',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    marginBottom: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      <h4 style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: '#333',
                        margin: 0
                      }}>
                        {item.name}
                      </h4>
                      <span style={{
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        color: '#9DBBD0'
                      }}>
                        {item.price}
                      </span>
                    </div>
                    <p style={{
                      color: '#666',
                      margin: 0,
                      fontSize: '0.95rem'
                    }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="text-center fade-in" style={{
          background: 'rgba(255,255,255,0.9)',
          borderRadius: '25px',
          padding: '2.5rem',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#333',
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif'
          }}>
            🎉 Special Offer 🎉
          </h3>
          <p style={{
            fontSize: '1.2rem',
            color: '#666',
            marginBottom: '1.5rem'
          }}>
            Buy 3 scoops, get 1 free! Valid every Tuesday & Thursday
          </p>
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
            ORDER NOW
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hover-lift {
            width: 40px !important;
            height: 40px !important;
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default MenuSection;