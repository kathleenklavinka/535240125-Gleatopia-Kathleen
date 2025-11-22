"use client";

import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #d1b2d1ff 0%, #9fb5ccff 50%, #CDECF1 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft Glow Blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "350px",
          height: "350px",
          background: "rgba(255, 182, 193, 0.35)",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "380px",
          height: "380px",
          background: "rgba(173, 216, 230, 0.35)",
          filter: "blur(130px)",
          borderRadius: "50%",
        }}
      ></div>

      <div className="container text-center fade-in">
        <div style={{ display: "inline-block" }}>
          <div
            style={{
              width: "140px",
              height: "140px",
              background: "rgba(255,255,255,0.25)",
              borderRadius: "50%",
              margin: "0 auto 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(14px)",
              border: "4px solid rgba(255,255,255,0.5)",
              boxShadow: "0 0 40px rgba(255,255,255,0.35)",
            }}
          >
            <span
              style={{
                fontSize: "5rem",
                filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.25))",
              }}
            >
              🍦
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: "clamp(2.7rem, 5vw, 4.4rem)",
            fontWeight: "700",
            color: "#ffffff",
            textShadow: "2px 2px 10px rgba(0,0,0,0.25)",
            marginBottom: "1.8rem",
          }}
        >
          Elevating <em style={{ opacity: 0.9 }}>Taste</em> with <br /> Gentle
          Sweetness
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            color: "#ffffff",
            textShadow: "1px 1px 5px rgba(0,0,0,0.25)",
            maxWidth: "650px",
            margin: "0 auto 2.8rem",
            lineHeight: "1.6",
          }}
        >
          Indulge in handcrafted ice cream made with love and premium ingredients
          to sweeten every moment.
        </p>

        <button
          className="btn btn-lg"
          style={{
            background: "rgba(255,255,255,0.95)",
            color: "#8eb3c7",
            border: "none",
            borderRadius: "50px",
            padding: "1rem 3rem",
            fontWeight: "600",
            boxShadow: "0 7px 24px rgba(0,0,0,0.3)",
            cursor: "pointer",
            transition: "0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-5px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          EXPLORE OUR OFFERINGS
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
