import React from "react";
import { ReactComponent as Logo } from "./../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <FaBars />
    </nav>
  );
};

export default Navbar;
