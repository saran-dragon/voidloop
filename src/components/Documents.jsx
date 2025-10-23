import React from "react";
import "../styles/Documents.css";

const documents = [
  {
    title: "Quantum Optimization Overview",
    description: "A detailed POSTER covering quantum-inspired optimization algorithms.",
    image: "documents/poster_2.jpg",
    pdf: "/documents/poster.pdf",
  },
  {
    title: "Logistics Optimization Report",
    description: "PPT demonstrating route and resource optimization with quantum methods.",
    image: "documents/pptimg.png",
    ppt: "/documents/voidloop.pptx",
  },
  {
    title: "Hackathon Submission Document",
    description: "Complete documentation of our Amaravati Quantum Valley Hackathon project.",
    image: "https://images.unsplash.com/photo-1612832021086-1a0f2446223c?auto=format&fit=crop&w=400&q=80",
    doc: "/documents/hackathon_submission.docx"
  }
];

export default function Documents() {
  return (
    <section className="documents-page">
      <h1 className="documents-title">Project Documents</h1>
      <div className="documents-container">
        {documents.map((doc, index) => (
          <div className="document-card" key={index}>
            <div className="doc-image">
              <img src={doc.image} alt={doc.title} />
            </div>
            <div className="doc-content">
              <h2>{doc.title}</h2>
              <p>{doc.description}</p>
              <div className="doc-links">
                {doc.ppt && (
                  <a href={doc.ppt} target="_blank" rel="noreferrer" className="btn">
                    Download PPT
                  </a>
                )}
                {doc.pdf && (
                  <a href={doc.pdf} target="_blank" rel="noreferrer" className="btn">
                    Download PDF
                  </a>
                )}
                {doc.doc && (
                  <a href={doc.doc} target="_blank" rel="noreferrer" className="btn">
                    Download DOC
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
