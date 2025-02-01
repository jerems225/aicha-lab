import React from 'react';
import { useParams } from 'react-router-dom';
import './MoviePlayer.css';

const MoviePlayer = () => {
  // Utiliser l'ID du film à partir des paramètres d'URL
  const { movieId } = useParams();
  
  // Utilisation d'une vidéo YouTube par défaut pour cet exemple (vous devrez remplacer l'URL avec celle du film que vous souhaitez afficher)
  const videoUrl = `https://www.youtube.com/embed/${movieId}`;

  return (
    <section className="movie-player">
      <div className="movie-player-container">
        <iframe
          title="Movie Player"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="movie-player-iframe"
        ></iframe>
      </div>
    </section>
  );
};

export default MoviePlayer;
