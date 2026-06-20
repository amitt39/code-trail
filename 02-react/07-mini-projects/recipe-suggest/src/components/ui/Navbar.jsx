import { FaGithub } from "react-icons/fa";
import { useNavigate, NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-50 flex items-center justify-between px-16 py-5 ${
        isHome
          ? "bg-gradient-to-b from-[#1A1A2E] via-[#1A1A2E]/70 to-transparent backdrop-blur-sm"
          : "bg-[#1A1A2E]"
      }`}
    >
      <span
        className="text-3xl font-bold bg-gradient-to-r from-[#FFF8F0] to-[#FF8C69] bg-clip-text text-transparent cursor-pointer"
        style={{ fontFamily: "Clash Display" }}
        onClick={() => {
          navigate("/");
        }}
      >
        WhatCanICook!
      </span>

      <div className="flex gap-8 font-medium text-sm bg-white/10 border border-white/15 px-4 py-2 rounded-full">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#FFF8F0]"
              : "text-[#FFF8F0]/60 hover:text-[#FFF8F0] transition-colors"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/search-by-ingredients"
          className={({ isActive }) =>
            isActive
              ? "text-[#FFF8F0]"
              : "text-[#FFF8F0]/60 hover:text-[#FFF8F0] transition-colors"
          }
        >
          By Ingredients
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive
              ? "text-[#FFF8F0]"
              : "text-[#FFF8F0]/60 hover:text-[#FFF8F0] transition-colors"
          }
        >
          Favorites
        </NavLink>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 cursor-pointer px-5 py-2 rounded-full bg-[#FFF8F0] text-[#1A1A2E] text-sm font-medium hover:bg-white transition-colors">
          <FaGithub size={16} />
          <span>Source Code</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
