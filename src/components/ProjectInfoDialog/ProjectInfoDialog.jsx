import React from 'react';
import { createPortal } from 'react-dom';
import './ProjectInfoDialog.scss';

const ProjectInfoDialog = ({ title, info, handleCloseButton }) => {
  return createPortal(
    <div className='info-dialog-container'>
      <div className='info-dialog-inner'>
        <div className='info-dialog-inner-inner'>
          <div className='project-title-row'>
            <h3>{title}</h3>
            <i className='material-icons-outlined' onClick={handleCloseButton}>close</i>
          </div>
          <p dangerouslySetInnerHTML={{ __html: info }} />
        </div>
      </div>
    </div>,
    document.getElementById('root')
  );
};

export { ProjectInfoDialog };
