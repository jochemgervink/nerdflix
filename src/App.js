import Navibar from './components/Navibar/Navibar.js'
import Filterbar from './components/Filterbar/Filterbar.js'
import Content from './components/Content/Content.js'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Homepage from './components/Navibar/Homepage.js';
import Series from './components/Series/Series.js';
import Movies from './components/Movies/Movies.js';
import './App.css'


function App() {
  return (
    <div className="App">
      <Router>


        <Navibar />

        <Filterbar />

        <Content/>

        {/* <Searchbox />

      <Sortbox />

      <Sortbox /> */}
      </Router>
    </div>
  );
}

export default App;