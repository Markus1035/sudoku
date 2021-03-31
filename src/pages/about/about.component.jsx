import React from 'react';

import { ReactComponent as ReactLogo } from '../../assets/reactjs-icon.svg';
import { ReactComponent as AppEngineLogo } from '../../assets/google_appengine-icon.svg';
import { ReactComponent as ReduxLogo } from '../../assets/redux-logo.svg';
import { ReactComponent as ExpressLogo } from '../../assets/expressjs-icon.svg';

import BackButton from '../../components/back-button/back-button.component';



import './about.styles.scss'

const About = () => (
    <div className='about'>
        <BackButton className="back-button" />
        <h2>About</h2>
        <div className="contact">
            <h3>Developer: Marcel Anaya</h3>
            <a href="mailto:marcel.anaya.89@gmail.com">marcel.anaya.89@gmail.com</a>
            <br></br>
            <a href="https://github.com/Markus1035/sudoku">Git Repository</a>
        </div>
        <h3>Technilogies Applied:</h3>
        <div className="tech">
            <ReactLogo className="logo"/><span key='1' className="tech-item">ReactJS</span>
            <ReduxLogo className="logo" /><span key='2' className="tech-item">Redux</span>
            <ExpressLogo className="logo" /><span key='3' className="tech-item">Express</span>
            <AppEngineLogo className="logo"/><span key='4' className="tech-item">Google Cloud App Engine</span>
       
        </div>
        <div class="external-credit">
            <span> Leaf Vector Graphics made by </span>
            <a href="https://www.freepik.com" title="Freepik">
                Freepik
            </a> 
            <span>from</span>
            <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
            </a>
        </div>

    </div>
);

//         <h3>UI Design by Diana Muñoz</h3>        
//         <h3>marsimone22@gmail.com</h3>

export default About;