import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded transition duration-300 ${
      pathname === path
        ? "bg-purple-600 text-white"
        : "text-gray-300 hover:bg-purple-500 hover:text-white"
    }`;

  return (
    <nav className="bg-gradient-to-br from-gray-950 to-gray-900 shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="text-purple-400 font-bold text-2xl tracking-wide"
        >
          samar-kit
        </Link>

        {/* Links */}
        <div className="space-x-2 md:space-x-4">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/signup" className={linkClass("/signup")}>
            Sign Up
          </Link>
          <Link to="/login" className={linkClass("/login")}>
            Login
          </Link>
          <Link to="/profile" className={linkClass("/profile")}>
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
