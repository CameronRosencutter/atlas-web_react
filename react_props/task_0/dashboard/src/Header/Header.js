import React from 'react';
import logo from '../assets/HL.ico';

function Header() {
  return (
    <header className="App-header">
      <div className="header">
        <img src={logo} alt="" />
        <h1 className="headertitle">School Dashboard</h1>
      </div>
    </header>
  );
}

export default Header;
