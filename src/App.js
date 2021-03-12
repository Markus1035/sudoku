/** Sudoku App
 *  <App> is at the top the tree component, and it uses the Swtich and Route components from react-router-dom to display 
 *  the correct component based no the current URL
*/

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import SudokuGame from './pages/sudoku-game/sudoku-game.component';
import Scores from './pages/scores/scores.component';
import About from './pages/about/about.component';



const App = () => {
    
    return (
        <div className='app'>

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/sudokugame' component={SudokuGame} />
          <Route exact path='/scores' component={Scores} />
          <Route exact path='/about' component={About} />
        </Switch>
        
        </div>
      )};
  

    
    export default App;
