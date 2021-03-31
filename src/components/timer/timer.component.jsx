import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import { increaseTimer }  from '../../redux/game/game.actions'

import './timer.styles.scss'

const Timer = ({ timeInSeconds, increaseTimer, gameOn }) => {
    const [counter,setCounter] = useState(timeInSeconds); 
    //const gameTimer = useRef(timeInSeconds)
    let minutes, seconds;
    minutes = Math.floor(counter / 60);
    seconds = Math.floor(counter - (minutes*60));
    useEffect(() => {
        setTimeout(() => {
            if(gameOn){
                setCounter(counter + 1 );
                increaseTimer(counter);
            }
            
            //console.log('seconds', counter)
        }, 1000);
        
    }, [counter, increaseTimer, gameOn])

    return(
        <div className='timer'>
            <span key='min'>{`${minutes}m  :  ${seconds}s`}</span>
        </div>
)}

const mapStatetoProps = ({game}) => {
    const {puzzles, currentDifficulty, gameOn} = game;
    const puzzle = puzzles[currentDifficulty];
    const {timeInSeconds} = puzzle;
    return ({
        timeInSeconds,
        gameOn,
    })
}

const mapDispatchToProps = dispatch => ({
    increaseTimer: time => dispatch(increaseTimer(time))
})

export default connect(mapStatetoProps, mapDispatchToProps)(Timer);