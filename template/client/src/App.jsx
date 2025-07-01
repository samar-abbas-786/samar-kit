import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-6 animate-fade-in">
      {/* Logo Section */}
      <div className="flex items-center gap-6 mb-10 animate-fade-in-up delay-100">
        <img src={viteLogo} className="h-16 animate-bounce" alt="Vite Logo" />
        <img
          src={reactLogo}
          className="h-16 animate-spin-slow"
          alt="React Logo"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-purple-400 drop-shadow-lg mb-4 animate-fade-in-up delay-200">
        Hi, I’m <span className="text-white">Samar Abbas</span>
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-10 animate-fade-in-up delay-300">
        A passionate Full Stack Developer who builds elegant tools to boost
        developer productivity. Creator of this awesome{" "}
        <span className="text-purple-400 font-semibold">MERN Stack CLI</span>{" "}
        package.
      </p>

      {/* Info Box */}
      <div className="bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-2xl animate-fade-in-up delay-400">
        <h2 className="text-2xl font-semibold text-purple-300 mb-3">
          🚀 About this Package
        </h2>
        <p className="text-gray-200">
          Scaffold a complete MERN Stack project with just one command.
          Includes:
        </p>
        <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
          <li>React + Vite + Tailwind CSS (Client)</li>
          <li>Express.js + MongoDB (Server)</li>
          <li>Preconfigured project structure for rapid dev</li>
        </ul>
        <p className="mt-4">
          Try it now:
          <code className="block bg-gray-900 mt-2 p-2 rounded text-purple-300 text-sm font-mono">
            npx create-mern-stack-app my-app
          </code>
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-500 text-center animate-fade-in-up delay-500">
        <p className="mb-2">Connect with me:</p>
        <div className="flex gap-6 justify-center">
          <a
            href="https://www.instagram.com/samar_abbas_786/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/samar-abbas-a1ab4625a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-4 text-xs text-gray-600">
          © 2025 Samar Abbas • All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
