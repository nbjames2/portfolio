import React from 'react';
import './App.scss';
import { Header, ProjectsContainer, Skills } from 'Components';

function App () {
  return (
    <div className='app'>
      <Header />
      <p className='personal-blurb top-blurb visible'>Hi, I'm Nick, a fullstack developer specializing in Node and MongoDB or PostgreSQL on the backend and React on the frontend. I also have exprerience in iOS and android develpment.</p>
      <p className='personal-blurb visible'>Why don't you scroll down and stay a while?</p>
      <ProjectsContainer />
      <Skills />
    </div>
  );
}

export default App;
