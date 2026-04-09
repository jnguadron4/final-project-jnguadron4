import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Projects />
      </header>

      <main>
        <AboutMe />
        <Education />
        <Hobbies />
        <Skills />
      </main>
    </div>
  );
}

export default App;
