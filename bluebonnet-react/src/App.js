import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';

// Data
import { plantList,updatePlantStatus } from './AppConfig';

// Pages
import { PlantProfile } from './pages/PlantProfile';
import { SeasonInsights } from './pages/SeasonInsights';
import { Dashboard } from './pages/Dashboard';
import { PlantSearch } from './pages/PlantSearch';

function App() {
  const [index, setIndex] = useState(1); // Initial index state
  const [season, setSeason] = useState('spring');
  const [weather, setWeather] = useState({
    temperature: 96,
    precipitation: 50,
    windDirection: 'NW',
    humidity: 5,
    wind: 20
  }); // Temp hardcoded

  // Update added plants
  const [updatedPlantList, setUpdatedPlantList]= useState(
    plantList.map(plant => updatePlantStatus(plant, weather)));
  useEffect(() => {
    const newList = plantList.map(plant => updatePlantStatus(plant, weather))
    setUpdatedPlantList(newList);
  }, [weather]);
  
  // The initial selected plant
  const cilantroPlantData = updatedPlantList.find(plant => plant.name === "Cilantro");
  const [currentPlant, setCurrentPlant] = useState(cilantroPlantData);
  const [from, setFrom] = useState("dashboard");


  const styles = {
    slideContainer: {
      height: "100vh",
      WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
    }
  };

  // Mapping of screen names to indices
  const screenIndices = {
    'season-insights': 0,
    'dashboard': 1,
    'plant-profile': 2,
    'plant-search': 3
  };

  // Function to set screen based on name
  const setScreen = (screenName,plantName=null,from=null) => {
    const newIndex = screenIndices[screenName];
    if (from !== null) {
      setFrom(from);
    }
    if (plantName!== null) {
      setCurrentPlant(plantName);
    }
    if (newIndex !== undefined) {
      setIndex(newIndex);
    } else {
      console.warn('Unknown screen name:', screenName);
    }
  };


  // EITHER DISPLAYS PLANT SEARCH

  if (index === screenIndices["plant-search"]) {
    return (
      <SwipeableViews
        containerStyle={styles.slideContainer}
      >
        <PlantSearch setScreen={setScreen}/>
      </SwipeableViews>
      
    );
  }

  // OR ARRANGES OTHER VIEWS ON A SLIDER

  return (
      <SwipeableViews
        containerStyle={styles.slideContainer}
        enableMouseEvents
        index={index} // Control the current index
        onChangeIndex={setIndex} // Update index state on change
      >
        <SeasonInsights plantList={updatedPlantList} season={season} setSeason={setSeason} weather={weather} setWeather={setWeather}  setScreen={setScreen}/>
        <Dashboard plantList={updatedPlantList} season={season} setScreen={setScreen}/>
        <PlantProfile plantList={updatedPlantList} season={season} weather={weather} setScreen={setScreen} plant={currentPlant} setUpdatedPlantList={setUpdatedPlantList} from={from}/>
      </SwipeableViews>
  );
}

export default App;
