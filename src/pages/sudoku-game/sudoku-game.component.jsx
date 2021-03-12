import React from 'react';

import './sudoku-game.styles.scss';

import NumberSelector from '../../components/number-selector/number-selector.component';
import SudokuGameOptions from '../../components/sudoku-game-options/sudoku-game-options.component';
import SudokuBoard from '../../components/sudoku-board/sudoku-board.component';
import Timer from '../../components/timer/timer.component';

const SudokuGame = () => (
    <div className='sudoku-game'>
        <Timer />
        <SudokuGameOptions />
        <SudokuBoard />
        <NumberSelector />
    </div>
)


export default SudokuGame;