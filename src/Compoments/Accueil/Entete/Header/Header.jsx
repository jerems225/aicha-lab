import React from "react";
import "./Header.css";
import Categorie from "../../Categorie/Categorie";
import Baniere from "../../Bannier/Baniere";
import Foother from "../Foother/Foother";
export default function Header() {
  return (
    <div>
    <header className="header">
      <div className="logo">
        <a href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7iDwZU3oruUMuohBvY-nD6Xuy37-_MunTg&s"
            alt=""
            id="logo-image"
          />
        </a>
      </div>

      <div className="info">
      <a href="#">About</a>
      <a href="#"><Categorie/></a>
      <a href="#">Conectez vous</a>
      </div>
    </header>
    <Baniere/>
    <Foother/>
    </div>
  );
}
