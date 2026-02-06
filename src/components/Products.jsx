import React from "react";
import "../styles/Products.css";

const products = [
  
  {
    title: "futur simulator",
    description: "furtre simulator",
    image: "/images/simulation-card.png",
    link: " https://quantumfleetsim-web-171621255618.us-central1.run.app"
  },
  {
    title: "Quantum Route Optimizer",
    description: "Optimize delivery and logistics routes using quantum-inspired algorithms.",
    image: "/images/qaoa-card.png",
    link: "https://qfleetnew.onrender.com"
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
