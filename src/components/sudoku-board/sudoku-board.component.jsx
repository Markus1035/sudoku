import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectCell, updateCell, checkSolution, clearCell } from '../../redux/game/game.actions'

import BoardCell from '../board-cell/board-cell.component';


import './sudoku-board.styles.scss';

const SudokuBoard = ({puzzle, cellSelected, numberSelected, selectCell, updateCell, checkSolution, clearCell, invalidNumberArray, gameOn}) => {
    const { timeInSeconds, currentPuzzle, originalPuzzle, pencilArrays } = puzzle;
    
    useEffect(() => {
        // console.log(timeInSeconds);
    }, [timeInSeconds] );

    const handleClick = cell => {
        if(!gameOn) return;
        selectCell(cell);

        if(numberSelected){
            updateCell(cell, numberSelected)
        }
        if(numberSelected === 0){
            clearCell(cell);
        }
        if(!currentPuzzle.includes(null)){
            checkSolution();
        }
    }

    return(
        <div className='sudoku-board'>
            {currentPuzzle.map((number, cell) => (
                <BoardCell 
                    key={`cell-N${cell}`}
                    cell={cell} 
                    number={(number === 0) ? 9 : number}
                    isSelected={(cell === cellSelected) ? true : false}
                    handleClick={cell => handleClick(cell)}
                    invalid={(invalidNumberArray.includes(cell)) ? true : false}
                    original={(originalPuzzle[cell] !== null) ? true : false}
                    pencilArray={pencilArrays[cell]}
                />
            ))}
        </div>
)};



const mapStatetoProps = ({game}) => {
    const {puzzles, currentDifficulty, cellSelected, numberSelected,invalidNumberArray, gameOn} = game;
    return {
        puzzle: puzzles[currentDifficulty],
        cellSelected,
        numberSelected,
        currentDifficulty,
        invalidNumberArray,
        gameOn,
    }
}

const mapDispatchToProps = dispatch => ({
    selectCell: cell => dispatch(selectCell(cell)),
    updateCell: (cell, number) => dispatch(updateCell(cell, number)),
    checkSolution: () => dispatch(checkSolution()),
    clearCell: cell => dispatch(clearCell(cell)),
})

export default connect(mapStatetoProps,mapDispatchToProps)(SudokuBoard);