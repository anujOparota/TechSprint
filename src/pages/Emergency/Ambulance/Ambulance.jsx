import React from "react";
import { Link } from "react-router-dom";

// images

import logo from "../../../assets/images/logo.png";
import "./Ambulance.css";
import location from "../../../assets/images/location.png";
import call from "../../../assets/images/call.png";
import bus from "../../../assets/images/road_acc.png";

export default function FirstAid() {
  return (
    <div className="page">
      {/* ================= HEADER ================= */}
      <div className="header">
        <div className="lo_name">
          <div className="logo">
            <img src={logo} alt="Emergency" />
          </div>

          <div className="name">
            <div className="n1">
              <h1>Ambulace Service</h1>
            </div>
            <div className="n2">
              Find Nearby Ambulance in real-time
            </div>
          </div>
        </div>
      </div>
        {/* ================= MAIN ================= */}

        {/* ================= Emergency Bar ================= */}
        <div className="main"> 
            
            <div className="emergency-bar2">
                <div className="eme2 loc">
                  <Link to="#" onClick={()=> alert("Choose you location")}>
                      <img src={location} alt="Location" />
                      <span>Use Current Location</span>
                    </Link>
                </div>

                <div className="eme2 call loc2">
                    <a href="tel:112">
                      <img src={call} alt="Call" />
                      <span>Call Ambulance</span>
                    </a>
                </div>

            </div>
          {/* ================= Emergency Bar Ends ================= */}
          
      {/*  ====================== Content ========================= */}
          <div className="ambulance-content">
            <div className="amb-cont-head">
              <h2>Nearby Ambulance Services</h2>
            </div>

            <div className="List-Map">
                  {/*  ================ Ambulance List ==================== */}
                <div className="ambulance-list">
                  
                    <AmbulanceCard
                      img={bus}
                      title="Rapid Rescue Ambulance"
                      dist="3.5 km"
                      eta="12 min"
                      hospital="Green Valley Hospital"
                    />

                    <AmbulanceCard
                      img={bus}
                      title="City Care Ambulance"
                      dist="2.8 km"
                      eta="10 min"
                      hospital="Sunrise Medical Center"
                    />
                    <AmbulanceCard
                      img={bus}
                      title="24/7 Emergency Ambulance"
                      dist="4.2 km"
                      eta="15 min"
                      hospital="Downtown Health Clinic"
                    />

                </div>
                {/*  ================ Ambulance List Ends ==================== */}
                
                {/* ================= Map Section ========================= */}
                <div className="Ambulance-Map"> 

                    <iframe
                      title="Ambulance Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153166!3d-37.81627974202195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6f5d4e8b4c2!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1614031234567!5m2!1sen!2sus"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                </div>
                {/* ================= Map Section Ends ========================= */}
            </div>
          </div>
        {/*  ====================== Content Ends ========================= */}
      {/* ================= MAIN ENDS ================= */}
    </div>

{/* ====================  Footer  ===================== */}

      <div className="footer">
              © 2025 Ambulance Service. Developed by Team Turbo Techies. All rights
              reserved.
      </div>
    {/* ====================  Footer Ends ===================== */}

  </div>

  );
}

{/* ================= Ambulance Card Component ================= */}

function AmbulanceCard({ img, title, dist, eta, hospital }) {
  return (
    <div className="ambulance-card-pro">
      {/* Image */}
      <div className="amb-img">
        <img src={img} alt={title} />
      </div>

      {/* Info */}
      <div className="amb-info">
        <div className="amb-header">
          <h3>{title}</h3>
        </div>

        <div className="amb-row eta">
          <span className="icon eta">⏱</span>
          <span>ETA: {eta}</span>
        </div>

        <div className="amb-row">
          <span className="icon hospital">🏥</span>
          <span>Nearest Hospital: {hospital}</span>
        </div>
      </div>

      {/* Action */}
      <div className="amb-cont-right">
        <div className="amb-meta">
              <span className="icon location">📍</span>
              <span>{dist} away</span>
        </div>
        <div className="amb-action">
          <button className="track-btn" onClick={() => alert(`Calling Ambulance of ${hospital}`)}>☎ Call</button>
        </div>
      </div>
    </div>
  );
}
