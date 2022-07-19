import React from 'react';
import './Skill.scss';
import OutsideLink from '../../util/OutsideLink';

const Skill = ({ title, icon }) => {
  return (
    <div className='skill-container' onClick={() => OutsideLink(title)}>
      {icon}
      {title}
    </div>
  );
};

export { Skill };
