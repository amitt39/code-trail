import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
}

export default Navbar;
