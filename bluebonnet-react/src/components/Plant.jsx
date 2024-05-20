// Import using relational paths
import '../App.css';
import { plantList } from '../AppConfig';
import vector from '../images/Vector.svg';
import React, { useState } from 'react'
import WarningIcon from '../images/warn.svg'

function PlantSearchBox({ plant, setScreen }) {
  return (
    <>
      <div className="plant-search-box" onClick={() => setScreen('plant-profile', plant,'fromSearch')}>
        <img src={plant.image} alt={plant.name} />
        <div className="plant-names">{plant.name}</div>
        <div className={plant.added ? "red-status" : "green-status"}/>
      </div>
    </>
  );
}
const SearchBar = ({ setScreen }) => {

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredplantList = searchInput.length > 0
    ? plantList.filter((plant) =>
      plant.name.toLowerCase().startsWith(searchInput.toLowerCase()))
    : plantList;

  return (
    <div>
      <input type="search" placeholder="Search a plant to add" onChange={handleChange} value={searchInput} />
      {filteredplantList.map((plant, index) => (
        <PlantSearchBox key={index} plant={plant} setScreen={setScreen} />
      ))}
    </div>
  );
};
function BackButton({ setScreen }) {
  return (
    <div className="back-button" onClick={() => setScreen("dashboard")}>
      <img src={vector} alt="Back" style={{ width: '22px', height: '22px' }} />
    </div>
  );
}

function ProfileWarningBox({ plant }) {
  return (
    <div className="warning-box">
      <img src={WarningIcon} alt="Warning" className="warning-icon" />
      <div className="warning-text">
        <strong style={{fontSize: '30px'}}><u>Caution</u></strong>
        <p>{plant.message}</p>
      </div>
      <img src={WarningIcon} alt="Warning" className="warning-icon" />
    </div>
  );
}

export { SearchBar, BackButton,ProfileWarningBox };
