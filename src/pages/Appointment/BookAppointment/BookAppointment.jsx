import { useNavigate } from "react-router-dom";
import './BookAppointment.css'
import NavBar from "../../../components/NavBar/NavBar";

function BookAppointment() {
    const navigate = useNavigate();

    return(
        <>
        <NavBar/>
        <div id="BookAppointment-hero">
            <div className="hero-content">
                <form className="BookAppointment-form">

                <h2>Book Appointment</h2>

                <div className="form-row">
                    <select name="doctor-name" id="doctor-select">
                        <option value="doctor101">Dr. Anuj Parota</option>
                        <option value="doctor102">Dr. Suyash Pawar</option>
                        <option value="doctor103">Dr. Om Nimbarte</option>
                        <option value="doctor104">Dr. Mohit Soni</option>
                        <option value="doctor105">Dr. Rajeev Shrma</option>
                        <option value="doctor106">Dr. Usha Agrwal</option>
                    </select>
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
        </div>
        </>
    );
}

export default BookAppointment;
