import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/Home.css";

export default function Home() {
  const heroRef = useRef();
  const contentRef = useRef();

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
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="home-page" ref={heroRef}>
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
            src="https://images.unsplash.com/photo-1605902711622-cfb43c443f71?auto=format&fit=crop&w=800&q=80"
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
            src="https://images.unsplash.com/photo-1581091870621-69b4250eb0b2?auto=format&fit=crop&w=800&q=80"
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
