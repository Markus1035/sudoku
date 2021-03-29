import React from 'react';
import { connect } from 'react-redux'

import './board-cell.styles.scss';

const BoardCell = ({number, cell, isSelected, pencilArray, handleClick, invalid, original}) => {
    
    return(
        <div className={`board-cell${isSelected ? ' isSelected' : ''}${invalid ? ' invalid' : ''}${original ? ' original' : ''}`} onClick={() => {
            //console.log(cell)
            handleClick(cell)}}>
            <div>{number}</div>
            {(!number && pencilArray)
            ? 
            <div className='pencil-matrix'>
                {pencilArray.map(pencil => <span>{pencil}</span>)}
            </div> 
            : 
            null}
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

