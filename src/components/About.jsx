import React from "react";
import "../styles/About.css";

const members = [
  {
    name: "CH.SARATH CHANDRIKA",
    role: "Team Lead",
    department: "Quantum Algorithms",
    image: "images/9.jpg",
    resume: "#",
    portfolio: "https://www.linkedin.com/in/alicesharma"
  },
  {
    name: "N.BINDA SUDARSAN",
    role: "Frontend Developer",
    department: "UI/UX",
    image: "images/11.jpg",
    resume: "#",
    portfolio: "https://www.linkedin.com/in/ravikumar"
  },
  {
    name: "K.SARAN",
    role: "Backend Developer",
    department: "Optimization & Data",
    image: "images/10.jpg",
    resume: "#",
    portfolio: "https://www.linkedin.com/in/meerdas"
  },
  {
    name: "Dr.J. SIVARAMA KRISHNA",
    role: "Mentor",
    department: "Quantum Computing",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a0?auto=format&fit=crop&w=400&q=80"
    // no resume or portfolio links for mentor
  }
];

export default function About() {
  return (
    <section className="about-page">
      <h1 className="about-title">Meet Our Team</h1>
      <div className="cards-container">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <div className="card-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="card-content">
              <h2>{member.name}</h2>
              <p className="role">{member.role}</p>
              <p className="department">{member.department}</p>
              {member.resume || member.portfolio ? (
                <div className="links">
                  {member.resume && (
                    <a href={member.resume} target="_blank" rel="noreferrer">
                      Resume
                    </a>
                  )}
                  {member.portfolio && (
                    <a href={member.portfolio} target="_blank" rel="noreferrer">
                      Portfolio
                    </a>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
