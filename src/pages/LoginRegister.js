import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Navigation hook

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setFormData({ email: "", password: "" });
    setMessage(""); // Clear message when switching forms
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(isRegistering ? "Registration successful! Redirecting..." : "Login successful! Redirecting...");

    // Simulate delay before redirection
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isRegistering ? "Register" : "Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>
        {message && <p className="text-green-500 text-center mt-4">{message}</p>}
        <p className="mt-4 text-center text-sm">
          {isRegistering ? "Already have an account?" : "New user?"}{" "}
          <button className="text-red-500 font-bold" onClick={toggleForm}>
            {isRegistering ? "Login here" : "Register here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginRegister;
