import { Link } from 'react-router-dom'   
import './Appointments.css'
import Doctor from '../../assets/Doctor.png'
import NavBar from '../../components/Navbar'


function Appointments() {
  return (
    <>
    <NavBar/>
    <section className="appointment-hero" aria-labelledby="appointments-heading">
      <div className="hero-inner">
        <div id="hero-content">
          <h1 id="appointments-heading">
            Book Your Doctor
            <br />
            Appointment
            <br />
            Online.
          </h1>

          <p className="hero-sub">
            A healthier Tomorrow starts today: schedule your appointment.
            <br />
            Your wellness, our expertise: set up your appointment now.
          </p>

          <div id="btn-box" role="group" aria-label="appointment actions">
                <Link to="/bookappointment" className="btn btn-primary" id="appoint-btn1" aria-label="Book an appointment">
                Book An Appointment
                </Link>

                <a href="tel:+911234567890" className="btn btn-ghost" id="appoint-btn2" aria-label="Call now">
                Call now
                </a>
          </div>
        </div>

        <figure id="hero-img" aria-hidden="false">
          <img id="doctor-img" src={Doctor} alt="Doctor illustration" />
        </figure>
      </div>
    </section>
    </>
  );
}

export default Appointments
