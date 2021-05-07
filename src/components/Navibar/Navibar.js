import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Navibar.css'


const Navibar = () => {

  return (
    <>
        <div className="nav">
          <div className="nav_btns">
            <Link className="nav_btn" to="/">Homepage </Link>
            <Link className="nav_btn" to="/series">Series </Link>
            <Link className="nav_btn" to="/movies">Movies </Link>
          </div>
          <h1 className="nav_logo">NERDFLIX</h1>
        </div>
    </>
  );
}

export default Navibar;