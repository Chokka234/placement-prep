import React, { useEffect, useRef, useState } from "react";

function MockInterview() {
  const videoRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedVideo, setRecordedVideo] = useState(null);

  useEffect(() => {
    async function enableCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = async () => {
            try {
              await videoRef.current.play();
            } catch (err) {
              console.error("Autoplay prevented:", err);
            }
          };
        }

        const recorder = new MediaRecorder(stream);
        let chunks = [];

        recorder.ondataavailable = (e) => {
          if (e.data.size > 0) chunks.push(e.data);
        };

        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: "video/webm" });
          setRecordedVideo(URL.createObjectURL(blob));
          chunks = [];
        };

        setMediaRecorder(recorder);
      } catch (err) {
        console.error("Camera access error:", err);
        alert("❌ Please allow camera & microphone permissions.");
      }
    }
    enableCamera();
  }, []);

  const startRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.start();
      setRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        padding: "30px",
      }}
    >
      {/* Header with Logo */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
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
              height: "90px",
              width: "90px",
              borderRadius: "50%",
              filter: "drop-shadow(0px 0px 15px gold)",
              transition: "transform 0.4s ease",
            }}
            className="logo"
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
        <div style={{ marginLeft: "15px", textAlign: "left" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #facc15, #fbbf24, #f59e0b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0px 0px 15px rgba(255,215,0,0.9)",
            }}
          >
            Placement Preparation Kit
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#22d3ee",
              fontWeight: "600",
              marginTop: "5px",
            }}
          >
            🎯 Your Complete Placement Companion – Study, Practice, Mock Interview
          </p>
        </div>
      </header>

      {/* Question Section */}
      <h2 style={{ fontSize: "26px", marginBottom: "15px" }}>
        🎤 Mock Interview
      </h2>
      <p style={{ fontSize: "20px", marginBottom: "25px" }}>
        Question 1 of 3: <b>Tell me about yourself.</b>
      </p>

      {/* Video Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{
            width: "480px",
            height: "340px",
            border: "3px solid cyan",
            borderRadius: "12px",
            boxShadow: "0px 8px 20px rgba(0,0,0,0.6)",
            background: "black",
          }}
        ></video>

        {recordedVideo && (
          <div>
            <h3 style={{ marginBottom: "10px", color: "#fbbf24" }}>
              ▶ Your Answer:
            </h3>
            <video
              src={recordedVideo}
              controls
              style={{
                width: "480px",
                height: "340px",
                border: "3px solid #fbbf24",
                borderRadius: "12px",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.6)",
                background: "black",
              }}
            ></video>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        {!recording ? (
          <button
            onClick={startRecording}
            style={{
              background: "#06b6d4",
              padding: "12px 25px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              marginRight: "15px",
            }}
          >
            🎥 Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            style={{
              background: "#ef4444",
              padding: "12px 25px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              marginRight: "15px",
            }}
          >
            ⏹ Stop Recording
          </button>
        )}
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes shine {
            0% { left: -100%; }
            50% { left: 100%; }
            100% { left: 100%; }
          }
          .logo:hover {
            transform: scale(1.15);
            filter: drop-shadow(0px 0px 20px gold);
          }
        `}
      </style>
    </div>
  );
}

export default MockInterview;
