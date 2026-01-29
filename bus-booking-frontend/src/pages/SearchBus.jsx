import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchBus() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [buses, setBuses] = useState([]);

  // ✅ Auth protection
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/buses/search",
        {
          params: { source, destination },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBuses(response.data);
    } catch (error) {
      alert("Error fetching buses ❌");
    }
  };

  const handleSeatSelection = (bus) => {
    navigate("/seats", { state: { bus } });
  };

  return (
    <div className="container mt-4">
      <h2>Search Bus 🚌</h2>

      <input
        className="form-control mb-2"
        placeholder="Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <button className="btn btn-primary mb-3" onClick={handleSearch}>
        Search
      </button>

      <hr />

      <h4>Available Buses</h4>

      {buses.length === 0 && <p>No buses found.</p>}

      {buses.map((bus) => (
        <div key={bus.id} className="card p-3 mb-3 shadow-sm">
          <h5>{bus.busName}</h5>
          <p>{bus.source} → {bus.destination}</p>
          <p>Seats: {bus.totalSeats}</p>
          <p>Price: ₹{bus.price}</p>

          <button
            className="btn btn-success"
            onClick={() => handleSeatSelection(bus)}
          >
            Select Seats 🎟️
          </button>
        </div>
      ))}
    </div>
  );
}

export default SearchBus;
