import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Sidebar from "./components/sidebar/Sidebar";
import Submenu from "./components/submenu/Submenu";
import AppProvider from "./context";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <main className="app-wrapper section">
        <Navbar />
        <Sidebar />
        {/* <Hero /> */}
        {/* <Submenu /> */}
      </main>
    </AppProvider>
  );
}

export default App;
