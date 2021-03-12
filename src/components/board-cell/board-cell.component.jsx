import React from 'react';
import { connect } from 'react-redux'

import './board-cell.styles.scss';

const BoardCell = ({number, cell, isSelected, pencilArrays, handleClick}) => {
    
    // const handleClick = numberSelected() => {
    //     selectCell(cell);
    //                     if(numberSelected){
    //                     updateCell(cell, numberSelected)
    //                     }
    // }
    ;
    
    return(
        <div className={`board-cell ${isSelected ? 'isSelected' : ''}`} onClick={() => {
            //console.log(cell)
            handleClick(cell)}}>
            {number}
        </div>
    )
}

const mapStatetoProps = ({game}) => {
    const {puzzles, currentDifficulty} = game; 
    const pencilArrays = puzzles[currentDifficulty].pencilArrays;
    return {
        pencilArrays,
    }

}

export default connect(mapStatetoProps)(BoardCell);

