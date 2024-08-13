import React from "react";
import "./navbar.css";
import {  NavLink } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdMenu } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Navbar = ({ isSticky }) => {
  return (
    <header className={`navbar ${isSticky ? 'sticky' : ''}`}>
    <nav>
      {/* <div className="navbar"> */}
        <div className="nav-text">
        <FaLocationDot className="location" />
        <h1>Tourist</h1>
        </div>

        <div className="navlinks mobile">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/packages">Packages</NavLink>
          <div className="droplink">
            <NavLink to="/pages" className="pages">Pages <TiArrowSortedDown className="icon" /></NavLink>
            <div className="links">
              <NavLink to="/">Destination</NavLink>
              <NavLink to="/">Cooking</NavLink>
              <NavLink to="/">Testimonial</NavLink>
              <NavLink to="/">Travel Guide</NavLink>
            </div>
          </div>
          <NavLink to="/contact">Contact</NavLink>
          <button className="register">Register</button>
        </div>
        <MdMenu className="menu"/>
      {/* </div> */}
    </nav>
</header>

  );
};

export default Navbar;
