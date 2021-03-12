import React from 'react';
import { connect } from 'react-redux';
import './scores.styles.scss';

const Scores = (scores) => (
    <div className='scores'>
        <div className='title'>
            <span>Date</span>
            <span>Time</span>            
            <span>Difficulty</span>            
        </div>
        {scores.map((score) => (
            <div key={score.key}>
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