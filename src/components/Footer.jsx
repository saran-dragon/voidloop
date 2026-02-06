import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-row">

        {/* SECTION 1 */}
        <div className="footer-col">
          <h3>Developed as part of</h3>
          <p>Amaravati Quantum Valley Hackathon 2025</p>
        </div>

        {/* SECTION 2 */}
        <div className="footer-col">
          <h3>Team: VOIDLOOP</h3>
          <p>Chillara Sarath Chandrika</p>
          <p>Nagasuru Binda Sudarsan</p>
          <p>Kaspa Saran</p>
        </div>

        {/* SECTION 3 */}
        <div className="footer-col">
          <h3>Mentor</h3>
          <p>Dr. J. Siva Ramakrishna</p>
          <p className="copyright">
            © 2026 Qfleet VL. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
