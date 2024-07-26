import { useState } from "react";
import "./main.css";
import SideMenu from "../components/sidemenu.jsx";
import Header from "./Header.jsx";
import Home from "./HomePage.jsx"

function Main() {
  const [active, setActive] = useState(false);

  const handleToggleActive = () => {
    setActive(!active);
  };


  return (
    <main>
      <SideMenu active={active} />
      <div className={`banner ${active ? "active" : undefined}`}>
        <Header toggleActive={handleToggleActive}></Header>
        <div className="container-fluid">
            <Home></Home>
        </div>
      </div>  
    </main>
  );
}

export default Main;
