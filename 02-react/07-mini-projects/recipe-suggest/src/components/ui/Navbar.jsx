import { FaGithub } from "react-icons/fa";

import { useNavigate, NavLink } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-16 py-8">
      <span
        className="cursor-pointer text-2xl font-bold text-[#FFF8F0]"
        style={{ fontFamily: "Clash Display" }}
        onClick={() => {
          navigate("/");
        }}
      >
        WhatCanICook!
      </span>

      <div className="flex gap-8 font-medium text-sm bg-white/30 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
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
        {/* <button className="px-5 py-2 rounded-full bg-[#FF8C69] text-[#1A1A2E] text-sm font-medium hover:bg-[#ff7a52] transition-colors">
          Sign up
        </button> */}
      </div>
    </nav>
  );
}

export default Navbar;
