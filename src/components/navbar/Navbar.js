import React from "react";
import { ReactComponent as Logo } from "./../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { useGlobalContext } from "../../context";

const Navbar = () => {
  const { handleSidebar } = useGlobalContext();
  return (
    <nav className="navbar">
      <Logo />
      <FaBars
        onClick={() => {
          handleSidebar("open");
        }}
      />
    </nav>
  );
};

export default Navbar;
