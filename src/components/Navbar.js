import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-500">Blood Donation</h1>
      <div>
        <Link className="px-4 text-gray-700 hover:text-red-500 transition-colors" to="/">Home</Link>
        <Link className="px-4 text-gray-700 hover:text-red-500 transition-colors" to="/login">Login</Link>
        <Link className="px-4 text-gray-700 hover:text-red-500 transition-colors" to="/camps">Blood Camps</Link>
        <Link className="px-4 text-gray-700 hover:text-red-500 transition-colors" to="/guide">Guide</Link>
      </div>
    </nav>
  );
};

export default Navbar;
