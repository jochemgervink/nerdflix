import './Filterbar.css'
import Searchbox from '../Searchbox/Searchbox.js'
import Sortbox from '../Sortbox/Sortbox.js'
import { useEffect, useState } from 'react'
const Filterbar = () => {

  
  return (
    <>
      <div className="bar">
        <Searchbox>

        </Searchbox>

        <Sortbox />

        <Sortbox />
      </div>
    </>
  );
}

export default Filterbar;