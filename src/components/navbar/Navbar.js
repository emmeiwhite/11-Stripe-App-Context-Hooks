import React from "react";
import { ReactComponent as Logo } from "./../../images/logo.svg";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { useGlobalContext } from "../../context";
import sublinks from "./../../data";
import Submenu from "../submenu/Submenu";

const Navbar = () => {
  const { handleSidebar, handleSubmenu, isSubmenuOpen } = useGlobalContext();

  const displaySubmenu = (e) => {
    // We need two things: 1) event.target.textContent and 2)location of the item using getBoundingClientRect()
    const mainLink = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();

    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom;

    handleSubmenu("open", mainLink, { center, bottom });
  };

  return (
    <nav className="navbar section">
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
            <span className="link" key={link.page} onMouseOver={displaySubmenu}>
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
