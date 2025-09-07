import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#0f172a", minHeight: "100vh", color: "white" }}>
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "25px",
          background: "linear-gradient(90deg, #1e293b, #0f172a)",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        {/* Logo with Gold Shine */}
        <div
          style={{
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
            borderRadius: "50%",
          }}
        >
          <img
            src="/images/ppklogo.jpg"
            alt="Logo"
            style={{
              height: "75px",
              filter: "drop-shadow(0px 0px 12px gold)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(120deg, transparent, rgba(255,215,0,0.7), transparent)",
              animation: "shine 3s infinite",
            }}
          ></div>
        </div>

        {/* Welcome Message */}
        <div style={{ marginLeft: "20px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #06b6d4, #22d3ee, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0px 0px 12px rgba(59,130,246,0.8)",
            }}
          >
            🎓 Welcome to Placement Preparation Kit
          </h1>
          <p
            style={{
              margin: "8px 0 0 0",
              fontSize: "18px",
              color: "#facc15",
              fontWeight: "600",
            }}
          >
            Your Complete Placement Companion – Study, Practice, Shop
          </p>
        </div>
      </header>

      {/* Two Banners Side by Side */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "25px 0",
        }}
      >
        <img
          src="/images/dashboard-banner.jpg"
          alt="Banner 1"
          className="dashboard-banner"
          style={{
            width: "45%",
            borderRadius: "15px",
            boxShadow: "0px 6px 16px rgba(0,0,0,0.4)",
            transition: "all 0.4s ease",
          }}
        />
        <img
          src="/images/dash.jpg"
          alt="Banner 2"
          className="dashboard-banner"
          style={{
            width: "45%",
            borderRadius: "15px",
            boxShadow: "0px 6px 16px rgba(0,0,0,0.4)",
            transition: "all 0.4s ease",
          }}
        />
      </div>

      {/* Mission */}
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#22d3ee",
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "10px",
            textShadow: "0px 0px 8px #22d3ee",
          }}
        >
          🌟 Our Mission
        </h2>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "850px",
            margin: "auto",
            color: "#f1f5f9",
            lineHeight: "1.8",
            fontWeight: "500",
          }}
        >
          To provide students with a <b style={{ color: "#fbbf24" }}>single platform</b> where they can{" "}
          <b style={{ color: "#34d399" }}>learn</b>, <b style={{ color: "#60a5fa" }}>practice</b>, and{" "}
          <b style={{ color: "#f472b6" }}>access resources</b> — both digital and physical — to prepare
          effectively for placements.
        </p>
      </section>

      {/* Sections */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "25px",
          padding: "0 50px",
        }}
      >
        {[
          {
            title: "📚 Study Materials",
            color: "#f472b6",
            path: "/study-materials",
            desc: "Access notes, videos, and quizzes.",
          },
          {
            title: "💻 Coding Practise Platform",
            color: "#34d399",
            path: "/editor",
            desc: "Practice coding in C, Python & HTML.",
          },
          {
            title: "🎤 Interview Preparation",
            color: "#34d399",
            path: "/interview-prep",
            desc: "Mock interviews & Q&A sets.",
          },
          {
            title: "🎤 Mock Interview",
            color: "#f97316",
            path: "/mock-interview",
            desc: "Simulate real interview experience.",
          },
          {
            title: "📖 Books Marketplace",
            color: "#fbbf24",
            path: "/books",
            desc: "Buy top-rated prep books.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            onClick={() => navigate(item.path)}
            className="dashboard-card"
            style={{
              background: "#1e293b",
              padding: "25px",
              borderRadius: "14px",
              cursor: "pointer",
              textAlign: "center",
              transition: "all 0.4s ease",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
            }}
          >
            <h3 style={{ fontSize: "22px", fontWeight: "bold", color: item.color }}>{item.title}</h3>
            <p style={{ fontSize: "16px", color: "#cbd5e1" }}>{item.desc}</p>

            {/* Shine effect overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
                animation: "shine 5s infinite",
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* CSS Keyframes + Hover */}
      <style>
        {`
          @keyframes shine {
            0% { left: -100%; }
            50% { left: 100%; }
            100% { left: 100%; }
          }

          /* Hover effect for section cards */
          .dashboard-card:hover {
            transform: scale(1.05);
            box-shadow: 0px 6px 18px rgba(255, 215, 0, 0.6);
          }

          /* Hover effect for banners */
          .dashboard-banner:hover {
            transform: scale(1.03);
            box-shadow: 0px 10px 20px rgba(255, 215, 0, 0.6);
          }
        `}
      </style>
    </div>
  );
}

export default Dashboard;
