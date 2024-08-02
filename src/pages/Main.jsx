import { useEffect, useState, useRef } from "react";
import "./main.css";
import SideMenu from "../components/sidemenu.jsx";
import Header from "./Header.jsx";
import Home from "./HomePage.jsx";
import Categories from "./Categories.jsx";
import MyLibrary from "./MyLibrary.jsx";  
import Bag from "./Bag.jsx";

function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  const sections = [
    {
      name: "Home",
      ref: homeRef,
      active: true,
    },
    {
      name: "Categories",
      ref: categoriesRef,
      active: false,
    },
    {
      name: "Library",
      ref: libraryRef,
      active: false,
    },
    {
      name: "Bag",
      ref: bagRef,
      active: false,
    }
  ]

  const handleToggleActive = () => {
    setActive(!active);
  };

  const handleSectionAction = target => {
    sections.map(section => {
      section.ref.current.classList.remove('active')
      if(section.ref.current.id === target){
        section.ref.current.classList.add('active')
        console.log(section.ref.current.id)
        // call API to filter games by category and update state accordingly
        // fetchDataByCategory(section.name
      }
    })
  }

  const fetchData = () => {
    fetch("../API/gameData.json")
      .then((response) => response.json())
      .then((data) => setGames(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(games);

  return (
    <main>
      <SideMenu active={active} sectionActive={handleSectionAction} />
      <div className={`banner ${active ? "active" : undefined}`}>
        <Header toggleActive={handleToggleActive}></Header>
        <div className="container-fluid">
          <Home games={games} reference={homeRef}></Home>
          <Categories games={games} reference={categoriesRef}></Categories>
          <MyLibrary games={games} reference={libraryRef}></MyLibrary>
          <Bag games={games} reference={bagRef}></Bag>
        </div>
      </div>
    </main>
  );
}

export default Main;
