import React from "react";
import "../styles/About.css";

const members = [
  {
    name: "CH. SARATH CHANDRIKA",
    role: "TEAM LEAD",
    email: "sarathchandrika17@gmail.com",
    image: "/images/chandrika.jpeg",
    resume: "/resumes/chandrika-res.pdf"
  },
  {
    name: "N. BINDA SUDARSAN",
    role: "DATA SCIENTIST",
    email: "bindasudarsannagasuru@gmail.com",
    image: "/images/binda.jpeg",
    resume: "/resumes/binda-res.pdf"
  },
  {
    name: "K. SARAN",
    role: "WEB DEVELOPER",
    email: "sarankp431@gmail.com",
    image: "/images/saran.jpeg",
    resume: "/resumes/saran-res.pdf"
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

              {member.resume && (
                <a
                  className="portfolio-btn"
                  href={member.resume}
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  View & Download Resume
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
