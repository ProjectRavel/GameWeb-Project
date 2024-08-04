import React, { useContext } from "react";
import "./header.css";
import userImg from "../images/user.jpg";
import { AppContext } from "../App";

function Header({ toggleActive }) {
  const {library, bag} = useContext(AppContext);
  return (
    <header>
      <a href="#" className="menu" onClick={toggleActive}>
        <i className="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="#" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </a>
        <a href="" className="icon">
          <i className="bi bi-bag-fill"></i>
          <span className="bag">0</span>
        </a>

        <div href="#" className="avatar">
          <a href="#" className="img">
            <img src={userImg} alt="User Image" />
          </a>
          <div className="user">
            <span>Rulvyy</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
