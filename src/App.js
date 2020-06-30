import React from 'react';
import NavBar from './components/navbar'
import Greeting from './components/greeting'
import AboutMe from './components/about-me'
import Experience from './components/experience'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <Greeting />
      </header>
        <AboutMe />
        <Experience />
    </div>
  );
}

export default App;
