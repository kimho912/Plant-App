// Import using relational paths
import '../App.css';
import {PlantBoxes} from '../components/PlantItem'
import {SeasonLeaves} from '../components/Leaves'


function Dashboard({plantList, season, setScreen}) { 
  // Write in Javascript here
  const user = "Alex";
  return (
    <div className="dashboard page">
      <SeasonLeaves season={season} previous={"dashboard"} setScreen={setScreen}/>
      <div className="welcome-box">
        <h2> Welcome, {user} </h2>
      </div>
      <div className="container">
        {plantList.filter(plant => plant.added !== false).map(plant => <PlantBoxes key={plant.id} plant={plant} setScreen={setScreen} />)}
      </div>
    </div>
  );
}

export {Dashboard}; 
// Use {} notation to export more than one component;
