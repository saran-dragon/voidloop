import React from "react";
import "../styles/Contact.css";

const contacts = [
  {
    name: "Alice Sharma",
    email: "alice.sharma@gmail.com",
    role: "Team Lead"
  },
  {
    name: "Ravi Kumar",
    email: "ravi.kumar@gmail.com",
    role: "Frontend Developer"
  },
  {
    name: "Meera Das",
    email: "meera.das@gmail.com",
    role: "Backend Developer"
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
