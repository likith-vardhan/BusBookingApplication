import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TOTAL_SEATS = 32;

// Fake booked seats (later connect backend)
const BOOKED_SEATS = ["A1", "A4", "B3", "C2", "D1"];

function SeatSelection() {
  const location = useLocation();
  const navigate = useNavigate();

  const bus = location.state?.bus;
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (!user) navigate("/");
    if (!bus) navigate("/search");
  }, [bus, user, navigate]);

  if (!bus || !user) return null;

  // Generate seats like A1, A2, A3...
  const rows = ["A", "B", "C", "D"];
  const cols = [1, 2, 3, 4];

  const toggleSeat = (seat) => {
    if (BOOKED_SEATS.includes(seat)) return;

    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const totalPrice = selectedSeats.length * bus.price;

  const proceedToPayment = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat 🚫");
      return;
    }

    navigate("/payment", {
      state: {
        bus,
        seats: selectedSeats,
        totalPrice,
      },
    });
  };

  return (
    <div className="container mt-4">
      <h2>Seat Selection 🎫</h2>

      {/* Bus Info */}
      <div className="card p-3 mb-3 shadow">
        <h5>{bus.busName}</h5>
        <p>{bus.source} → {bus.destination}</p>
        <p>₹{bus.price} per seat</p>
      </div>

      {/* Seat Grid */}
      <div style={{ maxWidth: "320px" }}>
        {rows.map((row) => (
          <div key={row} className="d-flex gap-2 mb-2">
            {cols.map((col) => {
              const seat = `${row}${col}`;
              const isBooked = BOOKED_SEATS.includes(seat);
              const isSelected = selectedSeats.includes(seat);

              return (
                <button
                  key={seat}
                  onClick={() => toggleSeat(seat)}
                  disabled={isBooked}
                  className={`btn btn-sm ${
                    isBooked
                      ? "btn-secondary"
                      : isSelected
                      ? "btn-success"
                      : "btn-outline-primary"
                  }`}
                  style={{ width: "60px" }}
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-3">
        <span className="badge bg-success me-2">Selected</span>
        <span className="badge bg-secondary me-2">Booked</span>
        <span className="badge bg-primary">Available</span>
      </div>

      {/* Summary */}
      <h5 className="mt-4">
        Selected Seats: {selectedSeats.join(", ") || "None"}
      </h5>

      <h4>Total Price: ₹{totalPrice}</h4>

      <button
        className="btn btn-primary mt-3"
        onClick={proceedToPayment}
      >
        Continue to Payment 💳
      </button>
    </div>
  );
}

export default SeatSelection;
