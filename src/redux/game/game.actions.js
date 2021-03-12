import GameActionTypes from './game.types';

export const newGame = () => ({
    type: GameActionTypes.NEW_GAME,
    
});

export const solveGame = () => ({
    type: GameActionTypes.SOLVE_GAME,
    
});

export const validateGame = () => ({
    type: GameActionTypes.VALIDATE_GAME,
    
});

export const resetGame = () => ({
    type: GameActionTypes.RESET_GAME,
    
});

export const changeDifficulty = newDifficulty => ({
    type: GameActionTypes.CHANGE_DIFFICULTY, 
    payload: newDifficulty,
});

export const selectNumber = (number) => {
    return({
        type: GameActionTypes.SELECT_NUMBER,
        payload: number,
    })
}


export const selectCell = cell => ({
    type: GameActionTypes.SELECT_CELL,
    payload: cell,
})

export const togglePencil = () => ({
    type: GameActionTypes.TOGGLE_PENCIL,
})


export const updateCell = (cell, number) => ({
    type: GameActionTypes.UPDATE_CELL,
    payload: {
        number, 
        cell
    } 
})

export const increaseTimer = time => ({
    type: GameActionTypes.INCREASE_TIMER,
    payload: time,
})

// export const hintRequest = () => ({
//     action: GameActionTypes.HINT_REQUEST,
// })

export const addScore = score => ({
    type: GameActionTypes.ADD_SCORE, 
    payload: score,
})

export const resetScores = () => ({
    type: GameActionTypes.RESET_SCORES,
})

export const checkSolution = () => ({
    type: GameActionTypes.CHECK_SOLUTION,
})