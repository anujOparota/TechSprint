import './Auth.css'
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

       
        navigate("/dashboard");
    };

    return (
        <div className="Auth-div">
            <h2>Register</h2>

            <form className="Auth-form" onSubmit={handleRegister}>
                <input type="email" placeholder="Email" />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <button type="submit" className="Auth-btn">
                    Register
                </button>
            </form>

            <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                Already have an account? <b>Login</b>
            </p>
        </div>
    );
}

export default Register;
