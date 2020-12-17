import React, { useState, useContext } from "react";
import sublinks from "./data";

export const AppContext = React.createContext();

const AppProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

  const handleSidebar = (value) => {
    if (value === "close") {
      setIsSidebarOpen(false);
    }
    if (value === "open") {
      setIsSidebarOpen(true);
    }
  };

  const handleSubmenu = (value) => {
    if (value === "close") {
      setIsSubmenuOpen(false);
    }
    if (value === "open") {
      setIsSubmenuOpen(true);
    }
  };
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, isSubmenuOpen, handleSidebar, handleSubmenu }}
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
