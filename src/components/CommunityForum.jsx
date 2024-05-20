import React from 'react';
import '../App.css';

function ChatMessages({ messages }) {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <div key={index} className="message">
          <div className="message-avatar" />
          <div className="message-content">
            <strong>{message.name}</strong>
            <p>{message.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ChatInput({ newMessage, setNewMessage, sendMessage }) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>&#x27A4;</button>
    </div>
  );
}
export { ChatMessages, ChatInput };