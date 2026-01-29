import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

 useEffect(() => {
  if (!user) {
    navigate("/");
  }
}, [user, navigate]);


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="container mt-4">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3>Welcome, {user.name} 👋</h3>
          <p className="text-muted">{user.email}</p>
          <small className="badge bg-secondary">
            Role: {user.role}
          </small>
        </div>

        <button
          className="btn btn-outline-danger"
          onClick={handleLogout}
        >
          Logout 🔒
        </button>
      </div>

      {/* ACTION CARDS */}
      <div className="row g-4">

        {/* USER CARD */}
        <div className="col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4>🚌 Search Buses</h4>
              <p>Search and book buses easily.</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/search")}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* BOOKINGS */}
        <div className="col-md-4">
          <div className="card shadow h-100">
            <div className="card-body">
              <h4>📋 My Bookings</h4>
              <p>View booking history.</p>
              <button
                className="btn btn-success"
                onClick={() => navigate("/bookings")}
              >
                View
              </button>
            </div>
          </div>
        </div>

        {/* ADMIN CARD */}
        {user.role === "ADMIN" && (
          <div className="col-md-4">
            <div className="card shadow h-100 border-danger">
              <div className="card-body">
                <h4>🛠 Admin Panel</h4>
                <p>Manage buses and system.</p>
                <button
                  className="btn btn-danger"
                  onClick={() => navigate("/admin")}
                >
                  Open Admin
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;
