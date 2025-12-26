import "./FirstAid.css";
import { Link } from "react-router-dom";

// images
import logo from "../../../assets/images/logo.png";
import roadAcc from "../../../assets/images/road_acc.png";
import snake from "../../../assets/images/snake.png";
import burning from "../../../assets/images/burning.png";
import bleeding from "../../../assets/images/bleeding.png";
import unconscious from "../../../assets/images/unconcious.png";
import heart from "../../../assets/images/heart.png";
import choking from "../../../assets/images/choking.png";
import poisoning from "../../../assets/images/poisoning.png";
import Ambulance from "../../../assets/images/Ambulance.png";
import bloodbank from "../../../assets/images/blood_bank.png";

export default function FirstAid() {
  return (
    <div className="firstaid-page">

      {/* ================= HEADER ================= */}
      <div className="firstaid-header">
        <div className="firstaid-lo_name">

          <div className="firstaid-logo">
            <img src={logo} alt="Emergency" />
          </div>

          <div className="firstaid-name">
            <div className="firstaid-n1">
              <h1>First Aid Assistance</h1>
            </div>
            <div className="firstaid-n2">
              Immediate steps before medical help arrives
            </div>
          </div>

        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="firstaid-main">

        <div className="firstaid-emergency-bar">

          <Link
            to="/bloodbank"
            className="firstaid-quick-action left"
            aria-label="Get Blood"
          >
            <img src={bloodbank} alt="Blood Bank" />
            <span>Get Blood</span>
          </Link>

          <div className="firstaid-emergency-text">
            <h2>Emergency First Aid</h2>
            <p>Select a situation to get immediate life-saving guidance</p>
          </div>

          <Link
            to="/ambulance"
            className="firstaid-quick-action right"
            aria-label="Call Ambulance"
          >
            <img src={Ambulance} alt="Ambulance" />
            <span>Call Ambulance</span>
          </Link>

        </div>

        <div className="firstaid-gridb">
          <FirstAidCard img={roadAcc} title="Road Accident" link="/first-aid/road-accident" />
          <FirstAidCard img={snake} title="Snake Bite" link="/first-aid/snake-bite" />
          <FirstAidCard img={burning} title="Burns" link="/first-aid/burns" />
          <FirstAidCard img={bleeding} title="Bleeding" link="/first-aid/bleeding" />
          <FirstAidCard img={unconscious} title="Unconsciousness" link="/first-aid/unconscious" />
          <FirstAidCard img={heart} title="Heart Emergency" link="/first-aid/heart" />
          <FirstAidCard img={choking} title="Choking" link="/first-aid/choking" />
          <FirstAidCard img={poisoning} title="Poisoning" link="/first-aid/poisoning" />
        </div>

      </div>

      {/* ================= FOOTER ================= */}
      <div className="firstaid-footer">
        © 2025 First Aid Assistance. Developed by Team Turbo Techies. All rights reserved.
      </div>

    </div>
  );
}

/* ================= CARD COMPONENT ================= */
function FirstAidCard({ img, title, link }) {
  return (
    <div className="firstaid-boxes">
      <Link to={link} className="firstaid-bimg">
        <img src={img} alt={title} className="firstaid-boximg" />
      </Link>

      <div className="firstaid-b_desc">
        <div className="firstaid-namehead">{title}</div>
        <div className="firstaid-nb_desc">Quick life-saving steps</div>
      </div>
    </div>
  );
}
