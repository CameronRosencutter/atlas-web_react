import React from 'react';
import logo from './HL.ico';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';
import Notifications from './Notifications'; // Import the Notifications component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <img src={logo} alt="" />
          <h1 className="headertitle">School Dashboard</h1>
        </div>
        <div className="loginbox">
          <div className="infobox">
          <h1>Login to access the full dashboard</h1>
            <form>
              <div className='emailbox'>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className='passwordbox'>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit">OK</button>
            </form>
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
