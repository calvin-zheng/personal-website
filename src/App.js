import React from 'react';
import NavBar from './components/navbar'
import Greeting from './components/greeting'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <Greeting />
      </header>
    </div>
  );
}

export default App;
