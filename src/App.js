import React from 'react';
import WeatherLocation from './components/weatherLocation'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WeatherLocation></WeatherLocation>
      </header>
    </div>
  );
}

export default App;
