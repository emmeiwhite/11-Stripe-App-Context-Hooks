import React, { useState, useContext } from "react";
import sublinks from "./data";

export const AppContext = React.createContext();

const AppProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  /* --- SubMenu Data --- */
  const [page, setPage] = useState({
    text: "",
    links: [],
  });
  /* --- End ---*/
  const handleSidebar = (value) => {
    if (value === "close") {
      setIsSidebarOpen(false);
    }
    if (value === "open") {
      setIsSidebarOpen(true);
    }
  };

  const handleSubmenu = (value, currentLink, coordinates) => {
    if (value === "close") {
      setIsSubmenuOpen(false);
    }
    if (value === "open") {
      setIsSubmenuOpen(true);
      setLocation(coordinates);

      // Setting the page and links state for it to be accessed in the submenu component

      const links = sublinks.find((link) => link.page === currentLink);
      setPage(links);
    }
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        handleSidebar,
        handleSubmenu,
        location,
        page,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

/* ---  Custom Hook useGlobalContext ---*/
export const useGlobalContext = () => {
  return useContext(AppContext);
};
