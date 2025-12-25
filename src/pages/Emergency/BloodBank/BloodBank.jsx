import { Link } from "react-router-dom";
import React, { useState } from "react";

import logo from "../../assets/images/logo.png";
import "./BloodBank.css";
import location from "../../assets/images/location.png";
import call from "../../assets/images/call.png";
import green_valley from "../../assets/images/Green_valley.png";
import city_care from "../../assets/images/city_care.png";
import downtown from "../../assets/images/downtown.png";

export default function BloodBank() {
  const [selectedGroup, setSelectedGroup] = useState(null);

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
              <h1>BloodBank Services</h1>
            </div>
            <div className="n2">Find Nearby Blood Banks</div>
          </div>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="main">

        {/* ================= Emergency Bar ================= */}
        <div className="head_emerbar">

          <div className="emergency-bar3">
            <div className="eme3 loc">
              <Link to="#" onClick={() => alert("Choose your location")}>
                <img src={location} alt="Location" />
                <span>Use Current Location</span>
              </Link>
            </div>

            <div className="eme3 call loc3">
              <a href="tel:112">
                <img src={call} alt="Call" />
                <span>Emergency Blood Request</span>
              </a>
            </div>
          </div>

          {/* Blood Group Buttons */}
          <div className="blood_group">
            {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map(group => (
              <button
                key={group}
                className={`grpbut ${selectedGroup === group ? "active" : ""}`}
                onClick={() =>
                  setSelectedGroup(prev => (prev === group ? null : group))
                }
              >
                {group}
              </button>
            ))}
          </div>

          {/* Instruction text (shown only before selection) */}
          {!selectedGroup && (
            <div className="warning">
              <h2>Choose your blood group</h2>
              <p>Blood banks will appear after selection</p>
            </div>
          )}
        </div>

        {/* ================= BloodBank Content ================= */}
        {selectedGroup && (
          <div className="bloodbank-content">

            <div className="bloodbank-cont-head">
              <h2>Nearby Blood Banks</h2>
            </div>

            <div className="List-Map">

              <div className="bloodbank-list">
                <BloodBankCard
                  img={green_valley}
                  title="Green Valley Blood Bank"
                  dist="2.3 km"
                  status="available"
                  hospital="Green Valley Hospital"
                />

                <BloodBankCard
                  img={city_care}
                  title="City Care Blood Bank"
                  dist="3.1 km"
                  status="low"
                  hospital="Sunrise Medical Center"
                />

                <BloodBankCard
                  img={downtown}
                  title="Downtown Blood Center"
                  dist="4.5 km"
                  status="not"
                  hospital="Downtown Health Clinic"
                />
              </div>

              <div className="BloodBank-Map">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%"
                  height="100%"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        )}
      </div>

      {/* ================= FOOTER ================= */}
      <div className="bfoot">
        <div className="bloodfoot">
          ⚠️ For critical cases, contact hospitals immediately
        </div>
      </div>

    </div>
  );
}

/* ================= Blood Bank Card ================= */

function BloodBankCard({ img, title, dist, status, hospital }) {
  const stockText = {
    available: "● Available",
    low: "● Low Stock",
    not: "● Not Available",
  };

  return (
    <div className="bloodbank-card-pro">
      <div className="bloodbank-img">
        <img src={img} alt={title} />
      </div>

      <div className="bloodbank-info">
        <div className="bloodbank-header">
          <h3>{title}</h3>
        </div>

        <div className="bloodbank-row">
          <span>📍 {dist} away</span>
        </div>

        <div className="bloodbank-row">
          <span>🏥 Linked Hospital: {hospital}</span>
        </div>
      </div>

      <div className="bloodbank-cont-right">
        <span className={`stock ${status}`}>{stockText[status]}</span>
        <button
          className="track-btn"
          onClick={() => alert(`Calling BloodBank of ${hospital}`)}
        >
          ☎ Call
        </button>
      </div>
    </div>
  );
}
