import React from "react";
import './App.css';
import Notifications from "../Notifications/Notifications.js";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;