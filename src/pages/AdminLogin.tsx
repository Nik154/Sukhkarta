import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") {
      navigate("/admin/dashboard");
    } else {
      setMsg("Invalid Password");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 border rounded shadow">
      <h2 className="text-2xl mb-4 font-bold">Admin Login</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-3 rounded"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login
      </button>
      <p className="mt-3">{msg}</p>
    </div>
  );
}
