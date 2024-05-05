import logo from './HL.ico';
import './App.css';

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
            <h1></h1>
          </div>
        </div>
      </header>
      <footer>
        <p>Copyright 2019 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
