import React from "react";
import "./MedicineInquiry.css";
import logo from "../../assets/Team Logo.jpg";

function MedicineInquiry() {
  return (
    <div className="medicine-hero">
        <div className="container">
        <header className="chat-header">
            <div className="bot-info">
            <img
                src={logo}
                alt="Turbo Techies logo"
                className="bot-header-logo"
            />
            <h3>Turbo Techies AI Assistant</h3>
            </div>
        </header>

        <div id="chatbox" className="chatbox"></div>

        <div className="input-area">
            <input
            id="inputMessage"
            type="text"
            placeholder="Ask a query ..."
            autoComplete="off"
            />
            <button id="sendBtn">
            <i className="fa-solid fa-paper-plane"></i>
            </button>
        </div>
        </div>
    </div>
  );
}

export default MedicineInquiry;
