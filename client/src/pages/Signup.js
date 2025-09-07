import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "student" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/auth/signup", form);
      alert("✅ Signup successful!");
      navigate("/dashboard");
    } catch (err) {
      alert("❌ Error: " + (err.response?.data?.message || "Signup failed"));
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
        background: "linear-gradient(135deg, #1f1c2c, #928dab)", // Dark theme gradient
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#fff",
      }}
    >
      <div
        style={{
          background: "#2c2c38",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
          width: "380px",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h1 style={{ marginBottom: "10px", color: "#ff6f61" }}>
          🎓 Placement Preparation Kit
        </h1>
        <p style={{ marginBottom: "25px", fontStyle: "italic", color: "#bbb" }}>
          Your Complete Placement Companion – <b>Study, Practice, Shop</b>
        </p>

        {/* Signup Form */}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "#1e1e2f",
              color: "#fff",
              fontSize: "14px",
            }}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "#1e1e2f",
              color: "#fff",
              fontSize: "14px",
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "#1e1e2f",
              color: "#fff",
              fontSize: "14px",
            }}
          />

          <select
            name="role"
            onChange={handleChange}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #444",
              background: "#1e1e2f",
              color: "#fff",
              fontSize: "14px",
            }}
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          {/* Signup Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: "linear-gradient(90deg, #ff6f61, #de4313)",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {loading ? "Creating Account..." : "Signup ✨"}
          </button>
        </form>

        {/* Already have account? */}
        <p style={{ marginTop: "20px", color: "#aaa" }}>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ color: "#ff6f61", cursor: "pointer", fontWeight: "bold" }}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
