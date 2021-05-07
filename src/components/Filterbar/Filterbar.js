import './Filterbar.css'
import { useState } from 'react'
const Filterbar = ( getData, setData ) => {


  const [alphabeticSort, setAlphabeticSort] = useState(true);


  // Sorteren geeft bugs icm data fetching, wegens tijdgebrek niet kunnen oplossen.
  // async function toggleSort() {
  //   if (typeof data == 'undefined') {
  //     console.log("loading")
  //     return <p>Data is loading...</p>;
  //   }
  //   var movies = data.data;
  //   console.log(movies)

  //   if (typeof movies != 'undefined') {
  //     if (alphabeticSort) {
  //       movies.sort(function (a, b) {
  //         console.log("sorting A-Z")
  //         var textA = a.title.toUpperCase();
  //         var textB = b.title.toUpperCase();
  //         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  //       });
  //     }
  //     else {
  //       movies.sort(function (a, b) {
  //         console.log("sorting Z-A")
  //         var textA = a.title.toUpperCase();
  //         var textB = b.title.toUpperCase();
  //         return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
  //       });
  //     }
  //   }
  //   console.log(movies)
  // }



  //Deze functie triggert niet bij een druk op de button. Ik weet niet waarom, wegens tijdgebrek niet kunnen oplossen. 
  async function onSort() {
    console.log(alphabeticSort)

    if (alphabeticSort){
      console.log("sort alphabetically")
    }else
    {
      console.log("sort reverse alphabetically")
    }
    console.log(alphabeticSort)
  }

  async function filterMovies(){
    var input = document.getElementById('filter_movies').value.toLowerCase();
    console.log(input)
  }

  return (
    <>
      <div className="bar">
        Search

        <input type="text" placeholder="Search Movies" id="filter_movies" />
        <button onClick={filterMovies}>Search</button>
        <div class="dropdown">
          <span>Mouse over me</span>
          <div class="dropdown-content">
            <p>(A-Z)</p>
            <p>(Z-A)</p>
          </div>
        </div>
        <btn onClick={onSort()}> Sort</btn>
        <button onClick={onSort()}>Sort</button>

      </div>
    </>
  );
}

export default Filterbar;