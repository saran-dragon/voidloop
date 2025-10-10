import React from "react";
import "../styles/Products.css";

const products = [
  {
    title: "Quantum Route Optimizer",
    description: "Optimize delivery and logistics routes using quantum-inspired algorithms.",
    image: "https://images.unsplash.com/photo-1612831455542-5a3f2d4c5f2b?auto=format&fit=crop&w=400&q=80",
    link: "https://example.com/quantum-route"
  },
  {
    title: "Smart Inventory Manager",
    description: "Automated inventory management with predictive quantum analytics.",
    image: "https://images.unsplash.com/photo-1600185360884-430f3e8c7d3e?auto=format&fit=crop&w=400&q=80",
    link: "https://example.com/inventory-manager"
  },
  {
    title: "Energy Efficiency Monitor",
    description: "Monitor and reduce energy consumption using optimized scheduling solutions.",
    image: "https://images.unsplash.com/photo-1612832021086-1a0f2446223c?auto=format&fit=crop&w=400&q=80",
    link: "https://example.com/energy-monitor"
  },
  {
    title: "Quantum Data Analyzer",
    description: "Analyze large datasets faster using quantum-inspired algorithms.",
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c443f71?auto=format&fit=crop&w=400&q=80",
    link: "https://example.com/data-analyzer"
  },
  {
    title: "Drone Delivery Planner",
    description: "Plan optimal drone delivery routes integrating quantum optimization.",
    image: "https://images.unsplash.com/photo-1581091870621-69b4250eb0b2?auto=format&fit=crop&w=400&q=80",
    link: "https://example.com/drone-delivery"
  }
];

export default function Products() {
  return (
    <section className="products-page">
      <h1 className="products-title">Our Products</h1>
      <div className="products-container">
        {products.map((product, index) => (
          <a
            className="product-card"
            href={product.link}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-content">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
