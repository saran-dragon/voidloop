import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/Home.css";

export default function Home() {
  const heroRef = useRef();
  const [showPoster, setShowPoster] = useState(true);

  useEffect(() => {
    gsap.from(".home-hero .title", { y: 30, opacity: 0, duration: 1 });
    gsap.from(".home-hero .subtitle", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.3
    });

    const timer = setTimeout(() => setShowPoster(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPoster && (
        <div className="intro-poster">
          <div className="poster-content">
            <img src="/documents/poster_2.jpg" alt="Poster" />
            <button className="close-button" onClick={() => setShowPoster(false)}>
              ✕ Close
            </button>
          </div>
        </div>
      )}

      <section className="home-page" ref={heroRef}>

        {/* HERO (TITLE NOW CLEAR & VISIBLE) */}
        <div className="home-hero section-card center title-wrapper">
          <h1 className="title">
            QFLEET: Smart Route Optimization Powered by Quantum Computing
          </h1>
          <p className="subtitle">
            Revolutionizing logistics with a hybrid Quantum–Classical platform.
          </p>
        </div>

        {/* PROBLEM VS SOLUTION CARD */}
        <div className="image-card">
          <img src="images/problem-vs-solution-bg.jpeg" alt="Problem vs Solution" />
          <div className="image-card-overlay">
            <h2>The Problem vs The Solution</h2>
            <p>
              India’s logistics suffers from congestion and inefficiency.  
              QFLEET solves this using a hybrid quantum-classical approach.
            </p>
          </div>
        </div>

        {/* PERFORMANCE METRICS CARD */}
        <div className="image-card">
          <img src="images/performance-metrix.jpeg" alt="Performance Metrics" />
          <div className="image-card-overlay">
            <h2>Performance Metrics</h2>
            <ul>
              <li><b>26.1% Faster Delivery</b></li>
              <li><b>21.1% Fuel Savings</b></li>
              <li><b>23.6% Cost Reduction</b></li>
              <li><b>85.9% Faster Processing</b></li>
            </ul>
          </div>
        </div>

        {/* KEY FEATURES CARD */}
        <div className="image-card">
          <img src="images/key-features.jpeg" alt="Key Features" />
          <div className="image-card-overlay">
            <h2>Key Features</h2>
            <ul>
              <li>Interactive Route Maps</li>
              <li>Google Maps + OSRM Integration</li>
              <li>Live ETA & Fuel Tracking</li>
              <li>Dynamic Re-routing</li>
            </ul>
          </div>
        </div>

        {/* USE CASES CARD */}
        <div className="image-card">
          <img src="images/usecase.jpeg" alt="Use Cases" />
          <div className="image-card-overlay">
            <h2>Use Cases</h2>
            <ul>
              <li>Healthcare Logistics</li>
              <li>State Logistics</li>
              <li>School Meal Delivery</li>
            </ul>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="site-footer">
          <div className="footer-grid">
            <div>
              <h3>Team Void Loop</h3>
              <p>AQVH 2025</p>
            </div>
            <div>
              <h3>Team Members</h3>
              <p>Sarath Chandreika</p>
              <p>Binda Sudharsan</p>
              <p>Sara</p>
            </div>
            <div>
              <h3>Powered By</h3>
              <p>IBM Quantum & Qiskit</p>
            </div>
            <div>
              <h3>Copyright</h3>
              <p>© 2026 Qfleet VL. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </section>
    </>
  );
}
