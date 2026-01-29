import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:8080/api/users/register", {
        name,
        email,
        password,
      });

      alert("Registration successful ✅");
      navigate("/");

    } catch (error) {
      alert(error.response?.data || "Registration failed ❌");
    }
  };

  return (
    <div className="auth-bg">
      <div className="card auth-card shadow-lg">
        
        <div className="auth-header">
          <h3>Create Account 🚀</h3>
          <p className="mb-0">Start booking buses instantly</p>
        </div>

        <div className="auth-body">

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@email.com"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button
            className="btn btn-primary w-100 btn-auth"
            onClick={handleRegister}
          >
            Create Account
          </button>

          <p className="text-center mt-3 mb-0">
            Already have an account?{" "}
            <Link to="/" className="fw-bold">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;
