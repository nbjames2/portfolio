import React from 'react';
import '../css/Projects.scss';
import Project from './Project';

export default (props) => {
  return (
    <section className='projects-container'>
      <h2 className='title'>Projects</h2>
      <div className='projects-box-wrapper'>
        <Project title='Music Notifier' description='Built using Node, EJS, and PostreSQL' image='/musicNotifierScreenShot.png' link='http://music.bairdjames.com/' />
        <Project title='Webstore' description='Build using React, React Router, Node, and MongoDB' image='/logo192.png' link='http://store.bairdjames.com/' />
        <Project title='Nick-Chat' description='Built using React, and Firebase DB and Auth' image='/nick-chat-screenshot.png' link='http://chat.bairdjames.com/' />
      </div>
    </section>
  );
}