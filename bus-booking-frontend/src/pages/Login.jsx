import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ToastMessage from "../components/ToastMessage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });

  const navigate = useNavigate();

  // ✅ AUTO LOGIN ON REFRESH
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 2500);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          email,
          password,
        }
      );

      // ✅ Save token and user
      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      showToast("Login successful ✅", "success");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

    } catch (error) {
      showToast(
        error.response?.data || "Login failed ❌",
        "error"
      );
    }
  };

  return (
    <div className="container mt-5">
      <ToastMessage message={toast.message} type={toast.type} />

      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">Login</h3>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                className="btn btn-primary w-100"
                onClick={handleLogin}
              >
                Login
              </button>

              <p className="text-center mt-3">
                New user? <Link to="/register">Register here</Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
