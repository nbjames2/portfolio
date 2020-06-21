import React, { useState, useEffect } from 'react';
import ProjectInfoDialog from './ProjectInfoDialog';
import '../css/Project.scss';

export default (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    const waitTime = Math.floor(Math.random() * 1000);
    setTimeout(() => setIsVisible(true), waitTime);
  }, []);

  function openProject () {
    window.open(props.link, '_blank');
  }

  return (
    <React.Fragment>
      <div className='project-wrapper' style={{transform: isVisible ? 'translateY(0)' : 'translateY(-2000px)'}}>
        <div className='project-title-row'>
          <h3>{props.title}</h3>
          <i className='material-icons-outlined' onClick={() => setInfoOpen(true)}>info</i>
        </div>
        <div className='image-wrapper' onClick={() => openProject()}>
          <img src={props.image} alt='project screenshot' alt={'screenshot for ' + props.title}/>
          <div className='project-tech'>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      {infoOpen && <ProjectInfoDialog title={props.title} info={props.info} closeDialog={() => setInfoOpen(false)} />}
    </React.Fragment>
  );
}