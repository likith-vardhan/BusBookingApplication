function ToastMessage({ message, type }) {
  if (!message) return null;

  const bgClass =
    type === "success" ? "bg-success" : "bg-danger";

  return (
    <div
      className={`toast show position-fixed top-0 end-0 m-4 text-white ${bgClass}`}
      style={{ zIndex: 9999 }}
    >
      <div className="toast-body fw-semibold">
        {message}
      </div>
    </div>
  );
}

export default ToastMessage;
