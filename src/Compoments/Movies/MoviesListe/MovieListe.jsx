import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./MoviesListe.css";
import Movie from "../Movie/Movie";
import MovieData from "../../../Data/Data-movies";
import Header from "../../Entet/Header/Header";

const MovieList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="movies-container">
        {/* Barre de Recherche */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher un dessin animé..."
            onChange={handleChange}
          />
          <button>
            <FaSearch />
          </button>
        </div>

        {/* Liste des Films */}
        <div className="movies-grid">
          {MovieData.filter((movie) =>
            movie.titre.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((movie) => (
            <div className="movie-card" key={movie.id}>
                <Movie movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
