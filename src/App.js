import React from 'react';
import AppHeader from './AppHeader';
import AppContents from './AppContents';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="AppHeader"><AppHeader /></div>
      <div className="AppContents"><AppContents /></div>
    </div>
  );
}

export default App;
