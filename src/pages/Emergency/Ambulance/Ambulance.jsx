import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../../../assets/images/logo.png";
import "./Ambulance.css";
import location from "../../../assets/images/location.png";
import call from "../../../assets/images/call.png";
import bus from "../../../assets/images/road_acc.png";

export default function Ambulance() {
  const [mapSrc, setMapSrc] = useState(
    "https://www.google.com/maps?q=ambulance+near+me&output=embed"
  );
  const [mapLoading, setMapLoading] = useState(false);
  const [hasLocation, setHasLocation] = useState(false); // ✅ added

  const navigate = useNavigate();

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setMapLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const url = `https://www.google.com/maps?q=hospitals+near+${latitude},${longitude}&output=embed`;
        setMapSrc(url);
        setHasLocation(true); // ✅ added
      },
      () => {
        alert("Unable to fetch your location");
        setMapLoading(false);
        setHasLocation(false);
      }
    );
  };

  return (
    <div className="ambl-page">
      {/* ================= HEADER ================= */}
      <div className="ambl-header">
        <div className="ambl-lo_name">
          <div className="ambl-logo">
            <img src={logo} alt="Emergency" />
          </div>

          <div className="ambl-name">
            <div className="ambl-n1">
              <h1>Ambulace Service</h1>
            </div>
            <div className="ambl-n2">Find Nearby Ambulance in real-time</div>
          </div>
        </div>
      </div>

      {/* ================= BACK ================= */}
      <div className="Back">
        <button className="ambl-back_btn" onClick={() => navigate(-1)}> Back </button>
      </div>

      {/* ================= MAIN ================= */}
      <div className="ambl-main">
        <div className="ambl-emergency-bar2">
          <div className="ambl-eme2 ambl-loc">
            <Link to="#" onClick={handleUseLocation}>
              <img src={location} alt="Location" />
              <span>Use Current Location</span>
            </Link>
          </div>

          <div className="ambl-eme2 ambl-call ambl-loc2">
            <a href="tel:112">
              <img src={call} alt="Call" />
              <span>Call Ambulance</span>
            </a>
          </div>
        </div>

        {/* ================= Instruction ================= */}
        {!hasLocation && (
          <div className="ambl-warning">
            <h2>Select Your Location</h2>
            <p>
              Please use your current location to view nearby
              ambulance services and live map.
            </p>
          </div>
        )}

        {/* ================= Content (ONLY after location) ================= */}
        {hasLocation && (
          <div className="ambl-ambulance-content">
            <div className="ambl-amb-cont-head">
              <h2>Nearby Ambulance Services</h2>
            </div>

            <div className="ambl-List-Map">
              <div className="ambl-ambulance-list">
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

              <div className="ambl-Ambulance-Map">
                {mapLoading && (
                  <div className="ambl-map-loader">
                    Loading nearby hospitals…
                  </div>
                )}

                <iframe
                  title="Ambulance Map"
                  src={mapSrc}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setMapLoading(false)}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ================= Footer ================= */}
      <div className="ambl-footer">
        © 2025 Ambulance Service. Developed by Team Turbo Techies.
        All rights reserved.
      </div>
    </div>
  );
}

/* ================= Ambulance Card ================= */

function AmbulanceCard({ img, title, dist, eta, hospital }) {
  return (
    <div className="ambl-ambulance-card-pro">
      <div className="ambl-amb-img">
        <img src={img} alt={title} />
      </div>

      <div className="ambl-amb-info">
        <div className="ambl-amb-header">
          <h3>{title}</h3>
        </div>

        <div className="ambl-amb-row ambl-eta">
          <span className="ambl-icon">⏱</span>
          <span>ETA: {eta}</span>
        </div>

        <div className="ambl-amb-row">
          <span className="ambl-icon">🏥</span>
          <span>Nearest Hospital: {hospital}</span>
        </div>
      </div>

      <div className="ambl-amb-cont-right">
        <div className="ambl-amb-meta">
          <span className="ambl-icon">📍</span>
          <span>{dist} away</span>
        </div>

        <div className="ambl-amb-action">
          <button
            className="ambl-track-btn"
            onClick={() => alert(`Calling Ambulance of ${hospital}`)}
          >
            ☎ Call
          </button>
        </div>
      </div>
    </div>
  );
}
