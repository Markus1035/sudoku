import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import { increaseTimer }  from '../../redux/game/game.actions'

import './timer.styles.scss'

const Timer = ({ timeInSeconds }) => {
    const [counter,setCounter] = useState(timeInSeconds); 
    //const gameTimer = useRef(timeInSeconds)
    let minutes, seconds;
    minutes = Math.floor(counter / 60);
    seconds = Math.floor(counter - (minutes*60));
    useEffect(() => {
        setTimeout(() => {setCounter(counter + 1 )}, 1000);
            
        
        return () => {increaseTimer(counter)};
    }, [counter])

    return(
        <div className='timer'>
            <span key='min'>{`${minutes}m  :  ${seconds}s`}</span>
        </div>
)}

const mapStatetoProps = ({game}) => {
    const {puzzles, currentDifficulty} = game;
    const puzzle = puzzles[currentDifficulty];
    const {timeInSeconds} = puzzle;
    return ({
        timeInSeconds,
    })
}

const mapDispatchToProps = dispatch => ({
    increaseTimer: time => dispatch(increaseTimer(time))
})

export default connect(mapStatetoProps, mapDispatchToProps)(Timer);