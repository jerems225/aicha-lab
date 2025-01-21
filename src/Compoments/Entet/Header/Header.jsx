import React from "react";
import "./Header.css";
import Categorie from "../../Categorie/Categorie";
import Baniere from "../../Bannier/Baniere";
import Foother from "../Foother/Foother";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7iDwZU3oruUMuohBvY-nD6Xuy37-_MunTg&s"
            alt=""
            id="logo-image"
          />
        </Link>
      </div>

      <div className="info">
      <Categorie/>
      <div className="liens">
      <Link to="/About">About</Link>
      <Link>Conectez vous</Link>
      <Link to="/MovieListe">
      Visitez des dessins annimés
      </Link>
      </div>
      </div>
    </header>
    </div>
  );
}
