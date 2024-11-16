import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">Eco-Case</h1>
    <ul>
      <li><a href="#landing">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#research">Research</a></li>
      <li><a href="#suggestions">Suggestions</a></li>
      <li><a href="#references">References</a></li>
      <li><a href="#team">Team</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
