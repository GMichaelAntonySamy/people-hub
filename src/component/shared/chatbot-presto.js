import React, { useState } from "react";
import "./../css/ChatBotPresto.css"; // Import external CSS
import prestoLogo from "./../../assert/images/presto-logo.png"; // Path to your logo image

const ChatBotPresto = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  // Toggle chat visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Toggle chat maximization
  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div>
      {/* Floating Action Button */}
      <span
        className="fab-button"
        onClick={toggleChat}
        aria-label="Chat with Presto"
      >
        {isOpen ? (
          <span className="close-icon">&times;</span>
        ) : (
          <div className="fab-container">
            <div className="fab-content">
              <span className="fab-text">Need Help? Chat with Me</span>
              <svg
                width="150"
                height="120"
                viewBox="0 0 159 98"
                fill="none"
                className="fab-image"
                style={{
                  height: "100px",
                  width: "120px",
                  position: "fixed",
                  bottom: "60px",
                  right: "35px",
                }}
              >
                <g filter="url(#filter0_d)">
                  <rect
                    x="10"
                    y="7"
                    width="139.255"
                    height="69.6277"
                    rx="30.2729"
                    fill="white"
                  ></rect>
                  <rect
                    x="11"
                    y="8"
                    width="137.255"
                    height="67.6277"
                    rx="29.2729"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></rect>
                </g>
                <path
                  d="M66.7617 74.8L90.2232 94.8L95.521 74.8H66.7617Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.51364"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M66.0049 75.6L90.2232 96.4L96.2778 75.6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <defs>
                  <filter
                    id="filter0_d"
                    x="0.918131"
                    y="0.945421"
                    width="157.419"
                    height="87.7914"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="3.02729"></feOffset>
                    <feGaussianBlur stdDeviation="4.54093"></feGaussianBlur>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
              <img
                src={prestoLogo}
                alt="Presto Logo"
                className="fab-presto-logo"
                style={{
                  position: "absolute",
                  bottom: "5px",
                  right: "10px",
                  width: "55px",
                  height: "55px",
                }}
              />
            </div>
          </div>
        )}
      </span>

      {/* Chat Window */}
      {isOpen && (
        <div className={`chat-window ${isMaximized ? "maximized" : ""}`}>
          <div className="chat-header">
            <img src={prestoLogo} alt="Presto Logo" className="chat-logo" />
            <h3>Presto</h3>
            <button className="maximize-btn" onClick={toggleMaximize}>
              &#x25A1;
            </button>
            <button className="close-btn" onClick={toggleChat}>
              &times;
            </button>
          </div>
          <div className="chat-body">
            <p>Hi! How can I assist you today?</p>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Ask me work-related questions..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotPresto;
