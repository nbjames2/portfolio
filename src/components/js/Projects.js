import React from 'react';
import '../css/Projects.scss';
import Project from './Project';

export default (props) => {
  return (
    <section className='projects-container'>
      <h2 className='title'>Projects</h2>
      <div className='projects-box-wrapper'>
        <Project
          title='React Table Demo'
          description='Built using pure React without any special table libraries'
          image='/tableDemo.png'
          link='http://table-demo.bairdjames.com/'
          info='This is a simple front end only demo of a table to demonstrate my frontend React skills using:  
            <ul>
              <li>React</li>
              <li>Sass</li>
              <li>Docker</li>
            </ul>'
        />
        <Project
          title='Music Notifier'
          description='Built using Node, EJS, and PostreSQL'
          image='/musicNotifierScreenShot.png'
          link='http://music.bairdjames.com/'
          info='This app allows the user to create an account, search for bands that they like and favourite them. Anytime one of their favourited artists releases something new the user will receive an email notifying them of the new release.<br><br>Technologies used:  
            <ul>
              <li>SendGrid</li>
              <li>Spotify API</li>
              <li>Cron</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>EJS</li>
              <li>CSS3</li>
              <li>PostgreSQL</li>
              <li>Sequelize</li>
              <li>Docker</li>
            </ul>'
        />
        <Project
          title='Web Store'
          description='Build using React, React Router, Node, and MongoDB'
          image='/webstoreScreenshot.png'
          link='http://store.bairdjames.com/'
          info='This web store was built from scratch. Customers are able to build a shopping cart, sort by price or category, and pay using credit card. There is an admin back end for adding, deleting, and editing listings, as well as viewing orders and marking them as shipped.<br><br>Technologies used:
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Sass</li>
              <li>Stripe</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Docker</li>
            </ul>'
        />
        <Project
          title='Nick-Chat'
          description='Built using React, and Firebase DB and Auth'
          image='/nick-chat-screenshot.png'
          link='http://chat.bairdjames.com/'
          info='This is a simple chat app where you can log in and leave messages. If there is someone specific that you want to message you can create a private room between you and them and invite others into the room as well. All messaging has real time updates.<br><br>Technologies used:
            <ul>
              <li>React</li>
              <li>Sass</li>
              <li>Firebase DB</li>
              <li>Firebase Auth</li>
            </ul>'
        />
      </div>
    </section>
  );
}