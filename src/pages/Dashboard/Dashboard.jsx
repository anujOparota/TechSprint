import { useNavigate } from "react-router-dom";

import appointment from '../../assets/appointment.jpg'
import emergencyImg from '../../assets/emergency.png'
import medicineInquiry from '../../assets/medicine inquiry.jpg'
import createRoutine from '../../assets/create routine.jpg'
import notification from '../../assets/notification.jpg'
import userProfile from '../../assets/user record.png'
import NavBar from "../../components/Navbar";
import chatBot from "../../assets/chatBot.png";
import Footer from "../../components/Footer";


import './Dashboard.css'

function Dashboard() {
    const navigate = useNavigate();

    return (
        <>
        <NavBar/>
        <div id="dashboard-divs" >
            <div
                className="dash-box"
                id="appointment-div"
                onClick={() => navigate("/appointments")}
                style={{ cursor: "pointer" }}
            >
                <img src={appointment} alt="appointment image" className="dash-img" />
                <p>Appointment Booking</p>
                
            </div>

            <div 
                className="dash-box" 
                id="emergency-div"
                onClick={() => navigate("/emergency")}
                style={{ cursor: "pointer" }}
            >
                <img src={emergencyImg} alt="emergrncy-image" className="dash-img" />
                <p>Emergemcy</p>
            </div>

            <div className="dash-box" id="medicine-div">
                <img src={medicineInquiry} alt="medicine-image" className="dash-img"/>
                <p>Medicine Inquiry</p>
            </div>

            {/* This is the AI Assistant section */}
             <div
                className="dash-box"
                id="aiChatBot-div"
                onClick={() => navigate("")}
                style={{ cursor: "pointer" }}
            >
                <img src={chatBot} alt="aiChatBot image" className="dash-img" />
                <p>AI Assistant</p>

            </div>
            {/* Suyash added this section Ends */}

            <div className="dash-box" id="createRoutine-div">
                <img src={createRoutine} alt="CreateRoutine-image" className="dash-img" />
                <p>CreateRoutine</p>
            </div>

            <div className="dash-box" id="notification-div">
                <img src={notification} alt="notification-image" className="dash-img" />
                <p>Notification</p>
            </div>

            <div className="dash-box" id="userRecord-div">
                <img src={userProfile} alt="userProfile-image" className="dash-img" />
                <p>UserProfile</p>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Dashboard;