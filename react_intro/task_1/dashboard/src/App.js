import React from 'react';
import logo from './HL.ico';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';
import Notifications from './Notifications'; // Import the Notifications component

function App() {
  return (
    <div className="App">
      <Notifications /> {/* Render Notifications component here */}
      <header className="App-header">
        <div className="header">
          <img src={logo} alt="" />
          <h1 className="headertitle">School Dashboard</h1>
        </div>
        <div className="loginbox">
          <div className="infobox">
            <h1></h1>
          </div>
        </div>
      </header>
      <footer>
        <p>{getFullYear()} - {getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;
