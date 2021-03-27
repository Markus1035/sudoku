import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { newGame, clearGame } from '../../redux/game/game.actions';

import './start-new-game.styles.scss';

const StartNewGame = ({newGame, clearGame, playerWon, currentIsSolved, history}) => {
    const handleClick = () => {
        newGame();
    }
    return(
        <div className='start-new-game'>
            {currentIsSolved 
            ? 
            <>
            <span onClick={() => handleClick()}>Start New Game</span> 
            <span onClick={() => {
                history.push('/');
                clearGame();
                }} >Back to Home screen</span>
            </>
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
    clearGame: () => dispatch(clearGame()),
})



export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(StartNewGame));