/** Sudoku App
 *  <App> is at the top the tree component, and it uses the Swtich and Route components from react-router-dom to display 
 *  the correct component based no the current URL
*/

import React, { lazy, Suspense } from 'react';
import {Switch, Route} from 'react-router-dom';

import {ReactComponent as Leaf1} from './assets/leaf-1.svg';
import {ReactComponent as Leaf2} from './assets/leaf-2.svg';
import {ReactComponent as Leaf3} from './assets/leaf-3.svg';
import {ReactComponent as Leaf4} from './assets/leaf-4.svg';

import './App.css';

// import HomePage from './pages/homepage/homepage.component';
// import SudokuGame from './pages/sudoku-game/sudoku-game.component';
// import Scores from './pages/scores/scores.component';
// import About from './pages/about/about.component';

import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const SudokuGame = lazy(() => import('./pages/sudoku-game/sudoku-game.component'));
const Scores = lazy(() => import('./pages/scores/scores.component'));
const About = lazy(() => import('./pages/about/about.component'));

const App = () => {
    
    return (
        <div className='app' >
        <div className='leaves-set'>
          <Leaf1 className='leaf' id='leaf1' />
          <Leaf2 className='leaf' id='leaf2'/>
          <Leaf3 className='leaf' id='leaf3'/>
          <Leaf4 className='leaf' id='leaf4'/>
          <Leaf1 className='leaf' id='leaf5' />
          <Leaf2 className='leaf' id='leaf6'/>
          <Leaf3 className='leaf' id='leaf7'/>
          <Leaf4 className='leaf' id='leaf8'/>
        </div>
        <Switch>
          <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/sudokugame' component={SudokuGame} />
          <Route exact path='/scores' component={Scores} />
          <Route exact path='/about' component={About} />
          </Suspense>
        </Switch>
        
        </div>
      )};
  

    
    export default App;
