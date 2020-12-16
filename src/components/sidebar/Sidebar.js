import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import sublinks from "./../../data";
import "./Sidebar.css";

const Sidebar = () => {
  const { isSidebarOpen, handleSidebar } = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <>
      {isSidebarOpen ? (
        <div className="sidebar">
          <h3>Sidebar Header</h3>
          {sublinks.map((menu) => {
            return (
              <div key={menu.page}>
                <p>{menu.page}</p>
              </div>
            );
          })}
          <FaTimes onClick={() => handleSidebar("close")} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
