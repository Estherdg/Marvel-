import logo from "../img/marvel.svg";
import React from "react";
import { NavLink } from "react-router-dom";
import "./styleNavbar.css";

const Navbar = () => {
  return (
    <nav className="navigation">
      <NavLink className="NB" exact to="/">
        <img src={logo} alt="logo-marvel" className="nav-logo" />
      </NavLink>

      <NavLink className="NB" to="/Characters">
        Personajes
      </NavLink>

      <NavLink className="NB" to="/Comics">
        Comics
      </NavLink>

      <NavLink className="NB" to="/Series">
        Series
      </NavLink>
    </nav>
  );
};
export default Navbar;
