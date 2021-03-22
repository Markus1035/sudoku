import React from 'react';

import BackButton from '../../components/back-button/back-button.component';

import './about.styles.scss'

const About = () => (
    <div className='about'>
        <BackButton />
        <h2>About</h2>
        <h3>Created by Marcel Anaya</h3>
        <h3>marcel.anaya.89@gmail.com</h3>
        <h3>UI Design by Diana Muñoz</h3>        
        <h3>marsimone22@gmail.com</h3>
        <h3>Applied Technilogies:</h3>
        <ul>
            <li key='1'>ReactJS</li>
            <li key='2'>Redux</li>
            <li key='3'>Express</li>
            <li key='4'>Sass</li>
            <li key='5'>Google Cloud App Engine</li>
        </ul>
        <p>This is a simple Sudoku game designed for a portfolio</p>
        
    </div>
);

export default About;