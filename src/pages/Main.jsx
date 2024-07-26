import React, { useState } from "react";
import "./main.css";
import SideMenu from "../components/sidemenu.jsx";
import Header from "./Header.jsx";

function Main() {
  const [active, setActive] = useState(false);

  const handleToggleActive = () => {
    setActive(!active);
  };
  return (
    <main>
      <SideMenu />
      <div className="banner">
        <Header></Header>
      </div>
    </main>
  );
}

export default Main;
