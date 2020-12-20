import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../../context";
import "./Submenu.css";
const Submenu = () => {
  const { isSubmenuOpen, location, handleSubmenu } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    // Adding styles using Javascript
    const aside = container.current;
    const { center, bottom } = location;
    aside.style.left = `${center}px`;
    aside.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
      onMouseLeave={() => handleSubmenu("close", null, null)}
    >
      submenu
    </aside>
  );
};

export default Submenu;
