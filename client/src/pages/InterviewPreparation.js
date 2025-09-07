import React from "react";

function InterviewPreparation() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "40px",
        }}
      >
        {/* ✅ Logo */}
        <img
          src="/images/ppklogo.jpg"
          alt="Placement Preparation Kit Logo"
          style={{
            width: "100px",
            height: "70px",
            objectFit: "contain",
            boxShadow: "0 0 20px gold",
          }}
        />
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #FFD700, #FFA500, #FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 15px rgba(255,215,0,0.8)",
            }}
          >
            Interview Preparation Guide
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#9CA3AF",
              marginTop: "10px",
            }}
          >
            Master HR, Technical Ques & Resume Prep — all in one
            place!
          </p>
        </div>
      </header>

      {/* Cards Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          padding: "0 10px",
        }}
      >
        {/* HR Interview Prep */}
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "14px",
            border: "2px solid #f472b6",
            boxShadow: "0 0 20px #f472b6",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 35px #f472b6";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 20px #f472b6";
          }}
        >
          <h2
            style={{
              color: "#f472b6",
              fontSize: "22px",
              marginBottom: "15px",
              textDecoration: "underline",
            }}
          >
            💼 HR Interview Prep
          </h2>
          <ul style={{ lineHeight: "1.8" }}>
            <li>
              <a
                href="/pdfs/TOPHRQUES.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f472b6", textDecoration: "none" }}
              >
                Top HR Questions And Answering Strategies
              </a>
            </li>
          </ul>
        </div>

        {/* Technical Q&A Bank */}
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "14px",
            border: "2px solid #38bdf8",
            boxShadow: "0 0 20px #38bdf8",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 35px #38bdf8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 20px #38bdf8";
          }}
        >
          <h2
            style={{
              color: "#38bdf8",
              fontSize: "22px",
              marginBottom: "15px",
              textDecoration: "underline",
            }}
          >
            ⚙️ Technical Q&A
          </h2>
          <ul style={{ lineHeight: "1.8" }}>
            <li>
              <a
                href="/pdfs/DSAQUES.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#38bdf8", textDecoration: "none" }}
              >
                DSA & Coding Qs
              </a>
            </li>
            <li>
              <a
                href="/pdfs/CSCORE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#38bdf8", textDecoration: "none" }}
              >
                Core CS Concepts
              </a>
            </li>
          </ul>
        </div>

        {/* Resume & Company Prep */}
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "14px",
            border: "2px solid #facc15",
            boxShadow: "0 0 20px #facc15",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 35px #facc15";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 20px #facc15";
          }}
        >
          <h2
            style={{
              color: "#facc15",
              fontSize: "22px",
              marginBottom: "15px",
              textDecoration: "underline",
            }}
          >
            📄 Resume & Company Prep
          </h2>
          <ul style={{ lineHeight: "1.8" }}>
            <li>
              <a
                href="/pdfs/ResumeBuild.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#facc15", textDecoration: "none" }}
              >
                Resume Building Guide
              </a>
            </li>
            <li>
              <a
                href="/pdfs/COMPANYFAQS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#facc15", textDecoration: "none" }}
              >
                Company FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Line */}
      <p
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#fbbf24",
        }}
      >
        🚀 Get Ready, Get Confident, Get Placed!
      </p>
    </div>
  );
}

export default InterviewPreparation;
