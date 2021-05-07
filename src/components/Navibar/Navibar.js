import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Homepage from './Homepage';
import Series from '../Series/Series.js'
import Movies from '../Movies/Movies.js'
import './Navibar.css'


const Navibar = () => {

  return (
    <>
      <Router>
        <div className="nav">
          <div className="nav_btns">
            <Link className="nav_btn" to="/home">Homepage </Link>
            <Link className="nav_btn" to="/series">Series </Link>
            <Link className="nav_btn" to="/movies">Movies </Link>
          </div>
          <h1 className="nav_logo">NERDFLIX</h1>
        </div>
      </Router>



    </>
  );
}

export default Navibar;