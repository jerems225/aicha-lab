import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; //L'importation de l'icon de recherche
import "./MoviesListe.css"
import Movie from "../Movie/Movie";
import MovieData from "../../../Data/Data-movies";
import Header from "../../Entet/Header/Header";
const MovieListe = () => {
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
         
          id="input" 
          required
          
        />
        <button>
        <FaSearch style={{ fontSize: "20px", color: "blue" }} onChange={handleChange} />
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
              <div>
                <Link to="/MoviesListComponent">
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

export default MovieListe;
