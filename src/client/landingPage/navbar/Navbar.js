import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="navigationBar">
        <div>
          <Link to="/" className="navbar-title">
            Health Care Connect
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/doctorDetails"> Available Doctors</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
