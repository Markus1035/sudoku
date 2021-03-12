import React from 'react';
import { connect } from 'react-redux';

import { togglePencil, resetGame, validateGame, solveGame } from '../../redux/game/game.actions';

import './sudoku-game-options.styles.scss'

const SudokuGameOptions = ({togglePencil, pencilIsOn, resetGame, validateGame, solveGame}) => (
    <div className='sudoku-game-options'>
        <span className='game-option' onClick={() => resetGame()}>Reset</span>
        <span className='game-option' onClick={() => validateGame()}>Validate</span>
        <span className='game-option' onClick={() => solveGame()}>Solve</span>
        <span className={`game-option ${pencilIsOn ? 'pencil-is-on' : ''} `} onClick={()=> togglePencil()}>{'\u270E'}</span>
    </div>
);

const mapStatetoProps = ({game}) => {
    const {pencilIsOn} = game;
    return {
        pencilIsOn
    }
}

const mapDispatchToProps = dispatch => ({
    togglePencil: () => dispatch(togglePencil()),
    resetGame: () => dispatch(resetGame()),
    validateGame: ()=> dispatch(validateGame()), 
    solveGame : ()=> dispatch(solveGame())
})

export default connect(mapStatetoProps, mapDispatchToProps)(SudokuGameOptions);