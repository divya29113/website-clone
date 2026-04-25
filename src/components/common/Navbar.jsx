import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

function Navbar() {
  return (
    <header className="vt-header">
      <div className="vt-logo-area">
        <img src="/images/logo.png" alt="Vedhanthi Logo" className="vt-logo" />
      </div>

      <nav className="vt-nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services⌄</NavLink>
        <NavLink to="/technologies">Technologies⌄</NavLink>
        <NavLink to="/digital-marketing">Digital Marketing</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>

      <div className="vt-menu-box">
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Navbar;