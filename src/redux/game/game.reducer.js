import { newSudokuPuzzle, sudokuMatch, createScoreObject } from '../../utils/sudoku.utils';

import GameActionTypes from './game.types';

import INITIAL_STATE from './game.state';


const gameReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case GameActionTypes.NEW_GAME: {
            let newPuzzle = newSudokuPuzzle(state.currentDifficulty);
            let newPuzzleArray = state.puzzles;
            newPuzzleArray[state.currentDifficulty] = newPuzzle;

            return {
                ...state,
                invalidNumberArray: [],
                numberSelected: null, 
                cellSelected: null,
                pencilIsOn: false,
                currentIsSolved: false,
                puzzles: newPuzzleArray,
                playerWon: false, 
                gameOn: true,
            };
        }
        case GameActionTypes.SOLVE_GAME:{
            const {puzzles} = state;
            const puzzle = puzzles[state.currentDifficulty];
            const solution = JSON.parse(JSON.stringify(puzzle.puzzleSolution));
            puzzle.currentPuzzle = solution;
            puzzles[state.currentDifficulty] = puzzle;
            
            return {
                ...state,
                numberSelected: null, 
                cellSelected: null,
                invalidNumberArray: [],
                puzzles,
                playerWon: false,
                currentIsSolved: true,
                gameOn: false,
            }
        }

        case GameActionTypes.VALIDATE_GAME: {
            let invalidNumberArray = [];
            const {puzzleSolution, currentPuzzle} = state.puzzles[state.currentDifficulty];

            currentPuzzle.forEach((number, index) => {
                if(!number) return
                if(number !== puzzleSolution[index]) 
                    invalidNumberArray.push(index);
            })

            return{
                ...state,
                invalidNumberArray: invalidNumberArray,
            }
        }
        case GameActionTypes.RESET_GAME: {
            let { originalPuzzle } =state.puzzles[state.currentDifficulty];
            let newPuzzleArray = JSON.parse(JSON.stringify(state.puzzles));
            newPuzzleArray[state.currentDifficulty].currentPuzzle = originalPuzzle;

            return{
                ...state,
                currentIsSolved: false, 
                playerWon: false,
                gameOn: true,
                puzzles: newPuzzleArray,
            }
        }
        case GameActionTypes.CHANGE_DIFFICULTY:{
            return {
                ...state,
                currentDifficulty: action.payload,
            }
        }
        case GameActionTypes.SELECT_NUMBER:{
            return {
                ...state,
                numberSelected: action.payload,
            }
        }
        case GameActionTypes.SELECT_CELL:{
            return{
                ...state,
                cellSelected: action.payload,
                editOnNext: true,
            }
        }
        case GameActionTypes.TOGGLE_PENCIL:{
            let newPencilState = !state.pencilIsOn;
            return {
                ...state,
                pencilIsOn: newPencilState,
            }
        }
        case GameActionTypes.UPDATE_CELL: {
            const puzzles =  JSON.parse(JSON.stringify(state.puzzles));
            const diff = state.currentDifficulty;
            const {originalPuzzle} = puzzles[diff];
            const {currentPuzzle} = puzzles[diff];
            const {pencilArrays} =  puzzles[diff];
            //console.log(currentPuzzle)
            let {number, cell} = action.payload;
            
            number = (number === 9) ? 0 : number;

            if(originalPuzzle[cell] === null) {
                if(state.pencilIsOn){
                    number = (number === 0) ? 9 : number;
                    if(!pencilArrays[cell] ){
                        pencilArrays[cell] = [];
                        
                    } 
                    if(pencilArrays[cell].includes(number)) {
                        return {...state}
                    }                    
                    pencilArrays[cell].push(number);
                    pencilArrays[cell].sort();
                    return {
                        ...state,
                        puzzles,
                    }
                } else {   
                    currentPuzzle[cell] = number;
                    return {
                        ...state,
                        puzzles,
                        numberSelected: null,
                        editOnNext: false,
                    }
                }
            }
            return{
                ...state,
            }
        }
        case GameActionTypes.UPDATE_PENCIL_ARRAYS: {
            
            
            return{
                ...state,

            }
        }

        case GameActionTypes.INCREASE_TIMER: {
            const puzzles =  JSON.parse(JSON.stringify(state.puzzles));
            const difficulty = state.currentDifficulty;
            const puzzle = puzzles[difficulty];
            puzzle.timeInSeconds = action.payload;
            return {
                ...state,
                 puzzles
            }
        }

        case GameActionTypes.CHECK_SOLUTION: {
            const puzzles =  JSON.parse(JSON.stringify(state.puzzles));
            const diff = state.currentDifficulty;
            const { puzzleSolution } = puzzles[diff];
            const { currentPuzzle  } = puzzles[diff];
            const isSolved = sudokuMatch(currentPuzzle, puzzleSolution);

            const scores = state.scores;
            
            const newTime = state.puzzles[diff].timeInSeconds;
            const newScore = createScoreObject(newTime, diff);

            const newScores = scores.concat([newScore]);

            const sortedScores = newScores.sort((current, next) => {
                if (current.time < next.time)
                    return 1
                if(current.time > next.time)
                    return -1
                return 0
            })
            console.log(sortedScores)
            //const slicedScores = sortedScores.slice(0, 10);
            

            return {
                ...state,
                currentIsSolved: isSolved,
                playerWon: isSolved,
                gameOn: !isSolved,
                invalidNumberArray: [],
                scores: sortedScores,
            }
        }
        default:
            return state;
    }
}  

export default gameReducer;

