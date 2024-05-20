// Import using relational paths
import '../App.css';
import {SearchBar,BackButton} from '../components/Plant';
// import {PlantBoxes} from '../components/Plant'

function PlantSearch({setScreen}) {
  // Write in Javascript here
  return (
    <div className="plant-search page">
      <BackButton setScreen={setScreen} />
      <h2> Plant Search </h2>
      <center>
       <SearchBar setScreen={setScreen}/>
      </center>
      
      {/* Write in XML here; use {to break out and write in JS} */}
    </div>
  );
}

export {PlantSearch}; 
// Use {} notation to export more than one component;
