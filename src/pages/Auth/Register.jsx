import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../services/firebase";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      let message = "Registration failed. Please try again.";

      switch (err.code) {
        case "auth/email-already-in-use":
          message = "This email is already registered.";
          break;
        case "auth/invalid-email":
          message = "Please enter a valid email address.";
          break;
        case "auth/weak-password":
          message = "Password should be at least 6 characters.";
          break;
        default:
          message = "Something went wrong. Please try again.";
      }

      setError(message);
    }
  };

  return (
    <div className="Auth-div">
      <h2>REGISTER</h2>

      <form className="Auth-form" onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          className="Auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          className="Auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" className="Auth-btn">
          Register
        </button>
      </form>

      <p onClick={() => navigate("/login")} style={{ cursor: "pointer" }}>
        Already have an account? <b>Login</b>
      </p>
    </div>
  );
}

export default Register;
