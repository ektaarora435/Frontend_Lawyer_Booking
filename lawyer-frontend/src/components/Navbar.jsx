import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Add styles for better UI

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">JurisHire</div>
      <ul className="nav-links">
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/lawyers">Lawyers</Link></li>
        <li><Link to="/rating">Rating</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
