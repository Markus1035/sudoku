/**Sudoku App
 * HomePage Component
 * Renders the home page component. it's able to dispatch a newGame action when the clicks on Start
 */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//import { ReactComponent as PlayIcon } from '../../assets/play-icon.svg';
import { ReactComponent as AboutIcon } from '../../assets/about-icon.svg';
import { ReactComponent as ScoreIcon } from '../../assets/score-icon.svg';

//import CustomButton from '../../components/custom-button/custom-button.component'; 
import DifficultySelector from '../../components/difficultySelector/difficultySelector.component';

import {newGame} from '../../redux/game/game.actions';

import './homepage.styles.scss';
import { scoreLogoStyles, aboutLogoStyles } from './homepage.styles'

const HomePage = ({newGame, gameOn, history}) => (
    <div className= 'homepage'>
        <div className='play-button' onClick={() => {
            if(!gameOn){
                newGame();
            }
            
            history.push('/sudokugame');
            }} >
            Start</div>
        <DifficultySelector />
        <div className='homepage-options'>
           <ScoreIcon style={scoreLogoStyles} onClick={() => history.push('/scores')}  />
           <AboutIcon style={aboutLogoStyles} onClick={() => history.push('/about')} />
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    newGame: () => dispatch(newGame()),
    
})

const mapStatetoProps = ({game}) => ({
    //currentDifficulty: game.currentDifficulty,
    gameOn: game.gameOn,
})

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(HomePage));

