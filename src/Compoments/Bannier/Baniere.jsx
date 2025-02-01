import React from "react";
import "./Banniere.css";
import { Link } from "react-router-dom";

export default function Baniere() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Bienvenue sur <span className="highlight">CartonWorld</span></h1>
        <p>Explorez un univers riche en dessins animés, mangas et aventures captivantes.</p>
        <Link to="/MovieListe" className="cta-button">Regarder Maintenant</Link>
      </div>
    </section>
  );
}
