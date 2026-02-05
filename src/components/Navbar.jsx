import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/documents", label: "Documents" },
//   { to: "/products", label: "Products" },
//   { to: "/contact", label: "Contact" }
// ];

const links = [
  { to: "/", label: "Home" },
  { to: "/documents", label: "Document" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "Contact" },
  // { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="nav-header" role="navigation" aria-label="Main navigation">
      <div className="nav-inner container">
        <NavLink className="brand" to="/" onClick={closeMenu}>
          VOID LOOP
        </NavLink>

        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"} // exact match for home
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
