import {useState} from "react";
import "./sideMenu.css";
import "../data/navListData.js";
import NavListItem from "./NavListItem.jsx";
import { navListData } from "../data/navListData.js";
import NavSocialItem from "./NavSocialItem.jsx";
import { navSocialData } from "../data/navSocialData.js";

export default function SideMenu({ active }) {
  const [navData] = useState(navListData);
  const [socialData, setSocialData] = useState(navSocialData);
  return ( 
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
      <a href="#" className="logo">
        <i className="bi bi-controller"></i>
        <span className="brand">Play</span>
      </a>
      <ul className="nav">
        {
          navData.map((item) => (
            <NavListItem key={item._id} item={item} />
          ))
        }
      </ul>
      <ul className="social">
        {
          socialData.map((item) => (
            <NavSocialItem key={item._id} item={item} />
          ))
        }
      </ul>
    </div>
  );
}
