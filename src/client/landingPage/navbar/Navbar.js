import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="navigationBar">
        <div>
          <a href="/" className="navbar-title">
            Health Care Connect
          </a>
        </div>
        <ul>
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/doctorDetails"> Available Doctors</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
