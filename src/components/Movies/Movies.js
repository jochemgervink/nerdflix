import './Movies.css'
import React, { useEffect, useState } from "react"
import Filterbar from '../Filterbar/Filterbar.js'
import MovieCard from '../MovieCard/MovieCard';


const Movies = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    await fetch('imdb-top-50.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.data.movies[0].urlPoster)

        console.log(myJson.data.movies);
        setData(myJson.data.movies)
      }).finally(() => {
        setLoading(false)
      });
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (loading) {
    console.log(loading)
    return <p>Data is loading...</p>;
  }

  return (
    <>
      <Filterbar />
      <div className="movies">
        {!loading &&
           data && data.length > 0 && data.map((item) => (
            <MovieCard movie={item} ></MovieCard>
          ))
        }


      </div>
    </>
  );

}
export default Movies;