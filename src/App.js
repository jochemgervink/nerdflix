import Navibar from './components/Navibar/Navibar.js'
import Filterbar from './components/Filterbar/Filterbar.js'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Homepage from './components/Navibar/Homepage.js';
import Series from './components/Series/Series.js';
import Movies from './components/Movies/Movies.js';
import './App.css'


function App() {
  return (
    <div className="App">


        <Navibar />

        <Filterbar />



    </div>
  );
}

export default App;