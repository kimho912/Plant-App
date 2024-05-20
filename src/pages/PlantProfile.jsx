// Import using relational paths
import '../App.css';
import React, { useState } from 'react';
import { SeasonLeaves } from '../components/Leaves';
import { ProfileWarningBox } from '../components/Plant';
import { plantForum } from '../AppConfig';
import { ChatMessages, ChatInput } from '../components/CommunityForum';
import { PlantExplanation } from '../components/PlantItem'


function PlantProfile({ plantList, season, weather, setScreen, plant, setUpdatedPlantList, from }) { // passed in from App -- use {} for parameter lists
  // Write in Javascript here

  const renderPlantDetails = () => {
    return (plant.status === 'fine' || plant.added === false) ?
      <div className='plant-explanation-container'>
        <PlantExplanation requirements={plant.requirements} /></div> :
      <ProfileWarningBox plant={plant} />
  };

  const [Display, setDisplay] = useState(false)

  const handleYes = () => {
    const updatedList = plantList.map(p => {
      if (p.name === plant.name) {
        return { ...p, added: "just added" };
      }
      return p;
    });
    setUpdatedPlantList(updatedList);
    setDisplay(false);
  };
  const handleNo = () => {
    setDisplay(false);
  };

  const ConfirmationBox = () => {
    setDisplay(true);
    return (
      <div className={Display ? "confirmation-box visible" : "confirmation-box"}>
        <p>Are you sure you want to add?</p>
        <button className="yes-button" onClick={handleYes}>Yes</button>
        <button className="no-button" onClick={handleNo}>No</button>
      </div>
    );
  };

  const AddPlantButton = () => {
    return (
      <center>
        <button className="add-plant-button" onClick={ConfirmationBox}>
          ADD
        </button>
      </center>
    );
  };


  // For chatting
  const [messages, setMessages] = useState(plantForum.chat);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMessages = [...messages, { name: 'Alex', message: newMessage }];
      setMessages(newMessages);
      setNewMessage('');
    }
  };
  return (
    <div className="plant-profile page">
      <SeasonLeaves season={season} previous={"profile"} setScreen={setScreen} />
      <center>
        <img src={plant.image} alt={plant.name} style={{ width: '200px', height: '200px' }} />
        <h2 style={{ margin: '0px' }}> {plant.name} </h2>
        <p> {plant.added} </p>
      </center>
      {renderPlantDetails()}
      <div style={{ marginLeft: '20px', marginRight: '20px' }}>
        <h3><strong>Description</strong></h3>
        <p> {plant.description} </p>
        <h3><strong>What neighbors in {plantForum.location} are saying</strong></h3>
      </div>

      <ChatMessages messages={messages} />
      {plant.added ? <ChatInput newMessage={newMessage} setNewMessage={setNewMessage} sendMessage={sendMessage} />
        :
        <AddPlantButton />}
      {Display && <ConfirmationBox />}
    </div>
  );
}

export { PlantProfile };
// Use {} notation to export more than one component;
