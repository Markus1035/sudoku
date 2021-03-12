/**Sudoku App
 * DifficultySelector Component
 * It displays the current difficulty by reading if from the Store, and renders two buttons to allow the user to change it
 * It then dispatches the changeDifficulty action to update the Store
 */

import React from 'react';
import {connect} from 'react-redux'
import {changeDifficulty} from '../../redux/game/game.actions';

import './difficultySelector.styles.scss';

const difficultyMap = (difficulty) => {
    switch(difficulty){
        case 1: return('Easier')
        case 2: return ('Easy')
        case 3: return ('Medium')
        case 4: return ('Hard')
        case 5: return ('Expert')
        default: return('')
    }
}

const DifficultySelector = ({currentDifficulty, changeDifficulty}) => (
    <div className='difficulty-selector'>
        <button onClick={() => {
            if(currentDifficulty > 1) {changeDifficulty(currentDifficulty - 1)}
        }} >{'\u003C'}</button>
        <h1 >{difficultyMap(currentDifficulty)}</h1>
        <button onClick={() => {
            if(currentDifficulty < 5) {changeDifficulty(currentDifficulty + 1)}
        }} >{'\u003E'}</button>
    </div>
)

const mapDispatchToProps = dispatch => ({
    changeDifficulty: newDifficulty => dispatch(changeDifficulty(newDifficulty))
})

const mapStatetoProps = ({game}) => ({
    currentDifficulty: game.currentDifficulty,
})

export default connect(mapStatetoProps,mapDispatchToProps)(DifficultySelector);