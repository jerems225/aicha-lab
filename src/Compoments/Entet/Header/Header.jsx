import React from "react";
import "./Header.css";
import Categorie from "../../Categorie/Categorie";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      {/* Logo textuel */}
      <div className="logo">
        <Link to="/" className="logo-text">
          Cartoon<span className="anim">World</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="nav-links">
      <Link to="/">Accueil</Link>
        <Link to="/MovieListe">Visitez des dessins animés</Link>
      </nav>

      {/* Catégories */}
      <Categorie />
    </header>
  );
}
