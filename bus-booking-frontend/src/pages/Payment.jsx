import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const { bus, seats, totalPrice } = location.state || {};
  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    if (!user) navigate("/");
    if (!bus) navigate("/search");
  }, [user, bus, navigate]);

  if (!bus || !user) return null;

  const handlePayment = () => {
    alert("Payment Successful ✅");
    navigate("/bookings");
  };

  return (
    <div className="container mt-4">
      <h2>Payment 💳</h2>

      <div className="card p-3 shadow">
        <p>
          <b>Bus:</b> {bus.busName}
        </p>
        <p>
          <b>Seats:</b> {seats}
        </p>
        <p>
          <b>Total Amount:</b> ₹{totalPrice}
        </p>

        <button
          className="btn btn-success mt-3"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Payment;
