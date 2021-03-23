import React from 'react';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';

import {newGame} from '../../redux/game/game.actions';

import './start-new-game.styles.scss';

const StartNewGame = ({newGame, playerWon, currentIsSolved}) => {
    const handleClick = () => {
        newGame();
    }
    return(
        <div className='start-new-game'>
            {currentIsSolved 
            ? 
            <span onClick={() => handleClick()}>Start New Game</span> 
            : 
            null}
            {playerWon
            ?
            <h2>You Won!</h2>
            :
            null
            }
        </div>
)}

const mapStatetoProps = ({game}) => {
    const {playerWon, currentIsSolved} = game;
    return{
        playerWon,
        currentIsSolved
    }
}

const mapDispatchToProps = dispatch => ({
    newGame: () => dispatch(newGame()),
})



export default connect(mapStatetoProps, mapDispatchToProps)(StartNewGame);