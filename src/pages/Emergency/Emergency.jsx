import { useNavigate } from "react-router-dom";

import FirstAid from '../../assets/images/unconcious.png';
import Ambulance from '../../assets/images/road_acc.png'
import Blood from '../../assets/images/blood_bank.png'
import NavBar from "../../components/NavBar/NavBar";

import './Emergency.css'

function Emergency() {
    const navigate = useNavigate();
    return(
        <>
        <NavBar/>
        <div className="emergency-hero">
            <div className="emergency-box"
                onClick={() => navigate("/ambulance")}
                style={{ cursor: "pointer" }}
            >
                <img src={Ambulance} alt="ambulance-img" className='emergency-img' />
                <p>Need Ambulance</p>
            </div>

            <div className="emergency-box"
                onClick={() => navigate("/firstaid")}
                style={{ cursor: "pointer" }}
            >
                <img src={FirstAid} alt="FirstAid-img" className='emergency-img' />
                <p>First Aid +</p>
            </div>

            <div className="emergency-box"
                onClick={() => navigate("/bloodbank")}
                style={{ cursor: "pointer" }}
            >
                <img src={Blood} alt="Blood-image" className='emergency-img' />
                <p>Need Blood</p>
            </div>
        </div>
        </>
    );
}

export default Emergency;