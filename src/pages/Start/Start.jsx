import { Link } from 'react-router-dom'   
import './Start.css'
import Doctor from '../../assets/Doctor.png'


function Appointments() {
  return (
    <section className="start-hero" aria-labelledby="start-heading">
      <div className="start-hero-inner">
        <div id="start-hero-content">
          <h1 id="start-heading">
            An AI-Integrated Platform
            <br />
            Developed By
            <br />
            Turbo Techies.
          </h1>

          <p className="start-hero-sub">
            A healthier Tomorrow starts today.
            <br />
            Your wellness, our expertise.
          </p>

          <div id="start-btn-box" role="group" aria-label="start actions">
                <Link to="/login" className="start-btn start-btn-primary" id="start-btn1" aria-label="Login">
                Login
                </Link>

                <Link to="/register" className="start-btn start-btn-ghost" id="start-btn2" aria-label="SignUp">
                SignUp
                </Link>
          </div>
        </div>

        <figure id="start-hero-img" aria-hidden="false">
          <img id="start-doctor-img" src={Doctor} alt="Doctor illustration" />
        </figure>
      </div>
    </section>
  );
}

export default Appointments
