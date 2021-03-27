import React from 'react';
import { connect } from 'react-redux';

import { selectNumber, updateCell, clearCell } from '../../redux/game/game.actions';

import './number-selector.styles.scss'

const NumberSelector = ({selectNumber, updateCell, clearCell, numberSelected, editOnNext, cellSelected}) => {
    const handleClick = (number) => {
        selectNumber(number);
        if(editOnNext){
            if(number === 0 ){
                setTimeout(() => clearCell(cellSelected), 200)
            } else {
                setTimeout(() => updateCell(cellSelected, number), 200)
            }
            
        }         
    } 
    return(
        <div className='number-selector'>
            <span className={`number-option${(numberSelected === 1) ? ' selected-number' : ''}`} onClick={() => handleClick(1)}>1</span>
            <span className={`number-option${(numberSelected === 2) ? ' selected-number' : ''}`} onClick={() => handleClick(2)}>2</span>
            <span className={`number-option${(numberSelected === 3) ? ' selected-number' : ''}`} onClick={() => handleClick(3)}>3</span>
            <span className={`number-option${(numberSelected === 4) ? ' selected-number' : ''}`} onClick={() => handleClick(4)}>4</span>
            <span className={`number-option${(numberSelected === 5) ? ' selected-number' : ''}`} onClick={() => handleClick(5)}>5</span>
            <span className={`number-option${(numberSelected === 6) ? ' selected-number' : ''}`} onClick={() => handleClick(6)}>6</span>
            <span className={`number-option${(numberSelected === 7) ? ' selected-number' : ''}`} onClick={() => handleClick(7)}>7</span>
            <span className={`number-option${(numberSelected === 8) ? ' selected-number' : ''}`} onClick={() => handleClick(8)}>8</span>
            <span className={`number-option${(numberSelected === 9) ? ' selected-number' : ''}`} onClick={() => handleClick(9)}>9</span>
            <span className={`number-option${(numberSelected === 0) ? ' selected-number' : ''}`} onClick={() => handleClick(0)}>{'\u232B'}</span>
        </div>
)};

const mapDispatchToProps = dispatch => ({
    selectNumber: (number) => dispatch(selectNumber(number)),
    updateCell: (cell, number) => dispatch(updateCell(cell, number)),
    clearCell: (cell) => dispatch(clearCell(cell)), 
})

const mapStatetoProps = ({ game }) => {
    const { numberSelected, editOnNext, cellSelected } = game;
    return({
        numberSelected,
        editOnNext, 
        cellSelected
    })
}

export default connect(mapStatetoProps, mapDispatchToProps)(NumberSelector);