import React, { useState } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import { auth } from "../../services/firebase";
import SideBar from "../SideBar/SideBar";

function NavBar() {
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <nav className="app-nav" role="navigation" aria-label="Main navigation">
        <div className="nav-menu">
          <button
            className="nav-btn"
            onClick={() => setOpenSidebar(true)}
          >
            Menu
          </button>
        </div>

        <div className="nav-left">
          <button
            className="nav-btn"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
        </div>

        <div className="nav-center">Trubo Techies</div>

        <div className="nav-right">
          <button
            className="nav-btn nav-logout"
            onClick={handleLogout}
          >
            LogOut
          </button>
        </div>
      </nav>

      {openSidebar && (
        <SideBar onClose={() => setOpenSidebar(false)} />
      )}
    </>
  );
}

export default NavBar;
