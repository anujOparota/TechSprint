import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

function Icon({ children, className = "" }) {
  return (
    <span className={`icon ${className}`} aria-hidden="true">
      {children}
    </span>
  );
}

export default function SideBar({ onClose }) {
  return (
    <aside className="sidebar" aria-label="Primary sidebar">
      <div style={{ padding: 12 }}>
        <button
          onClick={onClose}
          
          id="SideBar-close"
        >
          Close
        </button>
      </div>

      <nav className="sidebar-nav" role="navigation" aria-label="Main">
        <NavLink to="/appointments" className="sidebar-item">
          <Icon>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M16 3v4M8 3v4M3 11h18" />
            </svg>
          </Icon>
          <span className="label">Appointment</span>
        </NavLink>

        <NavLink to="/emergency" className="sidebar-item">
          <Icon>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </Icon>
          <span className="label">Emergency</span>
        </NavLink>

        <NavLink to="/medicine-inquiry" className="sidebar-item">
          <Icon>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.5v.5a5 5 0 0 1-5 5h-8a5 5 0 0 1-5-5v-.5" />
              <path d="M7 7l10 10" />
            </svg>
          </Icon>
          <span className="label">Medicine Inquiry</span>
        </NavLink>

        <NavLink to="/ai-assistant" className="sidebar-item">
          <Icon>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="7" width="18" height="11" rx="2" />
              <path d="M8 3v4M16 3v4M9 12h.01M15 12h.01" />
            </svg>
          </Icon>
          <span className="label">AI Assistant</span>
        </NavLink>

        <NavLink to="/create-routine" className="sidebar-item">
          <Icon>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l2 2 4-4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h7" />
            </svg>
          </Icon>
          <span className="label">Create Routine</span>
        </NavLink>

        <NavLink to="/notifications" className="sidebar-item">
          <Icon>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h11z" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </Icon>
          <span className="label">Notification</span>
        </NavLink>

        <NavLink to="/profile" className="sidebar-item">
          <Icon>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Icon>
          <span className="label">User Profile</span>
        </NavLink>
      </nav>
    </aside>
  );
}
