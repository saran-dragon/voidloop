import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/Home.css";

export default function Home() {
  const heroRef = useRef();
  const contentRef = useRef();
  const posterRef = useRef();
  const [showPoster, setShowPoster] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.from(".home-hero .title", { y: 40, opacity: 0, duration: 1 });
      gsap.from(".home-hero .subtitle", { y: 20, opacity: 0, duration: 0.8, delay: 0.5 });

      // Content sections animation
      gsap.from(".home-content .section", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        delay: 1
      });

      // Images fade-in
      gsap.from(".home-content img", { opacity: 0, y: 20, duration: 1, stagger: 0.3, delay: 1 });

      // Poster animation
      if (showPoster) {
        gsap.from(".intro-poster", { opacity: 0, duration: 1 });
        // Fade out after 5 seconds
        gsap.to(".intro-poster", {
          opacity: 0,
          duration: 1,
          delay: 5,
          ease: "power2.out",
          onComplete: () => setShowPoster(false)
        });
      }
    }, heroRef);

    // Auto-close poster after 5 seconds
    let timer;
    if (showPoster) {
      timer = setTimeout(() => {
        gsap.to(".intro-poster", {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => setShowPoster(false)
        });
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [showPoster]);

  // Handle manual close with fade-out
  const handleClose = () => {
    gsap.to(".intro-poster", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => setShowPoster(false)
    });
  };

  return (
    <section className="home-page" ref={heroRef}>
      {showPoster && (
        <div className="intro-poster" ref={posterRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundImage: `url(documents/poster_2.jpg)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', zIndex: 1000 }}>
          <button className="close-button" onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1001, padding: '10px 20px', background: '#fff', border: 'none', cursor: 'pointer', color: '#000' }}>
            Close
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="home-hero">
        <h1 className="title">Amaravati Quantum Valley Hackathon</h1>
        <p className="subtitle">
          Exploring quantum-inspired solutions for real-world optimization problems.
        </p>
      </div>

      {/* Problem Statement Section */}
      <div className="home-content" ref={contentRef}>
        <div className="section">
          <h2>Our Problem Statement</h2>
          <img
            src="images/home-1.png"
            alt="Problem Statement"
          />
          <p>
            We aim to revolutionize logistics and resource allocation through quantum-inspired optimization algorithms.
            Our goal is to overcome inefficiencies in traditional delivery systems by integrating hybrid quantum-classical models that minimize travel distances, reduce fuel consumption, and improve delivery timelines.
            This innovation focuses on large-scale operations such as postal networks, healthcare logistics, and supply chain systems, ultimately reducing operational costs and environmental impact while enhancing real-time efficiency.
          </p>
        </div>

        <div className="section">
          <h2>Challenge Context</h2>
          <img
            src="images/home-2.png"
            alt="Challenge Context"
          />
          <p>
            The Amaravati Quantum Valley Hackathon 2025 challenges innovators to merge classical computing methods with quantum technologies to solve complex optimization problems.
            Our project, QFLEET, addresses this challenge by applying quantum-inspired path optimization to real-world logistics scenarios.
            By leveraging interactive maps, dynamic route planning, and QUBO-based formulations, QFLEET demonstrates how quantum algorithms can transform public-sector delivery systems like India Post into efficient, data-driven logistics networks.
          </p>
        </div>

        <div className="section">
          <h2>Key Objectives</h2>
          <ul>
            <li>Visualize optimized routes for real-world logistics.</li>
            <li>Compare classical vs. quantum-inspired solutions.</li>
            <li>Show efficiency gains in time, distance, and fuel.</li>
            <li>Create an interactive, engaging user experience.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}