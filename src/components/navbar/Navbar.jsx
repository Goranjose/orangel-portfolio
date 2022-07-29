import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar({ scrolling }) {
  return (
    <nav className={`navbar ${scrolling > 40 ? "scrolling" : null}`}>
      <ul className="navbar__links">
        <li>
          <Link to="Hero" smooth duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link to="About" smooth duration={1000}>
            About
          </Link>
        </li>
        <li>
          <Link to="Projects" smooth duration={1000}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth duration={1000}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
