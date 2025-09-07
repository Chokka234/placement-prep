import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import StudyMaterials from "./pages/StudyMaterials";
import Quiz from "./pages/Quiz";
import CodingQuiz from "./pages/CodingQuiz";
import CodingEditor from "./pages/CodingEditor";
import InterviewPreparation from "./pages/InterviewPreparation";
import MockInterview from "./pages/MockInterview"; // ✅ Mock Interview
import CameraTest from "./pages/CameraTest"; // ✅ Camera Test
import Books from "./pages/Books"; // ✅ Marketplace Page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/study-materials" element={<StudyMaterials />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/coding-quiz" element={<CodingQuiz />} />
      <Route path="/editor" element={<CodingEditor />} />
      <Route path="/interview-prep" element={<InterviewPreparation />} />
      <Route path="/mock-interview" element={<MockInterview />} />
      <Route path="/camera-test" element={<CameraTest />} />
      <Route path="/books" element={<Books />} /> {/* ✅ Marketplace */}
    </Routes>
  );
}

export default App;
