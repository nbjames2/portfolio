import React from 'react';
import './ProjectInfoDialog.scss';

const ProjectInfoDialog = (props) => {
  return (
    <div className='info-dialog-container'>
      <div className='info-dialog-inner'>
        <div className='info-dialog-inner-inner'>
          <div className='project-title-row'>
            <h3>{props.title}</h3>
            <i className='material-icons-outlined' onClick={props.closeDialog}>close</i>
          </div>
          <p dangerouslySetInnerHTML={{ __html: props.info }} />
        </div>
      </div>
    </div>
  );
};

export { ProjectInfoDialog };
