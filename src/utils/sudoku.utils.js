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

export const difficultyMap = (difficulty) => {
    switch(difficulty){
        case 1: return('Easier')
        case 2: return ('Easy')
        case 3: return ('Medium')
        case 4: return ('Hard')
        case 5: return ('Expert')
        default: return('')
    }
}

export const createScoreObject = (time, diff) => {


            const currentDateTime = new Date(); 
            const year = currentDateTime.getFullYear();
            let month = currentDateTime.getMonth() + 1;
            let day = currentDateTime.getDay();
            let hours = currentDateTime.getHours();
            let minutes = currentDateTime.getMinutes();

            if(month < 10) month = '0' + month;
            if(day < 10) day = '0' + day;
            if(hours < 10) hours = '0' + hours;
            if(minutes < 10) minutes = '0' + minutes;

            let timeString = `${year} ${(month)} ${day} ${hours}:${minutes}`;
            let newTimeMinutes = 0;
            let newTimeSeconds = 0;

            newTimeMinutes = Math.round(time / 60);
            newTimeSeconds = time - (newTimeMinutes * 60);
            
            let newTime = `${newTimeMinutes}m ${newTimeSeconds}s`;
            let newdiff = difficultyMap(diff);



            return {
                key: null,
                date: timeString,
                time: time,
                timeString: newTime,
                difficulty: newdiff,
            }



}





