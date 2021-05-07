import './Movies.css'
import React, { useEffect, useState } from "react"
import Filterbar from '../Filterbar/Filterbar.js'
import MovieCard from '../MovieCard/MovieCard';


const Movies = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

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
        return response.json();
      })
      .then(function (myJson) {

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
    return <p>Data is loading...</p>;
  }

  function getData(){
    return data;
  }
  return (
    <>
      <Filterbar data={getData} setData={setData} loading={loading} setLoading={setLoading}/>
      <div className="movies">
        {!loading &&
           data && data.length > 0 && data.map((item) => (
            <MovieCard movie={item} favorites={favorites} setFavorites={setFavorites}  ></MovieCard>
          ))
        }
      </div>
    </>
  );

}
export default Movies;