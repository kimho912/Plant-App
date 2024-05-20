// Import using relational paths
import '../App.css';
import React from 'react';

import Sun from '../images/sun.svg';
import Water from '../images/water.svg';

function PlantBoxes({ plant, setScreen }) {
  return (
    <div className="box">
      <IndicatorBox plant={plant} />
      <PlantBox plant={plant} setScreen={setScreen} />
      <PlantExplanation requirements={plant.requirements} />
    </div>
  );
}
function IndicatorBox({ plant }) {
  return (plant.status === "fine") ? (
    <img src={plant.icon} className="fine-icon" alt="Fine" />
  ) : (
    <div className="indicator-box">
      <img src={plant.icon} className="indicator-icon" alt="Weather Warning" />
    </div>
  );
}
function PlantExplanation({ requirements }) {
  return (
    <>
      <div className="explanation-box">
        <img src={Sun} alt="Sun" className="explanation-icon" />
        <div className="explanation-text">{requirements.sun}</div>
      </div>
      <div className="explanation-box">
        <img src={Water} alt="Water" className="explanation-icon" />
        <div className="explanation-text">{requirements.water}</div>
      </div>
    </>
  );
}
function PlantBox({ plant, setScreen }) {
  return (
    <>
      <div className="inner-box" onClick={() => setScreen('plant-profile', plant)}>
        <img src={plant.image} alt={plant.name} />
      </div>
      <div className="plant-name">{plant.name}</div>
    </>
  );
}
function InsightCards({ plantList, season }) {
  return (
    <>
      {plantList.map((plant, index) => (
        <div key={index} className="insight-card">
          <div className="insight-left">
            <img src={plant.image} alt={plant.name} className="insight-image" />
            <div className="insight-name">{plant.name}</div>
          </div>
          <div className="insight-right">
            {season === 'summer' && (
              <>
                <img src={plant.season.summerIcon} alt="Summer Care Icon" className="insight-icon" />
                <p>{plant.season.summerMessage}</p>
              </>
            )}
            {season === 'spring' && (
              <>
                <img src={plant.season.springIcon} alt="Spring Care Icon" className="insight-icon" />
                <p>{plant.season.springMessage}</p>
              </>
            )}
            {season === 'fall' && (
              <>
                <img src={plant.season.fallIcon} alt="Fall Care Icon" className="insight-icon" />
                <p>{plant.season.fallMessage}</p>
              </>
            )}
            {season === 'winter' && (
              <>
                <img src={plant.season.winterIcon} alt="Winter Care Icon" className="insight-icon" />
                <p>{plant.season.winterMessage}</p>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export { PlantBoxes, IndicatorBox, PlantExplanation, PlantBox, InsightCards };
// // Use {} notation to export more than one component;