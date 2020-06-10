import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/js/Header';
import Projects from './components/js/Projects';
import Skills from './components/js/Skills';


function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 7000);
  }, [])

  return (
    <div className="app">
      <Header />
      <p className={showContent ? 'personal-blurb top-blurb visible' : 'personal-blurb top-blurb'}>Hi, I'm Nick, a fullstack developer specializing in Node and MongoDB or PostgreSQL on the backend and React on the frontend. I also have exprerience in iOS and android develpment.</p>
      <p className={showContent ? 'personal-blurb visible' : 'personal-blurb'}>Why don't you scroll down and stay a while?</p>
      {showContent && <Projects />}
      {showContent && <Skills />}
    </div>
  );
}

export default App;
