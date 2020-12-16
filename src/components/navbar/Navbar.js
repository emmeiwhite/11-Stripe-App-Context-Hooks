import React from "react";
import { ReactComponent as Logo } from "./../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { useGlobalContext } from "../../context";
import sublinks from "./../../data";

const Navbar = () => {
  const { handleSidebar } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Logo />
        <button
          className="btn btn-sidebar-open"
          onClick={() => {
            handleSidebar("open");
          }}
        >
          <FaBars />
        </button>
      </div>

      <ul className="nav-links">
        {sublinks.map((link) => (
          <li>
            <span className="link" key={link.page}>
              {link.page}
            </span>
          </li>
        ))}
      </ul>
      <button className="btn signin-btn">Sign in</button>
    </nav>
  );
};

export default Navbar;
