import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useAppDispatch, useAppSelector } from './hooks';
import { toggleTheme } from './themeSlice';

function App() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.setAttribute('data-theme', mode);
    window.localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="theme-toggle"
          aria-label="Toggle dark mode"
          aria-pressed={mode === 'dark'}
          onClick={() => dispatch(toggleTheme())}
        >
          Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Building practical full-stack projects with React, TypeScript, and Node.js.
        </p>
        <a
          className="App-link"
          href="https://module-7-assignment-deploy-jnguadron4-2.onrender.com/api/data"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Live Project Data API
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
