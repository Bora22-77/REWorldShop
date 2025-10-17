import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://re-world-backend.onrender.com/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("User registered:", data);
        setMessage("✅ Registration successful!");
      } else {
        const errorData = await res.json();
        console.error("Error:", errorData);
        setMessage("❌ Registration failed! Check input.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setMessage("⚠️ Server error, please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
  <form
    onSubmit={handleSubmit}
    className="bg-white shadow-md rounded-2xl w-full max-w-md p-8 sm:p-10 md:p-12 lg:p-14"
  >
    <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
      Register
    </h2>

    <div className="flex flex-col space-y-4">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Register
      </button>
    </div>

    {message && (
      <p className="mt-4 text-center text-gray-700 font-semibold">
        {message}
      </p>
    )}
  </form>
</div>

  );
};

export default Register;
