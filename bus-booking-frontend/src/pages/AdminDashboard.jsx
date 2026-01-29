function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.role !== "ADMIN") {
    return (
      <h3 className="text-danger text-center mt-5">
        Access Denied ❌
      </h3>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard 🛠</h2>
      <p>Welcome Admin: {user.name}</p>

      <div className="alert alert-info mt-4">
        Admin features will be added here.
      </div>
    </div>
  );
}

export default AdminDashboard;
