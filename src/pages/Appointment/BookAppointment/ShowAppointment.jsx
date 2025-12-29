import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useAuth } from "../../../context/AuthContext";
import NavBar from "../../../components/NavBar/NavBar";
import "./ShowAppointment.css";

function ShowAppointment() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAppointments = async () => {
    setLoading(true);
    setError("");
    try {
      const snapshot = await getDocs(collection(db, "appointments"));
      const userAppointments = [];

      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        if (data.userId === user.uid) {
          userAppointments.push({
            id: docSnap.id,
            ...data,
          });
        }
      });

      setAppointments(userAppointments);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load appointments");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchAppointments();
    }
  }, [user]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "appointments", id));
      setAppointments((prev) =>
        prev.filter((appointment) => appointment.id !== id)
      );
    } catch (err) {
      console.error(err);
      alert("Failed to delete appointment");
    }
  };

  return (
    <>
      <NavBar />

      <div className="ShowAppointment-container">
        <h2>Your Appointments</h2>

        {loading && <p>Loading appointments...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && appointments.length === 0 && (
          <p>No appointments found.</p>
        )}

        {!loading && appointments.length > 0 && (
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Patient</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id}>
                  <td>{appt.doctor}</td>
                  <td>{appt.patientName}</td>
                  <td>{appt.age}</td>
                  <td>{appt.gender}</td>
                  <td>{appt.date}</td>
                  <td>{appt.time}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(appt.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default ShowAppointment;
