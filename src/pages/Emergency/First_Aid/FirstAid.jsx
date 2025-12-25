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

///////////////////////////////////////////////////////////////

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
              <h1>First Aid Assistance</h1>
            </div>
            <div className="n2">
              Immediate steps before medical help arrives
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="main">
        <div className="emergency-bar">

          <Link
            to="/BloodBank"
            className="quick-action left"
            aria-label="Get Blood"
          >
            <img src={bloodbank} alt="Blood Bank" />
            <span>Get Blood</span>
          </Link>

          <div className="emergency-text">
            <h2>Emergency First Aid</h2>
            <p>Select a situation to get immediate life-saving guidance</p>
          </div>

          <Link
            to="/ambulance"
            className="quick-action right"
            aria-label="Call Ambulance"
          >
            <img src={Ambulance} alt="Ambulance" />
            <span>Call Ambulance</span>
          </Link>
          
        </div>


        <div className="gridb">
          <FirstAidCard
            img={roadAcc}
            title="Road Accident"
            link="/first-aid/road-accident"
          />

          <FirstAidCard
            img={snake}
            title="Snake Bite"
            link="/first-aid/snake-bite"
          />

          <FirstAidCard
            img={burning}
            title="Burns"
            link="/first-aid/burns"
          />

          <FirstAidCard
            img={bleeding}
            title="Bleeding"
            link="/first-aid/bleeding"
          />

          <FirstAidCard
            img={unconscious}
            title="Unconsciousness"
            link="/first-aid/unconscious"
          />

          <FirstAidCard
            img={heart}
            title="Heart Emergency"
            link="/first-aid/heart"
          />

          <FirstAidCard
            img={choking}
            title="Choking"
            link="/first-aid/choking"
          />

          <FirstAidCard
            img={poisoning}
            title="Poisoning"
            link="/first-aid/poisoning"
          />
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="footer">
        © 2025 First Aid Assistance. Developed by Team Turbo Techies. All rights
        reserved.
      </div>
    </div>
  );
}

/* ================= CARD COMPONENT ================= */
function FirstAidCard({ img, title, link }) {
  return (
    <div className="boxes">
      <Link to={link} className="bimg">
        <img src={img} alt={title} />
      </Link>

      <div className="b_desc">
        <div className="namehead">{title}</div>
        <div className="nb_desc">Quick life-saving steps</div>
      </div>
    </div>
  );
}

