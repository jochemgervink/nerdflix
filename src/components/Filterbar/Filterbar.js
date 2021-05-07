import './Filterbar.css'
import Searchbox from '../Searchbox/Searchbox.js'
import Sortbox from '../Sortbox/Sortbox.js'

const Filterbar = () => {
  return (
    <>
      <div className="bar">
        <Searchbox></Searchbox>

        <Sortbox />

        <Sortbox />
      </div>
    </>
  );
}

export default Filterbar;