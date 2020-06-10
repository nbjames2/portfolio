import React from 'react';
import '../css/Skills.scss';

export default (props) => {
  return (
    <section className='skills-container'>
      <h2 className='title'>Non-exhaustive List of Technologies That I Use and Have Used</h2>
      <div className='lists-wrapper'>
        <div className='technologies-list-wrapper'>
          <h3 className='title'>Front-end</h3>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>Java</li>
            <li>Objective-C</li>
          </ul>
        </div>
        <div className='technologies-list-wrapper'>
          <h3 className='title'>Back-end</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>GraphQL</li>
            <li>Apollo</li>
            <li>Sequelize</li>
            <li>Mongoose</li>
          </ul>
        </div>
        <div className='technologies-list-wrapper'>
          <h3 className='title'>DB</h3>
          <ul>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </section>
  );
}