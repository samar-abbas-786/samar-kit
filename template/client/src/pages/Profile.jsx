import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/profile")
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center px-4">
      <div className="bg-zinc-800 shadow-2xl rounded-2xl p-8 w-full max-w-md text-center animate-fade-in-up">
        {/* Avatar / Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-md animate-bounce">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-purple-400 mb-2 drop-shadow">
          Hello, {user?.name}
        </h2>

        {/* Details */}
        <div className="text-gray-300 text-sm space-y-2 mb-6">
          <p>
            <span className="text-white font-semibold">📧 Email:</span>{" "}
            {user?.email}
          </p>
          <p>
            <span className="text-white font-semibold">🛡️ Role:</span>{" "}
            {user?.role || "User"}
          </p>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="w-full py-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all duration-300 text-white font-semibold shadow-md"
        >
          Logout
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6 animate-fade-in-up delay-300">
          👨‍💻 Built with ❤️ by Samar Abbas
        </p>
      </div>
    </div>
  );
}
