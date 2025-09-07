import React, { useEffect, useRef } from "react";

function CameraTest() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function enableCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play().catch((err) => {
              console.error("Autoplay error:", err);
            });
          };
        }
      } catch (err) {
        console.error("Camera access error:", err);
        alert("Could not access camera/microphone. Please allow permissions.");
      }
    }

    enableCamera();
  }, []);

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
      <h1 style={{ color: "#fbbf24" }}>📷 Camera Test</h1>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          width: "600px",
          borderRadius: "10px",
          border: "3px solid #22d3ee",
          marginTop: "20px",
          background: "black",
        }}
      ></video>
    </div>
  );
}

export default CameraTest;
