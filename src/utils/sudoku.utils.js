import {makepuzzle, solvepuzzle, ratepuzzle} from 'sudoku';

export const newSudokuPuzzle = (difficulty) =>{
    let puzzle= [];
    let original=[];
    let solution=[];
    let newDifficulty;

    do {
        puzzle = makepuzzle();
        newDifficulty = ratepuzzle(puzzle, 4);
        } 
    while (newDifficulty !== Math.round(difficulty));
    
    solution = solvepuzzle(puzzle);
    original = JSON.parse(JSON.stringify(puzzle));


    return {
        difficulty: difficulty,
        currentPuzzle: puzzle,
        originalPuzzle: original,
        puzzleSolution: solution,
        pencilArrays: {},
        timeInSeconds: 0,
    };

};

export const sudokuMatch = (current, solution) => {
    if(current.length === 0) return false;
    
    if (current.length !== solution.length) return false;

    for(let i = 0; i < current.length; i++ ){
        if(current[i] !== solution[i]) return false;

    return true;
    }



}


