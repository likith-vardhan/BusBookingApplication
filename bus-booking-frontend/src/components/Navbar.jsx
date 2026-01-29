import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  if (!user) return null;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <span className="navbar-brand">🚌 Bus Booking</span>

        <div className="d-flex gap-3 align-items-center">

          <Link className="btn btn-light" to="/dashboard">
            Dashboard
          </Link>

          <Link className="btn btn-light" to="/search">
            Search
          </Link>

          <Link className="btn btn-light" to="/bookings">
            My Bookings
          </Link>

          <span className="text-white fw-bold">
            👤 {user.name}
          </span>

          <button
            className="btn btn-danger btn-sm"
            onClick={logout}
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
