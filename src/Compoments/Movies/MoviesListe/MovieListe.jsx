import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; //L'importation de l'icon de recherche
import "./MoviesListe.css"
import Movie from "../Movie/Movie";
import MovieData from "../../../Data/Data-movies";
import Header from "../../Entet/Header/Header";
const MovieList = () => {
  const [sheatem, setSheatem] = useState("");
  const handleChange = (e) => {
    let value = e.target.value;
    setSheatem(value);
  };
  return (
    <div>
        <Header/>
        <div className="recherche">
      <div className="message-Listcards">

        <input
          type="text"
          placeholder="recherche"
          onChange={handleChange} 
          id="input" 
          required
          
        />
        <button>
        <FaSearch style={{ fontSize: "20px", color: "blue" }} />
        </button>
      </div>

      <div>
        {MovieData
          .filter((value) => {
            return value.titre
              .toLocaleLowerCase()
              .includes(sheatem.toLocaleLowerCase());
          })
          .map((element) => {
            return (
              <div className="card">
                <Link to={`/MoviesListClip/${element.id}`}>
                  <Movie cards={element} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
