import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./StudyMaterials.css"; // import CSS file for hover effects

function StudyMaterials() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Header with Logo */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <img
          src="/images/ppklogo.jpg"
          alt="Logo"
          style={{
            height: "80px",
            marginBottom: "10px",
            filter: "drop-shadow(0 0 12px gold) drop-shadow(0 0 24px goldenrod)",
          }}
        />
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#facc15",
            textShadow: "0px 0px 10px #f59e0b, 0px 0px 20px #fbbf24",
          }}
        >
          📘 Study Materials
        </h1>
        <p style={{ fontSize: "18px", color: "#e2e8f0" }}>
          Boost Your Preparation With{" "}
          <b style={{ color: "#f472b6" }}>Articles</b>,{" "}
          <b style={{ color: "#facc15" }}>Notes</b>,{" "}
          <b style={{ color: "#34d399" }}>Videos</b>,{" "}
          <b style={{ color: "#a78bfa" }}>Quizzes</b> and{" "}
          <b style={{ color: "#38bdf8" }}>Extra Resources</b> — all in one
          place!
        </p>
      </div>

      {/* Grid for 5 Sections */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Articles */}
        <div className="card-section pink-shadow">
          <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#f472b6" }}>
            📝 Articles
          </h2>
          <ul>
            <li>
              <a
                href="/pdfs/Tips_for_Cracking_Aptitude_Round.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#93c5fd" }}
              >
                Tips for Cracking the Aptitude Round
              </a>
            </li>
            <li>
              <a
                href="/pdfs/hr.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#93c5fd" }}
              >
                Top 50 HR Interview Questions
              </a>
            </li>
          </ul>
        </div>

        {/* Notes */}
        <div className="card-section yellow-shadow">
          <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#facc15" }}>
            📒 Notes
          </h2>
          <ul>
            <li>
              <a
                href="/pdfs/DSA_Python_CheatSheet_50Q.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#93c5fd" }}
              >
                DSA Cheat Sheet
              </a>
            </li>
            <li>
              <a
                href="/pdfs/Aptitude_Formula_Handbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#93c5fd" }}
              >
                Aptitude Formulas
              </a>
            </li>
          </ul>
        </div>

        {/* Videos */}
        <div className="card-section green-shadow">
          <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#34d399" }}>
            🎥 Videos
          </h2>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/embed/VTLCoHnyACE?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#93c5fd" }}
              >
                DSA Full Course
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/embed/Y9Pyv-GWbmg?si=4gp-ALjwIHjFMfJ7"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#93c5fd" }}
              >
                Resume Building Tips
              </a>
            </li>
          </ul>
        </div>

        {/* Quizzes */}
        <div className="card-section purple-shadow">
          <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#a78bfa" }}>
            ❓ Quizzes
          </h2>
          <ul>
            <li>
              <Link to="/quiz" style={{ color: "#93c5fd" }}>
                DSA Quiz (Python)
              </Link>
            </li>
            <li>
              <Link to="/coding-quiz" style={{ color: "#93c5fd" }}>
                Coding Aptitude Quiz
              </Link>
            </li>
          </ul>
        </div>

        {/* Extra Resources */}
        <div className="card-section blue-shadow">
          <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#38bdf8" }}>
            📂 Extra Resources
          </h2>
          <ul>
            <li>
              <a
                href="/pdfs/Placement_Preparation_Guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#93c5fd" }}
              >
                Placement Preparation Guide (PDF)
              </a>
            </li>
            <li>
              <a
                href="/pdfs/COMPANY.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#93c5fd" }}
              >
                Company-Specific FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-tagline">
        🌟 Study Resources That Get You Placed 🌟
      </footer>
    </div>
  );
}

export default StudyMaterials;
