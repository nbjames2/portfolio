import React, { useState } from 'react';
import { ProjectInfoDialog } from 'Components';
import './Project.scss';

const Project = ({ link, title, image, description, info }) => {
  const [infoOpen, setInfoOpen] = useState(false);

  function openProject () {
    window.open(link, '_blank');
  }

  return (
    <>
      <div className='project-wrapper'>
        <div className='project-title-row'>
          <h3>{title}</h3>
          <i className='material-icons-outlined' onClick={() => setInfoOpen(true)}>info</i>
        </div>
        <div className='image-wrapper' onClick={() => openProject()}>
          <img src={image} alt={'screenshot for ' + title} />
          <div className='project-tech'>
            <p>{description}</p>
          </div>
        </div>
      </div>
      {infoOpen && <ProjectInfoDialog title={title} info={info} handleCloseButton={() => setInfoOpen(false)} />}
    </>
  );
};

export { Project };
