import React from 'react';
import { connect } from 'react-redux';

import './scores.styles.scss';

import BackButton from '../../components/back-button/back-button.component';

const Scores = ({ scores }) => (
    <div className='scores'>
        <BackButton />
        <div className='title'>
            <span>#</span>
            <span>Date</span>
            <span>Time</span>            
            <span>Difficulty</span>            
        </div>
        {scores.map((score, index) => (
            <div key={index} class="score-item">
                <span>{index + 1}</span>
                <span>{score.date}</span>
                <span>{score.time}</span>
                <span>{score.difficulty}</span>
            </div>
        ))}
    </div>
)

const mapStatetoProps = ({game}) => {
    const {scores} = game;
    return {
        scores
    }
}

export default connect(mapStatetoProps)(Scores);