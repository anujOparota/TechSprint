import { useNavigate } from "react-router-dom";
import './BookAppointment.css'

function BookAppointment() {
    const navigate = useNavigate();

    return(
        <div id="BookAppointment-hero">
            <form className="BookAppointment-form">

                <h2>Book Appointment</h2>

                <div className="form-row">
                    <input type="text" placeholder="Doctor Name" />
                    <input type="text" placeholder="Patient Name" />
                </div>

                <div className="form-row">
                    <input type="number" placeholder="Age" />
                    <select name="gender" id="gender-select">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="transgender">Transgender</option>
                    </select>
                </div>

                <div className="form-row">
                    <input type="date" />
                    <input type="time" />
                </div>

                <button type="submit" id="BookAppointment-btn">
                    Book Appointment
                </button>
            </form>
        </div>
    );
}

export default BookAppointment;
