import React from "react";
import "../styles/Products.css";

const products = [
  {
    title: "Quantum Route Optimizer",
    description: "Optimize delivery and logistics routes using quantum-inspired algorithms.",
    image: "/images/QA_imaage.png",
    link: "https://qfleet.onrender.com/"
  },
  {
    title: "Smart Inventory Manager / Classic",
    description: "Automated inventory management with predictive quantum analytics.",
    image: "/images/CLA_image.png",
    link: "https://classic-m7mj.onrender.com/"
  },
  {
    title: "Energy Efficiency Monitor",
    description: "Monitor and reduce energy consumption using optimized scheduling solutions.",
    image: "/images/QA_imaage.png",
    link: "https://example.com/energy-monitor"
  },
  {
    title: "Quantum Data Analyzer",
    description: "Analyze large datasets faster using quantum-inspired algorithms.",
    image: "/images/CLA_image.png",
    link: "https://example.com/data-analyzer"
  },
  {
    title: "Drone Delivery Planner",
    description: "Plan optimal drone delivery routes integrating quantum optimization.",
    image: "/images/QA_imaage.png",
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
