import { useEffect, useState } from "react";
import "./main.css";
import SideMenu from "../components/sidemenu.jsx";
import Header from "./Header.jsx";
import Home from "./HomePage.jsx";

function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const handleToggleActive = () => {
    setActive(!active);
  };

  const fetchData = () => {
    fetch("../API/gameData.json")
     .then((response) => response.json())
     .then((data) => setGames(data));
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(games)
  
  return (
    <main>
      <SideMenu active={active} />
      <div className={`banner ${active ? "active" : undefined}`}>
        <Header toggleActive={handleToggleActive}></Header>
        <div className="container-fluid">
          <Home games={games}></Home>
        </div>
      </div>
    </main>
  );
}

export default Main;
