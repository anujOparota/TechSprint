import './Auth.css'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        
        navigate("/dashboard");
    };

    return (
        <div className="Auth-div">
            <h2>LOGIN</h2>

            <form className="Auth-form" onSubmit={handleLogin}>
                <input type="email" placeholder="Email" className='Auth-input' />
                <br />
                <input type="password" placeholder="Password" className='Auth-input' />
                <br />
                <button type="submit" className="Auth-btn" >
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
