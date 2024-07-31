import { useState } from "react";
import "./sideMenu.css";
import NavListItem from "./NavListItem.jsx";
import { navListData } from "../data/navListData.js";
import NavSocialItem from "./NavSocialItem.jsx";
import { navSocialData } from "../data/navSocialData.js";

export default function SideMenu({ active, sectionActive }) {
  const [navData, setNavData] = useState(navListData);
  const [socialData, setSocialData] = useState(navSocialData);
  const handleNavOnClick = (id, target) => {
    const newNavData = navData.map(nav => {
      nav.active = nav._id === id;
      return nav;
    });
    setNavData(newNavData);
    sectionActive(target);
  };

  return (
    <div className={`sideMenu ${active ? 'active' : ''}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {navData.map((item) => (
          <NavListItem 
            key={item._id} 
            item={item} 
            navOnClick={handleNavOnClick}
          />
        ))}
      </ul>
      <ul className="social">
        {socialData.map((item) => (
          <NavSocialItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}
