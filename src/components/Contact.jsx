import React from "react";
import "../styles/Contact.css";

const contacts = [
  {
    name: "CH.SARATH CHANDRIKA",
    email: "sarathchandrika17@gmail.com",
    role: "Team Lead"
  },
  {
    name: "N.BINDA SUDHARSAN",
    email: "bindasudarsannagasuru@gmail.com",
    role: "Frontend Developer"
  },
  {
    name: "K.SARAN",
    email: "sarankp431@gmail.com",
    role: "Backend Developer"
  },
  {
    name: "Dr.J. SIVARAMA KRISHNA",
    email: "jsrkrishna3@gmail.com",
    role: "MENTOR"
  }
];

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="team-name">
        <h1>Void Loop</h1>
      </div>
      <div className="contact-container">
        {contacts.map((person, index) => (
          <div className="contact-card" key={index}>
            <h2>{person.name}</h2>
            <p className="role">{person.role}</p>
            <p className="email">
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
