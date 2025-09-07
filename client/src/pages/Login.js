import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      alert("✅ Login successful!");
      console.log("User Data:", res.data);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      navigate("/dashboard");
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      alert(err.response?.data?.msg || "❌ Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          width: "350px",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h1 style={{ marginBottom: "10px", color: "#6a11cb" }}>
          🎓 Welcome to Placement Preparation Kit
        </h1>
        <p style={{ marginBottom: "25px", fontStyle: "italic", color: "#444" }}>
          Your Complete Placement Companion – <b>Study, Practice, Shop</b>
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "14px",
            }}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "14px",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: "linear-gradient(90deg, #6a11cb, #2575fc)",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {loading ? "Logging in..." : "Login 🚀"}
          </button>
        </form>

        {/* Signup Redirect */}
        <p style={{ marginTop: "20px", color: "#555" }}>
          New here?{" "}
          <button
            onClick={() => navigate("/signup")}
            style={{
              background: "none",
              border: "none",
              color: "#2575fc",
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: "14px",
            }}
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
