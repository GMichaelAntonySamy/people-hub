import React, { useState } from 'react';
import './../css/ChatBotPresto.css';  // Import external CSS
import prestoLogo from './../../assert/images/presto-logo.png'; // Add your logo image path

const ChatBotPresto = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false); // Track if the chat window is maximized

  // Toggle the chat window visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Toggle chat window size (maximize to full screen)
  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div>
      {/* Floating Action Button with Image or Close Icon */}
      <span
        className="fab-button"
        onClick={toggleChat}
        aria-label="Chat with Presto"
      >
        {isOpen ? (
          <span className="close-icon">&times;</span> // Close icon when chat is open
        ) : (
          <img src={prestoLogo} alt="Presto Logo" className="fab-image" />
        )}
      </span>

      {/* Chat Window */}
      {isOpen && (
        <div className={`chat-window ${isMaximized ? 'maximized' : ''}`}>
          <div className="chat-header">
            <img src={prestoLogo} alt="Presto Logo" className="chat-logo" />
            <h3>Presto</h3>
            <button className="maximize-btn" onClick={toggleMaximize}>
              &#x25A1; {/* Maximize icon (square) */}
            </button>
            <button className="close-btn" onClick={toggleChat}>
              &times;
            </button>
          </div>
          <div className="chat-body">
            <p>Hi! How can I assist you today?</p>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Ask me work related questions..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotPresto;
