import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Sidebar from "./components/sidebar/Sidebar";
import Submenu from "./components/submenu/Submenu";
import AppProvider from "./context";

function App() {
  return (
    <AppProvider>
      <Hero />
      <Navbar />
      <Submenu />
      <Sidebar />
    </AppProvider>
  );
}

export default App;
