import React, { useState } from 'react';
import { ProjectInfoDialog } from 'Components';
import './Name.scss';

const Name = ({ hover }) => {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <div className='name-container'>
        <span className={hover ? 'title-bar-piece name-fade hover part1' : 'title-bar-piece name-fade no-hover part1'}><h1>Nicholas</h1></span>
        <h1 className='title-bar-piece'>Bair</h1>
        <span className={hover ? 'title-bar-piece name-fade hover part2' : 'title-bar-piece name-fade no-hover part2'}><h1>d </h1></span>
        <h1 className='title-bar-piece'>Jam</h1>
        <span className={hover ? 'title-bar-piece name-fade hover part3' : 'title-bar-piece name-fade no-hover part3'}><h1>es</h1></span>
        <i className='material-icons-outlined' onClick={() => setInfoOpen(true)}>info</i>
      </div>
      {infoOpen &&
        <ProjectInfoDialog
          title='About BairdJames.com'
          handleCloseButton={() => setInfoOpen(false)}
          info="This site has been lovingly crafted using React and Docker. A Dockerized Nginx reverse proxy server is used to direct traffic between this site and the projects listed which were all bundled together with Docker-Compose. All animations were done with a mix of SVG and CSS. SVG's were created using Inkscape.<br><br>Technologies used:
            <ul>
              <li>React</li>
              <li>Sass</li>
              <li>Docker</li>
              <li>Docker-Compose</li>
              <li>Nginx</li>
            </ul>"
        />}
    </>
  );
};

export { Name };
