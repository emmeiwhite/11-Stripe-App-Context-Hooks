import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../../context";
import "./Submenu.css";

const Submenu = () => {
  const { isSubmenuOpen, location, page, handleSubmenu } = useGlobalContext();

  const container = useRef(null);

  // IDEA: Everytime location value changes, we will execute useEffect()
  useEffect(() => {
    // Adding styles using Javascript
    const aside = container.current;
    const { center, bottom } = location;
    aside.style.left = `${center}px`;
    aside.style.top = `${bottom + 3}px`;
  }, [location]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h3>{page.links.length > 0 && page.page}</h3>
      <article
        className={`${
          page.links.length <= 3
            ? "sublinks-wrapper"
            : "sublinks-wrapper more-links"
        }`}
      >
        {page.links.length > 0 &&
          page.links.map((link) => (
            <div key={link.label} className="link-items">
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </div>
          ))}
      </article>
    </aside>
  );
};

export default Submenu;
