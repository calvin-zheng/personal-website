import React from 'react';
import NavBar from './components/navbar'
import Greeting from './components/greeting'
import AboutMe from './components/about-me'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'
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
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
