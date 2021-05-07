import './MovieCard.css'
import React, { useState } from "react"

const MovieCard = ({ movie, favorites, setFavorites }) => {

  const [reRender, setReRender] = useState(false);
  function toggleFavorite(e) {
    console.log(e)
    console.log(movie.title)
    var newFavorites = favorites;
    let index = newFavorites.indexOf(movie.title);
    if (index >= 0) {
      newFavorites.splice(index, 1);
    } else {
      newFavorites.push(movie.title);
    }

    setFavorites(newFavorites);

    console.log(favorites)

    forceReRender()
  }

  function forceReRender(){
    setReRender(!reRender)
  }



  return (
    <div className="movieCard">
      <div className="container">
        <img src={movie.urlPoster} />
        <h1 className="score" >
          {movie.rating}
        </h1>
        <div
        className={favorites.indexOf(movie.title) >= 0 ? "favoriteOn" : "favoriteOff"}
        onClick={(e)=>{toggleFavorite(e)}}>
          <span className={favorites.indexOf(movie.title) >= 0 ? "fa fa-star checked" : "fa fa-star"}></span>

          {favorites.includes(movie.title) && 1}
          
        </div>
        </div>
      <p>{movie.title}</p>
      <p>{movie.year}</p>
    </div >
  );
}

export default MovieCard;