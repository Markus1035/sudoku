import { newSudokuPuzzle, sudokuMatch } from '../../utils/sudoku.utils';

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
                pencilToggle: false,
                currentIsSolved: false,
                puzzles: newPuzzleArray,
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
                //currentIsSolved: true,
                numberSelected: null, 
                cellSelected: null,
                invalidNumberArray: [],
                puzzles
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
            const {number, cell} = action.payload;

            if(!originalPuzzle[cell]) {
                if(state.pencilIsOn){
                    if(pencilArrays[cell].includes(number)) return {...state};
                    pencilArrays[cell].push(number);
                    return {
                        ...state,
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
            const isSolved = sudokuMatch(currentPuzzle, puzzleSolution)
            //console.log('is solved? :' + isSolved );
            return {
                ...state,
                currentIsSolved: isSolved,
            }
        }
        default:
            return state;
    }
}  

export default gameReducer;

