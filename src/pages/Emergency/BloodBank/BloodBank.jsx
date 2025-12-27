import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/images/logo.png";
import "./BloodBank.css";
import location from "../../../assets/images/location.png";
import call from "../../../assets/images/call.png";
import green_valley from "../../../assets/images/Green_valley.png";
import city_care from "../../../assets/images/city_care.png";
import downtown from "../../../assets/images/downtown.png";

export default function BloodBank() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [mapUrl, setMapUrl] = useState(null);
  const [hasLocation, setHasLocation] = useState(false);

  const navigate = useNavigate()

  const canShowResults = selectedGroup && hasLocation;

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const url = `https://www.google.com/maps?q=hospitals+near+${latitude},${longitude}&output=embed`;
        setMapUrl(url);
        setHasLocation(true);
      },
      () => {
        alert("Unable to fetch your location");
        setHasLocation(false);
      }
    );
  };

  return (
    <div className="bb-page">
      {/* ================= HEADER ================= */}
      <div className="bb-header">
        <div className="bb-lo_name">
          <div className="bb-logo">
            <img src={logo} alt="Emergency" />
          </div>
          <div className="bb-name">
            <div className="bb-n1">
              <h1>BloodBank Services</h1>
            </div>
            <div className="bb-n2">Find Nearby Blood Banks</div>
          </div>
        </div>
      </div>

      {/* ================= BACK ================= */}
      <div className="Back">
        <button className="bb-back_btn" onClick={() => navigate(-1)}> Back </button>
      </div>

      {/* ================= MAIN ================= */}
      <div className="bb-main">
        {/* ================= Emergency Bar ================= */}
        <div className="bb-head_emerbar">
          <div className="bb-emergency-bar3">
            <div className="bb-eme3 bb-loc">
              <Link
                to="#"
                onClick={() => {
                  alert("Setting your current location.");
                  handleUseLocation();
                }}
              >
                <img src={location} alt="Location" />
                <span>Use Current Location</span>
              </Link>
            </div>

            <div className="bb-eme3 bb-call bb-loc3">
              <a href="tel:112">
                <img src={call} alt="Call" />
                <span>Emergency Blood Request</span>
              </a>
            </div>
          </div>

          {/* Blood Group Buttons */}
          <div className="bb-blood_group">
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
              <button
                key={group}
                className={`bb-grpbut ${
                  selectedGroup === group ? "active" : ""
                }`}
                onClick={() =>
                  setSelectedGroup((prev) => (prev === group ? null : group))
                }
              >
                {group}
              </button>
            ))}
          </div>

          {/* Instruction text */}
          {!canShowResults && (
            <div className="bb-warning">
              <h2>Select Blood Group & Location</h2>
              <p>
                Please choose a blood group and use your current location
                to view nearby blood banks.
              </p>
            </div>
          )}
        </div> {/* ✅ FIXED: closing bb-head_emerbar */}

        {/* ================= BloodBank Content ================= */}
        {canShowResults && (
          <div className="bb-bloodbank-content">
            <div className="bb-bloodbank-cont-head">
              <h2>Nearby Blood Banks</h2>
            </div>

            <div className="bb-List-Map">
              <div className="bb-bloodbank-list">
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

              <div className="bb-BloodBank-Map">
                {mapUrl ? (
                  <iframe
                    title="map"
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                  />
                ) : (
                  <div className="bb-map-placeholder">
                    <span className="bb-map-icon">🗺️</span>
                    <h3>Map not loaded yet</h3>
                    <p>
                      Select a blood bank or use your current location
                      <br />
                      to view it on the map.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ================= FOOTER ================= */}
      <div className="bb-bfoot">
        <div className="bb-footer-wrapper">

          <div className="bb-footer-alert">
            ⚠️ For critical cases, contact the nearest hospital immediately
          </div>

          <div className="bb-footer-actions">
            <a href="tel:112" className="bb-footer-call">
              ☎ Call Emergency (112)
            </a>
            <span className="bb-footer-note">
              Blood availability may change in real time
            </span>
          </div>

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
    <div className="bb-bloodbank-card-pro">
      <div className="bb-bloodbank-img">
        <img src={img} alt={title} />
      </div>

      <div className="bb-bloodbank-info">
        <div className="bb-bloodbank-header">
          <h3>{title}</h3>
        </div>

        <div className="bb-bloodbank-row">
          <span>📍 {dist} away</span>
        </div>

        <div className="bb-bloodbank-row bb-hosp">
          <span>🏥 Linked Hospital: {hospital}</span>
        </div>
      </div>

      <div className="bb-bloodbank-cont-right">
        <span className={`bb-stock ${status}`}>
          {stockText[status]}
        </span>
        <button
          className="bb-track-btn"
          onClick={() => alert(`Calling BloodBank of ${hospital}`)}
        >
          ☎ Call
        </button>
      </div>
    </div>
  );
}