import { NavLink } from "react-router-dom";
import { FaSpa, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-pink-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <FaSpa className="text-3xl text-pink-400" />
        <h1 className="text-xl font-bold text-gray-800">BeautyCourse</h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-lg items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-pink-500 border-b-2 border-pink-500 pb-1"
              : "text-gray-700 hover:text-pink-400"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive
              ? "text-pink-500 border-b-2 border-pink-500 pb-1"
              : "text-gray-700 hover:text-pink-400"
          }
        >
          Courses
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-pink-500 border-b-2 border-pink-500 pb-1"
              : "text-gray-700 hover:text-pink-400"
          }
        >
          Contact
        </NavLink>

        <FaHeart className="text-xl text-gray-700 hover:text-pink-500 cursor-pointer" />

        <FaShoppingCart className="text-xl text-gray-700 hover:text-pink-500 cursor-pointer" />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <FaBars
          className="text-2xl text-gray-800 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-16 right-0 w-24 h-[calc(69vh-68px)] bg-white shadow-lg p-5 flex flex-col rounded-b-md gap-2 md:hidden overflow-y-auto z-10">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          <div className="flex gap-4">
            <FaHeart className="text-xl text-gray-700" />
            <FaShoppingCart className="text-xl text-gray-700" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
