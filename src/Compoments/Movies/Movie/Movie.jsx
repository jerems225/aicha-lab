import react from "react";
import './Movie.css';
const Movie=({cards})=>{
    const {image}=cards
    return(
      <div>
        <div className="cards-movies"> 
          <div className="image-movies">
            <img src={image} alt="" id="image-movie"/>
          </div>
        </div>
        </div>
    )
}

export default Movie;