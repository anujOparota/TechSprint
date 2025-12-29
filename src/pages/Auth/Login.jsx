import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../services/firebase";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      let message = "Login failed. Please try again.";
        switch (err.code) {
            case "auth/user-not-found":
            message = "No account found with this email.";
            break;
            case "auth/wrong-password":
            message = "Incorrect password.";
            break;
            case "auth/invalid-email":
            message = "Please enter a valid email address.";
            break;
            case "auth/invalid-credential":
            message = "Email or password is incorrect.";
            break;
            case "auth/too-many-requests":
            message = "Too many failed attempts. Try again later.";
            break;
            default:
            message = "Something went wrong. Please try again.";
        }

        setError(message);
    }
  };

  return (
    <div className="Auth-div">
      <h2>LOGIN</h2>

      <form className="Auth-form" onSubmit={handleLogin}>
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
          Login
        </button>
      </form>

      <p onClick={() => navigate("/register")} style={{ cursor: "pointer" }}>
        Don’t have an account? <b>Register</b>
      </p>
    </div>
  );
}

export default Login;
