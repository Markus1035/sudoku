const scores = [];

for (let i = 0; i < 10; i++){
    scores.push({
        key: i,
        date: '---- -- -- --:--',
        time: 0,
        difficulty: '',
    })
}

const INITIAL_STATE= {
    numberSelected: null, 
    editOnNext: false,
    cellSelected: null,
    pencilIsOn: false,
    currentIsSolved: false,
    currentDifficulty: 2,
    invalidNumberArray: [],
    scores: scores,
    gameOn: true,
    puzzles: {
        0: {
            difficulty:0,
            currentPuzzle: [],
            originalPuzzle: [],
            puzzleSolution: [],
            pencilArrays: {},
            timeInSeconds: 0,
        },
        1: {
            difficulty:1,
            currentPuzzle: [],
            originalPuzzle: [],
            puzzleSolution: [],
            pencilArrays: {},
            timeInSeconds: 0,
        },
        2: {
            difficulty:2,
            currentPuzzle: [],
            originalPuzzle: [],
            puzzleSolution: [],
            pencilArrays: {},
            timeInSeconds: 0,
        },
        3:{
            difficulty:3,
            currentPuzzle: [],
            originalPuzzle: [],
            puzzleSolution: [],
            pencilArrays: {},
            timeInSeconds: 0,
        },
        4:{
            difficulty:4,
            currentPuzzle: [],
            originalPuzzle: [],
            puzzleSolution: [],
            pencilArrays: {},
            timeInSeconds: 0,
        },

    }
    
}

export default INITIAL_STATE;