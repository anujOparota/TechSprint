import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './BookAppointment.css'
import NavBar from "../../../components/NavBar/NavBar";
import { db } from "../../../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../../../context/AuthContext";

function BookAppointment() {
    const navigate = useNavigate();
    const { user } = useAuth();

    const [formData, setFormData] = useState({
        doctor: "Dr. Anuj Parota",
        patientName: "",
        age: "",
        gender: "male",
        date: "",
        time: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await addDoc(collection(db, "appointments"), {
                userId: user?.uid || null,
                doctor: formData.doctor,
                patientName: formData.patientName,
                age: formData.age,
                gender: formData.gender,
                date: formData.date,
                time: formData.time,
                createdAt: serverTimestamp(),
            });
            setLoading(false);
            alert("Appointment booked successfully!");
            navigate("/appointments");
        } catch (err) {
            console.error("Error booking appointment:", err);
            setError("Failed to book appointment. Please try again.");
            setLoading(false);
        }
    };

    return (
        <>
            <NavBar />
            <div id="BookAppointment-hero">
                <div className="hero-content">
                    <form className="BookAppointment-form" onSubmit={handleSubmit}>

                        <h2>Book Appointment</h2>

                        {error && <p style={{ color: "red" }}>{error}</p>}

                        <div className="form-row">
                            <select name="doctor" value={formData.doctor} onChange={handleChange} id="doctor-select">
                                <option value="Dr. Anuj Parota">Dr. Anuj Parota</option>
                                <option value="Dr. Suyash Pawar">Dr. Suyash Pawar</option>
                                <option value="Dr. Om Nimbarte">Dr. Om Nimbarte</option>
                                <option value="Dr. Mohit Soni">Dr. Mohit Soni</option>
                                <option value="Dr. Rajeev Shrma">Dr. Rajeev Shrma</option>
                                <option value="Dr. Usha Agrwal">Dr. Usha Agrwal</option>
                            </select>
                            <input type="text" name="patientName" placeholder="Patient Name" value={formData.patientName} onChange={handleChange} required />
                        </div>

                        <div className="form-row">
                            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
                            <select name="gender" value={formData.gender} onChange={handleChange} id="gender-select">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="transgender">Transgender</option>
                            </select>
                        </div>

                        <div className="form-row">
                            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                            <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                        </div>

                        <button type="submit" id="BookAppointment-btn" disabled={loading}>
                            {loading ? "Booking..." : "Book Appointment"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default BookAppointment;
