"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

// Import semua komponen
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import AboutSection from "../components/aboutsection";
import ServicesSection from "../components/servicesection";
import WorkSection from "../components/worksection";
import MenuSection from "../components/menusection";
import GallerySection from "../components/gallerysection";
import TestimonialSection from "../components/testimonialsection";
import ContactSection from "../components/contactsection";
import Footer from "../components/footer";

export default function RootLayout() {
  return (
    <html lang="en">
      <body>

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WorkSection />
          <MenuSection />
          <GallerySection />
          <TestimonialSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* ScrollToTop */}
        <ScrollToTop />

      </body>
    </html>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="hover-lift"
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            background: "#9DBBD0",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            fontSize: "1.5rem",
            cursor: "pointer",
            boxShadow: "0 5px 20px rgba(157,187,208,0.4)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
