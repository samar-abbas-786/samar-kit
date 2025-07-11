import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/signup", form);
      localStorage.setItem("token", data.token);
      navigate("/profile");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8 text-white border border-purple-400 animate-fade-in-up">
        <h2 className="text-3xl font-extrabold text-purple-400 mb-6 text-center drop-shadow">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm mb-1 text-gray-300">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm mb-1 text-gray-300">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm mb-1 text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-semibold rounded-lg shadow-md"
          >
            Sign Up
          </button>
        </form>

        {/* Login redirect */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-purple-400 hover:text-purple-300 hover:underline transition"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
