import React from "react";
import "../styles/About.css";

const members = [
  {
    name: "CH. SARATH CHANDRIKA",
    role: "TEAM LEAD",
    email: "sarathchandrika17@gmail.com",
    image: "/images/chandrika.jpeg",
    portfolio: "https://www.linkedin.com/in/alicesharma"
  },
  {
    name: "N. BINDA SUDARSAN",
    role: "DATA SCIENTIST",
    email: "bindasudarsannagasuru@gmail.com",
    image: "/images/binda.jpeg",
    portfolio: "https://www.linkedin.com/in/binda-sudarsan-nagasuru-570ab2239"
  },
  {
    name: "K. SARAN",
    role: "WEB DEVELOPER",
    email: "sarankp431@gmail.com",
    image: "/images/saran.jpeg",
    portfolio: "https://www.linkedin.com/in/meerdas"
  },
  {
    name: "DR. J. SIVA RAMAKRISHNA",
    role: "MENTOR",
    email: "jsrkrishna3@gmail.com",
    image: "/images/siva-ramakrishna.jpeg",
  }
];

export default function About() {
  return (
    <section className="about-page">
      <h1 className="about-title">MEET OUR TEAM</h1>

      <div className="cards-container">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="card-left">
              <img src={member.image} alt={member.name} />
            </div>

            <div className="card-right">
              <h2>{member.name}</h2>
              <p className="role">{member.role}</p>
              <hr />
              <p className="contact">📧 {member.email}</p>

              {member.portfolio && (
                <a
                  className="portfolio-btn"
                  href={member.portfolio}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Profile
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
