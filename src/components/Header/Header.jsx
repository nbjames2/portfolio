import React, { useState } from 'react';
import { BearSpreader, ProjectInfoDialog } from 'Components';
import './Header.scss';

const Header = (props) => {
  const [infoOpen, setInfoOpen] = useState(false);

  function goToProFile (service) {
    let url = '';
    switch (service) {
      case 'linkedIn':
        url = 'https://www.linkedin.com/in/nbairdjames';
        break;
      case 'github':
        url = 'https://github.com/nbjames2';
        break;
      default:
        break;
    }
    window.open(url, '_blank');
  }

  return (
    <>
      <header className='app-header'>
        <div className='contact-section'>
          <svg
            className='contact-icon' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'
            width='24' height='24'
            viewBox='0 0 172 172'
            style={{ fill: '#000000' }} onClick={() => goToProFile('linkedIn')}
          ><g transform=''><g fill='none' fillRule='nonzero' stroke='none' strokeWidth='1' strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit='10' strokeDasharray='' strokeDashoffset='0' fontFamily='none' fontWeight='none' fontSize='none' textAnchor='none' style={{ mixBlendMode: 'normal' }}><path d='M0,172v-172h172v172z' fill='none' /><g id='original-icon' fill='#66fcf1'><path d='M139.75,0h-107.5c-17.80469,0 -32.25,14.44531 -32.25,32.25v107.5c0,17.80469 14.44531,32.25 32.25,32.25h107.5c17.80469,0 32.25,-14.44531 32.25,-32.25v-107.5c0,-17.80469 -14.44531,-32.25 -32.25,-32.25zM53.18149,146.00361h-26.71996l-0.15504,-80.00481h26.71995zM39.14964,55.53305h-0.15505c-8.73437,0 -14.36779,-6.02103 -14.36779,-13.51502c0,-7.67488 5.81431,-13.48919 14.70373,-13.48919c8.88942,0 14.34194,5.8143 14.52283,13.48919c0,7.49399 -5.65926,13.51502 -14.70372,13.51502zM145.82272,146.00361h-26.95253v-43.46515c0,-10.51743 -2.79087,-17.67548 -12.19712,-17.67548c-7.18389,0 -11.0601,4.83233 -12.92067,9.50962c-0.69772,1.67969 -0.8786,3.97957 -0.8786,6.33113v45.29988h-27.08173l-0.15505,-80.00481h27.08173l0.15505,11.29267c3.46274,-5.34916 9.22536,-12.92067 23.02463,-12.92067c17.10697,0 29.89844,11.16346 29.89844,35.17007v46.46274z' /></g><path d='' fill='none' /></g></g>
          </svg>
          <svg
            className='contact-icon' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'
            width='24' height='24'
            viewBox='0 0 172 172'
            style={{ fill: '#000000' }} onClick={() => goToProFile('github')}
          ><g fill='none' fillRule='nonzero' stroke='none' strokeWidth='1' strokeLinecap='butt' strokeLinejoin='miter' strokeMiterlimit='10' strokeDasharray='' strokeDashoffset='0' fontFamily='none' fontWeight='none' fontSize='none' textAnchor='none' style={{ mixBlendMode: 'normal' }}><path d='M0,172v-172h172v172z' fill='none' /><g fill='#66fcf1'><path d='M61.20104,161.11584c2.44584,-1.05264 4.15896,-3.48472 4.15896,-6.31584v-18.576c0,-0.67768 0.05504,-1.38288 0.14104,-2.0984c-0.04816,0.01376 -0.09288,0.02408 -0.14104,0.0344c0,0 -10.32,0 -12.384,0c-5.16,0 -9.632,-2.064 -11.696,-6.192c-2.408,-4.472 -3.44,-12.04 -9.632,-16.168c-1.032,-0.688 -0.344,-1.72 1.72,-1.72c2.064,0.344 6.536,3.096 9.288,6.88c3.096,3.784 6.192,6.88 11.696,6.88c8.55528,0 13.1408,-0.43 15.89968,-1.9092c3.21296,-4.77816 7.66088,-8.4108 12.30832,-8.4108v-0.086c-19.49792,-0.62608 -31.95416,-7.10704 -37.754,-17.114c-12.6076,0.14448 -23.58464,1.3932 -29.84888,2.43208c-0.19952,-1.12488 -0.37152,-2.25664 -0.51944,-3.39528c6.18168,-1.01824 16.65992,-2.22568 28.7068,-2.45616c-0.38528,-0.94944 -0.71896,-1.92296 -1.00104,-2.92056c-12.07784,-0.61232 -22.50104,-0.13416 -28.16328,0.33368c-0.0688,-1.14208 -0.16168,-2.28072 -0.17544,-3.43656c5.67256,-0.4644 15.81368,-0.9288 27.58192,-0.38184c-0.27176,-1.72 -0.4472,-3.47784 -0.4472,-5.30792c0,-5.848 2.064,-12.04 5.848,-17.2c-1.72,-5.848 -4.128,-18.232 0.688,-22.704c9.288,0 15.824,4.472 18.92,7.224c5.84456,-2.41144 12.38056,-3.78744 19.60456,-3.78744c7.224,0 13.76,1.376 19.264,3.784c3.096,-2.752 9.632,-7.224 18.92,-7.224c5.16,4.816 2.408,17.2 0.688,22.704c3.784,5.16 5.848,11.008 5.504,17.2c0,1.66496 -0.1548,3.27144 -0.3784,4.84696c12.03656,-0.59168 22.45288,-0.11696 28.22176,0.35088c-0.00688,1.15928 -0.11352,2.29104 -0.17544,3.43656c-5.74824,-0.47472 -16.426,-0.9632 -28.75496,-0.30616c-0.30616,1.15584 -0.67768,2.28072 -1.118,3.3712c12.19824,0.15824 22.9276,1.33816 29.40512,2.37016c-0.14792,1.14208 -0.31992,2.27384 -0.51944,3.39528c-6.57728,-1.05264 -17.78824,-2.28416 -30.54376,-2.34608c-5.7276,9.90032 -17.9568,16.3572 -37.07288,17.11056v0.10664c8.944,0 17.2,13.416 17.2,22.704v18.576c0,2.83112 1.71312,5.2632 4.15896,6.31584c31.51384,-10.43008 54.32104,-40.15168 54.32104,-75.11584c0,-43.62608 -35.49048,-79.12 -79.12,-79.12c-43.62952,0 -79.12,35.49392 -79.12,79.12c0,34.96416 22.8072,64.68576 54.32104,75.11584z' /></g></g>
          </svg>
        </div>
        <div className='title-bar'>
          <BearSpreader />
          <span className='title-bar-piece name-fade part1'><h1>Nicholas</h1></span>
          <h1 className='title-bar-piece'>Bair</h1>
          <span className='title-bar-piece name-fade part2'><h1>d </h1></span>
          <h1 className='title-bar-piece'>Jam</h1>
          <span className='title-bar-piece name-fade part3'><h1>es</h1></span>
          <i className='material-icons-outlined' onClick={() => setInfoOpen(true)}>info</i>
          <span className='title-bar-spacer' />
        </div>
      </header>
      {infoOpen &&
        <ProjectInfoDialog
          title='About BairdJames.com'
          closeDialog={() => setInfoOpen(false)}
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

export { Header };
