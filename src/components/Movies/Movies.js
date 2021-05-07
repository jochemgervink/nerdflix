import './Movies.css'
import React, { useEffect, useState } from "react"
import Filterbar from '../Filterbar/Filterbar.js'


const Movies = () => {
  
  const [data, setData] = useState([]);

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
        console.log(myJson.data.movies);
        setData(myJson.data.movies)
      });
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
    <Filterbar />
    <div className="movies">
      Movies
      {data && data.length > 0 && data.map((item) => (
        <p>{item.title}</p>)
      )}
    </div>
    </>
  );

}
export default Movies;