import React, { useState } from "react";
import quizData from "../data/dsa_quiz.json";
import "./Quiz.css"; // optional for extra styling

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    const nextQ = currentQuestion + 1;
    if (nextQ < quizData.length) {
      setCurrentQuestion(nextQ);
    } else {
      setShowScore(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption("");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        textAlign: "center",
      }}
    >
      {/* Logo + Heading */}
      <div style={{ marginBottom: "30px" }}>
        <img
          src="/images/ppklogo.jpg"
          alt="Logo"
          style={{
            height: "100px",
            filter:
              "drop-shadow(0 0 12px gold) drop-shadow(0 0 24px goldenrod)",
          }}
        />
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            color: "#facc15",
            textShadow: "0px 0px 12px #fbbf24, 0px 0px 24px #f59e0b",
            marginTop: "15px",
          }}
        >
          ⚡ DSA Practice Questions ⚡
        </h1>
        <p style={{ fontSize: "18px", color: "#93c5fd" }}>
          Sharpen your coding skills with handpicked DSA problems
        </p>
      </div>

      {/* Quiz Section */}
      {showScore ? (
        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 0 15px #facc15",
            maxWidth: "600px",
            margin: "auto",
          }}
        >
          <h2>
            🎉 You scored {score} out of {quizData.length}
          </h2>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#1e293b",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 0 15px #334155",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          <h2 style={{ color: "#facc15" }}>
            Question {currentQuestion + 1} of {quizData.length}
          </h2>
          <p style={{ fontSize: "20px", marginBottom: "20px" }}>
            {quizData[currentQuestion].question}
          </p>

          <div>
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "12px",
                  margin: "10px 0",
                  borderRadius: "8px",
                  backgroundColor:
                    selectedOption === option ? "#facc15" : "#334155",
                  color: selectedOption === option ? "black" : "white",
                  cursor: "pointer",
                  fontSize: "16px",
                  border: "none",
                  transition: "0.3s",
                }}
              >
                {option}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                backgroundColor: "#2563eb",
                color: "white",
                cursor: currentQuestion === 0 ? "not-allowed" : "pointer",
              }}
            >
              ← Prev
            </button>
            <button
              onClick={handleNext}
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                backgroundColor: "#22c55e",
                color: "white",
                cursor: "pointer",
              }}
            >
              {currentQuestion === quizData.length - 1 ? "Finish" : "Next →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
