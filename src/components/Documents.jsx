import React from "react";
import "../styles/Documents.css";

const documents = [
  {
    title: "Quantum Optimization Overview",
    description: "A detailed PPT covering quantum-inspired optimization algorithms.",
    image: "https://images.unsplash.com/photo-1581092795365-7f50c84b473d?auto=format&fit=crop&w=400&q=80",
    ppt: "/documents/quantum_optimization.pptx",
    pdf: "/documents/quantum_optimization.pdf",
    doc: "/documents/quantum_optimization.docx"
  },
  {
    title: "Logistics Optimization Report",
    description: "PDF report demonstrating route and resource optimization with quantum methods.",
    image: "https://images.unsplash.com/photo-1600185360884-430f3e8c7d3e?auto=format&fit=crop&w=400&q=80",
    ppt: "/documents/logistics_report.pptx",
    pdf: "/documents/logistics_report.pdf",
    doc: "/documents/logistics_report.docx"
  },
  {
    title: "Hackathon Submission Document",
    description: "Complete documentation of our Amaravati Quantum Valley Hackathon project.",
    image: "https://images.unsplash.com/photo-1612832021086-1a0f2446223c?auto=format&fit=crop&w=400&q=80",
    ppt: "/documents/hackathon_submission.pptx",
    pdf: "/documents/hackathon_submission.pdf",
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
