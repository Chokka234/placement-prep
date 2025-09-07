import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Simple check (no hashing for internship project as you said)
    const user = new User({ email, password });
    await user.save();

    res.json({ msg: "Signup successful!" });
  } catch (err) {
    res.status(500).json({ msg: "Error signing up", error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    // Create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ msg: "Login successful", token });
  } catch (err) {
    res.status(500).json({ msg: "Error logging in", error: err.message });
  }
});

export default router;
