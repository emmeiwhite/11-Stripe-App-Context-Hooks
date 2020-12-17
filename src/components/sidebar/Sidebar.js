import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import sublinks from "./../../data";
import "./Sidebar.css";

const Sidebar = () => {
  const { isSidebarOpen, handleSidebar } = useGlobalContext();
  console.log(isSidebarOpen);

  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <div className="sidebar-close">
          <FaTimes
            onClick={() => handleSidebar("close")}
            className="fa-times"
          />
        </div>
        {sublinks.map((menu) => {
          const { page, links } = menu;
          return (
            <div key={page} className="sidebar-links">
              <h3>{page}</h3>
              <div className="links-wrapper">
                {links.map((link) => {
                  const { label, icon } = link;
                  return (
                    <div className="link" key={label}>
                      <span className="link-label">{icon}</span>
                      <span>{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
