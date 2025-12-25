import { useNavigate } from "react-router-dom";

import appointment from '../../assets/appointment.jpg'
import emergency from '../../assets/emergency.png'
import medicineInquiry from '../../assets/medicine inquiry.jpg'
import createRoutine from '../../assets/create routine.jpg'
import notification from '../../assets/notification.jpg'
import userProfile from '../../assets/user record.png'



import './Dashboard.css'

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div id="dashboard-divs" >
            <div
                className="dash-box"
                id="appointment-div"
                onClick={() => navigate("/appointments")}
                style={{ cursor: "pointer" }}
            >
                <img src={appointment} alt="appointment image" />
                <p>Appointment Booking</p>
                
            </div>

            <div className="dash-box" id="emergency-div">
                <img src={emergency} alt="emergrncy-image" />
                <p>Emergemcy</p>
            </div>

            <div className="dash-box" id="medicine-div">
                <img src={medicineInquiry} alt="medicine-image" />
                <p>Medicine Inquiry</p>
            </div>

            <div className="dash-box" id="createRoutine-div">
                <img src={createRoutine} alt="CreateRoutine-image" />
                <p>CreateRoutine</p>
            </div>

            <div className="dash-box" id="notification-div">
                <img src={notification} alt="notification-image" />
                <p>Notification</p>
            </div>

            <div className="dash-box" id="userRecord-div">
                <img src={userProfile} alt="userProfile-image" />
                <p>UserProfile</p>
            </div>
        </div>
    );
}

export default Dashboard;