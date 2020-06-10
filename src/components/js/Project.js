import React, { useState, useEffect } from 'react';
import '../css/Project.scss';

export default (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const waitTime = Math.floor(Math.random() * 1000);
    setTimeout(() => setIsVisible(true), waitTime);
  }, []);

  function openProject () {
    window.open(props.link, '_blank');
  }

  return (
    <div className='project-wrapper' style={{transform: isVisible ? 'translateY(0)' : 'translateY(-2000px)'}} onClick={() => openProject()} alt={'screenshot for ' + props.title}>
      <img src={props.image} alt='project screenshot'/>
      <div className='project-name'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}