import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

function CodingEditor() {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(`print("Hello, Python!")`);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  // Supported languages & Judge0 IDs
  const languages = {
    python: { id: 71, defaultCode: `print("Hello, Python!")` },
    c: {
      id: 50,
      defaultCode: `#include <stdio.h>\nint main() {\n   printf("Hello, C!\\n");\n   return 0;\n}`,
    },
    javascript: { id: 63, defaultCode: `console.log("Hello, JavaScript!");` },
    html: {
      id: "html",
      defaultCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Hello, HTML!</h1>\n  </body>\n</html>`,
    },
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    setCode(languages[lang].defaultCode);
    setOutput("");
  };

  const runCode = async () => {
    if (language === "html") {
      // Open HTML in a new tab
      const previewWindow = window.open("", "_blank");
      previewWindow.document.open();
      previewWindow.document.write(code);
      previewWindow.document.close();
      return;
    }

    setLoading(true);
    setOutput("⏳ Running code...");

    try {
      const response = await axios.post(
        "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
        {
          source_code: code,
          language_id: languages[language].id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "9c57e46e70msh2a034b39277880bp117d50jsn5a3afeb6bb02",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
        }
      );

      setOutput(
        response.data.stdout ||
          response.data.stderr ||
          response.data.compile_output ||
          "⚠️ No output returned."
      );
    } catch (err) {
      setOutput("❌ Error running code. Please check your API key or connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      {/* Header Section */}
      <header
        style={{
          backgroundColor: "#111827",
          padding: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
          borderBottom: "2px solid gold",
          boxShadow: "0 4px 15px rgba(255, 215, 0, 0.5)",
        }}
      >
        {/* ✅ Logo via <img> from public folder (rectangular, not circle) */}
        <img
          src="/images/ppklogo.jpg"
          alt="Placement Preparation Kit Logo"
          style={{
            height: "70px",
            objectFit: "contain",
            filter: "drop-shadow(0 0 20px gold)", // golden glow
          }}
        />
        <div>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #FFD700, #FFA500, #FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 15px rgba(255,215,0,0.8)",
            }}
          >
            Coding Practice Platform
          </h1>
          <p
            style={{
              color: "#9CA3AF",
              marginTop: "5px",
              fontStyle: "italic",
            }}
          >
            Sharpen your coding skills & ace your interviews 🚀
          </p>
          <p
            style={{
              color: "#facc15",
              marginTop: "3px",
              fontWeight: "bold",
            }}
          >
            Placement Preparation Kit
          </p>
        </div>
      </header>

      {/* Main Section */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Left Side - Editor */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              padding: "10px",
              backgroundColor: "#1e293b",
              display: "flex",
              gap: "10px",
            }}
          >
            <select
              value={language}
              onChange={handleLanguageChange}
              style={{ padding: "6px" }}
            >
              <option value="python">Python</option>
              <option value="c">C</option>
              <option value="javascript">JavaScript</option>
              <option value="html">HTML</option>
            </select>
            <button
              onClick={runCode}
              disabled={loading}
              style={{
                backgroundColor: "#22c55e",
                border: "none",
                color: "white",
                padding: "6px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {loading ? "Running..." : "▶ Run"}
            </button>
          </div>

          {/* Monaco Editor */}
          <Editor
            height="100%"
            theme="vs-dark"
            language={language === "c" ? "cpp" : language}
            value={code}
            onChange={(val) => setCode(val || "")}
          />
        </div>

        {/* Right Side - Output */}
        <div
          style={{
            flex: 1,
            padding: "15px",
            backgroundColor: "#111827",
            overflowY: "auto",
          }}
        >
          <h2
            style={{ color: "#facc15", fontSize: "22px", fontWeight: "bold" }}
          >
            Output
          </h2>
          <pre
            style={{
              background: "#1e293b",
              padding: "10px",
              borderRadius: "8px",
              whiteSpace: "pre-wrap",
              wordWrap: "break-word",
              color: "#e5e7eb",
              marginTop: "10px",
            }}
          >
            {output}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default CodingEditor;
