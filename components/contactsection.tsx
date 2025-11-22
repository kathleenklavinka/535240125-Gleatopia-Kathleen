"use client";

import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

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
            GET IN TOUCH
          </h5>
          <h2 style={{
            fontSize: '3rem',
            color: '#333',
            marginBottom: '1rem',
            fontWeight: '700',
            fontFamily: 'Playfair Display, serif'
          }}>
            Let's <em style={{ color: '#E8D6E6' }}>Connect</em>
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Have questions or want to place an order? We'd love to hear from you!
          </p>
        </div>

        <div className="row g-5 align-items-center">
          {/* Contact Info */}
          <div className="col-md-5 slide-in-left">
            <div style={{
              background: 'linear-gradient(135deg, #FDF9E4 0%, #E8D6E6 100%)',
              borderRadius: '30px',
              padding: '3rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '600',
                color: '#333',
                marginBottom: '2rem',
                fontFamily: 'Playfair Display, serif'
              }}>
                Contact Information
              </h3>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(157,187,208,0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '1.5rem'
                  }}>
                    📍
                  </div>
                  <div>
                    <p style={{ margin: 0, color: '#666', fontWeight: '600' }}>Address</p>
                    <p style={{ margin: 0, color: '#333' }}>123 Sweet Street, Flavor Town</p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(157,187,208,0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '1.5rem'
                  }}>
                    📞
                  </div>
                  <div>
                    <p style={{ margin: 0, color: '#666', fontWeight: '600' }}>Phone</p>
                    <p style={{ margin: 0, color: '#333' }}>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(157,187,208,0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    fontSize: '1.5rem'
                  }}>
                    ✉️
                  </div>
                  <div>
                    <p style={{ margin: 0, color: '#666', fontWeight: '600' }}>Email</p>
                    <p style={{ margin: 0, color: '#333' }}>hello@gleatopia.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div style={{ marginTop: '2rem' }}>
                <p style={{ color: '#666', fontWeight: '600', marginBottom: '1rem' }}>Follow Us</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {['📘', '📷', '🐦'].map((icon, idx) => (
                    <div key={idx} className="hover-lift" style={{
                      width: '45px',
                      height: '45px',
                      background: 'rgba(157,187,208,0.3)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontSize: '1.3rem'
                    }}>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7 slide-in-right">
            <form onSubmit={handleSubmit} style={{
              background: '#f8f9fa',
              borderRadius: '30px',
              padding: '3rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
            }}>
              <div className="mb-4">
                <label style={{ 
                  color: '#333', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem',
                  display: 'block'
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                  style={{
                    border: '2px solid #E8D6E6',
                    borderRadius: '15px',
                    padding: '1rem',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label style={{ 
                  color: '#333', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem',
                  display: 'block'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                  style={{
                    border: '2px solid #E8D6E6',
                    borderRadius: '15px',
                    padding: '1rem',
                    fontSize: '1rem'
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-4">
                <label style={{ 
                  color: '#333', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem',
                  display: 'block'
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-control"
                  rows={5}
                  style={{
                    border: '2px solid #E8D6E6',
                    borderRadius: '15px',
                    padding: '1rem',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  placeholder="Tell us what you're thinking..."
                />
              </div>

              <button 
                type="submit"
                className="btn btn-lg w-100 hover-lift"
                style={{
                  background: '#9DBBD0',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '1rem',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  boxShadow: '0 5px 20px rgba(157,187,208,0.3)'
                }}
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;