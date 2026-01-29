import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function MyBookings() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  // ✅ Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      fetchBookings(parsedUser.id);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const fetchBookings = async (userId) => {
    try {
      const response = await api.get(
        `/api/bookings/user/${userId}`
      );
      setBookings(response.data);
    } catch (error) {
      alert("Failed to load bookings ❌");
    }
  };

  if (!user) return null;

  return (
    <div style={{ padding: "40px" }}>
      <h2>My Bookings 📋</h2>

      {bookings.length === 0 && (
        <p>No bookings yet.</p>
      )}

      {bookings.map((booking) => (
        <div
          key={booking.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p><b>Booking ID:</b> {booking.id}</p>
          <p><b>Bus:</b> {booking.bus?.busName}</p>
          <p><b>Seats:</b> {booking.seats}</p>
          <p><b>Time:</b> {booking.bookingTime}</p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;
