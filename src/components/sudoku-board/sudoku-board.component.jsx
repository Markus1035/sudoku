import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { selectCell, updateCell, checkSolution } from '../../redux/game/game.actions'

import BoardCell from '../board-cell/board-cell.component';


import './sudoku-board.styles.scss';

const SudokuBoard = ({puzzle, cellSelected, numberSelected, selectCell, updateCell, checkSolution}) => {
    const { timeInSeconds, currentPuzzle } = puzzle;
    
    useEffect(() => {
        // console.log(timeInSeconds);
    }, [timeInSeconds] );

    const handleClick = cell => {
        selectCell(cell);

        if(numberSelected){
            updateCell(cell, numberSelected)
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
                    number={number}
                    isSelected={(cell === cellSelected) ? true : false}
                    handleClick={cell => handleClick(cell)}
                />
            ))}
        </div>
)};



const mapStatetoProps = ({game}) => {
    const {puzzles, currentDifficulty, cellSelected, numberSelected,invalidNumberArray} = game;
    return {
        puzzle: puzzles[currentDifficulty],
        cellSelected,
        numberSelected,
        currentDifficulty,
        invalidNumberArray,
    }
}

const mapDispatchToProps = dispatch => ({
    selectCell: cell => dispatch(selectCell(cell)),
    updateCell: (cell, number) => dispatch(updateCell(cell, number)),
    checkSolution: () => dispatch(checkSolution()),
})

export default connect(mapStatetoProps,mapDispatchToProps)(SudokuBoard);