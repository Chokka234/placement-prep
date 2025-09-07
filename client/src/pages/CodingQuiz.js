import React, { useState } from "react";

const codingQuestions = [
  {
    id: 1,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    id: 2,
    question: "Which data structure uses FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
  },
  {
    id: 3,
    question: "What does Big-O notation describe?",
    options: [
      "Best case performance",
      "Average case performance",
      "Worst case performance",
      "Exact runtime",
    ],
    answer: "Worst case performance",
  },
];

function CodingQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (selected === codingQuestions[current].answer) {
      setScore(score + 1);
    }
    if (current < codingQuestions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
    }
  };

  if (finished) {
    return (
      <div style={{ backgroundColor: "#0f172a", color: "white", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ fontSize: "32px", color: "#facc15" }}>🎉 Quiz Completed!</h1>
        <p style={{ fontSize: "20px" }}>
          Your Score: <b>{score}</b> / {codingQuestions.length}
        </p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#0f172a", color: "white", minHeight: "100vh", padding: "40px" }}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <img src="/images/ppklogo.jpg" alt="Logo" style={{ height: "80px", marginBottom: "15px", filter: "drop-shadow(0px 0px 12px gold)" }} />
        <h1 style={{ fontSize: "36px", color: "#facc15", textShadow: "0px 0px 10px gold" }}>
          ⚡ Coding Aptitude Quiz
        </h1>
        <p style={{ color: "#38bdf8" }}>Sharpen your coding aptitude skills 🚀</p>
      </header>

      <div style={{ maxWidth: "700px", margin: "0 auto", background: "#1e293b", padding: "25px", borderRadius: "15px", boxShadow: "0px 6px 16px rgba(0,0,0,0.6)" }}>
        <h2 style={{ marginBottom: "20px" }}>
          {current + 1}. {codingQuestions[current].question}
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {codingQuestions[current].options.map((opt, idx) => (
            <li
              key={idx}
              onClick={() => setSelected(opt)}
              style={{
                marginBottom: "12px",
                padding: "12px",
                borderRadius: "10px",
                cursor: "pointer",
                background: selected === opt ? "#facc15" : "#334155",
                color: selected === opt ? "black" : "white",
                transition: "0.3s",
              }}
            >
              {opt}
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={handlePrev}
            disabled={current === 0}
            style={{
              padding: "10px 20px",
              background: current === 0 ? "#475569" : "#38bdf8",
              border: "none",
              borderRadius: "8px",
              color: "white",
              cursor: current === 0 ? "not-allowed" : "pointer",
            }}
          >
            ⬅ Prev
          </button>

          <button
            onClick={handleNext}
            style={{
              padding: "10px 20px",
              background: "#facc15",
              border: "none",
              borderRadius: "8px",
              color: "black",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {current === codingQuestions.length - 1 ? "Finish ➡" : "Next ➡"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CodingQuiz;
