import './MovieCard.css'
const MovieCard = ({movie}) => {
  return (
    <div className="movieCard">
      <img src={movie.urlPoster}/>
      <p>{movie.title}</p>
      <p>{movie.year}</p>
    </div>
  );
}

export default MovieCard;