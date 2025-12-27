import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";


function NavBar() {
    const navigate = useNavigate();

  return (
    <nav className="app-nav" role="navigation" aria-label="Main navigation">
      <div className="nav-left">
        <button 
        className="nav-btn" 
        onClick={() => navigate("/dashboard")}>
            Dashboard
        </button>
      </div>

      <div className="nav-center">Trubo Techies</div>

      <div className="nav-right">
        <button 
        className="nav-btn nav-logout" 
        onClick={() => navigate("/")}>
            LogOut
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
