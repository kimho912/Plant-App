import React, { useEffect } from 'react';
import CloudIcon from '../images/cloud.png';
import relocation from '../images/relocation.png';

import '../App.css';


const seasonColors = {
  spring: '#E0E1BC',
  summer: '#E9EA9E',
  fall: '#E1CEBC',
  winter: '#BCD8E1',
};

const seasons = ['spring', 'summer', 'fall', 'winter'];

const SeasonsToggle = ({ season, setSeason }) => {
  // Update the wallpapers
  useEffect(() => {
    const color = seasonColors[season];
    const classes = ['.dashboard', '.plant-profile', '.season-insights', '.plant-search'];
    classes.forEach(cls => {
      document.querySelectorAll(cls).forEach(el => {
        el.style.backgroundColor = color;
      });
    });
  }, [season]);

  const handleSliderChange = (event) => {
    const newSeason = seasons[event.target.value];
    setSeason(newSeason);
  };
  return (
    <div className="seasons-toggle">
      <input
        type="range"
        min="0"
        max="3"
        value={seasons.indexOf(season)}
        className="season-slider"
        onChange={handleSliderChange}
      />
      <div className="season-labels">
        {seasons.map((s, index) => (
          <label key={s} className={`season-label ${season === s ? 'active' : ''}`}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </label>
        ))}
      </div>
    </div>
  );
};

function WeatherInfo({weather}) {
  return (
    <div className="weather-info-container">
      <div className="weather-icon-container">
        <img src={CloudIcon} alt="Cloudy" className="weather-icon" />
        <div className="temperature">{weather.temperature}°F</div>
      </div>
      <div className="weather-details">
        <div className="location">
          <img src={relocation} alt="relocation icon"/>
          <p>Arlington</p>
        </div>
        <p>Chance of precipitation: {weather.precipitation}%</p>
        <p>Wind: {weather.wind} mph {weather.windDirection}</p>
        <p>Humidity: {weather.humidity}%</p>
      </div>
    </div>
  );
}

function WeatherForecast({weatherData}) {
  return (
    <div className="weather-forecast-container">
      {weatherData.map((slot, index) => (
        <div key={index} className="weather-slot">
          <div className="time">{slot.time}</div>
          <img src={slot.icon} alt="Weather icon" className="weather-icon" />
          <div className="temperature">{slot.temperature}°F</div>
          <div className="weather-details" style={{marginLeft: '0px'}}>
            <p>Precipitation: {slot.precipitation}</p>
            <p>Wind: {slot.wind}</p>
            <p>Humidity: {slot.humidity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export { SeasonsToggle, WeatherInfo,WeatherForecast };