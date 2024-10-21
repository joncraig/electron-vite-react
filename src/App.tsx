import { useState, useEffect } from "react";
import UpdateElectron from "@/components/update";
import logoVite from "./assets/logo-vite.svg";
import logoElectron from "./assets/logo-electron.svg";
import "./App.css";
import Channels from "./components/Channels/Channels";
function App() {
  return (
    <div className="App">
      <section className="app-header"></section>
      <Channels />
      {/* <UpdateElectron /> */}
    </div>
  );
}

export default App;
