import './Appointments.css'
import Doctor from '../../assets/Doctor.png'

function Appointments() {
    return(
        <div className="appointment-hero">
            <div id="hero-content">
                <h1>Book Your Doctor <br></br>Appointment <br /> Online.</h1>
                <p>A healthier Tommorrow Starts Today: Schedule Your Appointment! <br /> Your Wellness, Our Expertise: Set Up Your Apppointment Today.</p>
                <div id="btn-box">
                    <button 
                        type="submit" 
                        id="appoint-btn1" >
                        Book An Appointment
                    </button>
                    <button 
                        type="submit" 
                        id="appoint-btn2" >
                        Call now
                    </button>
                </div>
            </div>
            <div id="hero-img">
                <img id='doctor-img' src={Doctor} alt="Doctor-image" />
            </div>
        </div>
    );
}

export default Appointments;