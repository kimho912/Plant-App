// Import using relational paths
import '../App.css';
import React from 'react';
import { SeasonsToggle,WeatherForecast,WeatherInfo } from '../components/WeatherForecast';
import {SeasonLeaves} from '../components/Leaves'
import {weatherData} from '../AppConfig';
import { InsightCards } from '../components/PlantItem';
import {BackButton} from '../components/Plant';




function SeasonInsights({plantList, season, setSeason, weather, setWeather, setScreen}) {
  // Write in Javascript here
  return (
    <div className="season-insights page">
      <BackButton setScreen={setScreen}/>
      <SeasonLeaves season={season} setScreen={setScreen} />
      <WeatherInfo weather={weather}/>
      <WeatherForecast weatherData={weatherData}/>
      <h2> Season Insights </h2>
      <SeasonsToggle season={season} setSeason={setSeason} />
      <div className="scrollable-container">
      <InsightCards plantList={plantList} season={season}/>
    </div>
    </div>
  );
}

export {SeasonInsights}; 
// Use {} notation to export more than one component;
