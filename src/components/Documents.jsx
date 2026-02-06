import React from "react";
import "../styles/Documents.css";

const documents = [ 
  {
    title: "Quantum Optimization Overview",
    description: "A detailed POSTER covering quantum-inspired optimization algorithms.",
    image: "documents/poster-card.png",
    pdf: "/documents/poster.jpeg",
  },
  {
    title: "Logistics Optimization Report",
    description: "PPT demonstrating route and resource optimization with quantum methods.",
    image: "documents/ppt-card.png",
    ppt: "/documents/aqvh-ppt.pptx",
  },
  {
  title: "QFLEET Research Paper",
  description: "Official research paper from Amaravathi Quantum Valley Hackathon 2025 on Hybrid Quantum Approximate Optimization for efficient parcel truck routing.",
  image: "documents/paper-card.png",
  pdf: "/documents/Qfleet-research-paper.pdf"
}
];

export default function Documents() {
  return (
    <section className="documents-page">
      <h1 className="documents-title">Project Documents</h1>

      <div className="documents-container">
        {documents.map((doc, index) => (
          <div className="document-card" key={index}>
            
            {/* TOP HALF IMAGE */}
            <div className="doc-image">
              <img src={doc.image} alt={doc.title} />
            </div>

            {/* BOTTOM HALF CONTENT */}
            <div className="doc-content">
              <h2>{doc.title}</h2>
              <p>{doc.description}</p>

              <div className="doc-links">
                {doc.ppt && (
                  <>
                    <a href={doc.ppt} target="_blank" rel="noreferrer" className="btn view-btn">
                      View PPT
                    </a>
                    <a href={doc.ppt} download className="btn download-btn">
                      Download PPT
                    </a>
                  </>
                )}

                {doc.pdf && (
                  <>
                    <a href={doc.pdf} target="_blank" rel="noreferrer" className="btn view-btn">
                      View PDF
                    </a>
                    <a href={doc.pdf} download className="btn download-btn">
                      Download PDF
                    </a>
                  </>
                )}

                {doc.doc && (
                  <>
                    <a href={doc.doc} target="_blank" rel="noreferrer" className="btn view-btn">
                      View DOC
                    </a>
                    <a href={doc.doc} download className="btn download-btn">
                      Download DOC
                    </a>
                  </>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
