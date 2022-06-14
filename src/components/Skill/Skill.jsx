import React from 'react';
import './Skill.scss';

const Skill = ({ title, icon }) => {
  return (
    <div className='skill-container'>
      {icon}
      {title}
    </div>
  );
};

export { Skill };
