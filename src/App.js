import Navibar from './components/Navibar/Navibar.js'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Homepage from './components/Navibar/Homepage.js';
import Series from './components/Series/Series.js';
import Movies from './components/Movies/Movies.js';
import {useEffect, useState} from 'react'
import './App.css'


function App() {

  

  return (
    <div className="App">
        <Navibar />
        <Switch>

          <Route exact path="/home" component={Homepage}></Route>
          <Route path="/series" component={Series}></Route>
          <Route path="/movies" component={Movies}></Route>

        </Switch>
    </div>
  );
}

export default App;