import React from 'react';

import './sudoku-game.styles.scss';

import NumberSelector from '../../components/number-selector/number-selector.component';
import SudokuGameOptions from '../../components/sudoku-game-options/sudoku-game-options.component';
import SudokuBoard from '../../components/sudoku-board/sudoku-board.component';
import Timer from '../../components/timer/timer.component';
import BackButton from '../../components/back-button/back-button.component';
import StartNewGame from '../../components/start-new-game/start-new-game.component';

const SudokuGame = () => (
    <div className='sudoku-game'>
        <BackButton className="back-button" />
        <Timer />
        <SudokuGameOptions />
        <SudokuBoard />
        <NumberSelector />
        <StartNewGame />
    </div>
)


export default SudokuGame;