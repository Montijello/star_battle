const { isStarAllowed, gridSubsectionBuilder } = require('./functions.js')
const { puzzles } = require('./puzzles.js')


let grid = clickableGrid(8, 8, function (element) {



    //  on click, check if box is starred
    //  if so remove star, no questions asked
    if (element.classList.contains('starred')) {
        element.classList.replace('starred', 'notStarred')


        // if  no star, check to see if it's a legal placement
        // if it is, add one
    } else {
        if (isStarAllowed(element)) {
            element.classList.replace('notStarred', 'starred')
            if (document.querySelectorAll('td.starred').length === 8) {
                switch (localStorage.getItem('gamesWon')) {
                    case '2':
                        localStorage.setItem('gamesWon', '0');
                        alert("You must be some kind of genius. Want to go again?")
                        window.location.reload();
                        break;
                    case '1':
                        localStorage.setItem('gamesWon', '2');
                        alert("One more to go, are you ready for it?")
                        window.location.reload();
                        break;
                    default:
                        localStorage.setItem('gamesWon', '1');
                        alert("That was the easy one, ready to step it up?")
                        window.location.reload();
                        break;
                }
            


            // get complted puzzles
            // if c
            // add i - current puzzle
            // generate new puzzle
        }
    }
}
});



// creates clickable grid as a table, appends it to the document body
// rows and columns and cells start count from 1
function clickableGrid(rows, cols, callback) {
    let index = 0;
    let grid = document.createElement('table');
    grid.className = 'grid';
    for (let r = 0; r < rows; ++r) {
        let tr = grid.appendChild(document.createElement('tr'));
        for (let c = 0; c < cols; ++c) {
            let cell = tr.appendChild(document.createElement('td'));
            cell.id = ++index;
            cell.classList.add(`r${r}`, `c${c}`, 'notStarred');
            cell.addEventListener('click', (function (element, r, c, index) {
                return function () {
                    callback(element, r, c, index);
                }
            })(cell, r, c, index), false);
        }
    }
    return grid;
}

document.body.appendChild(grid);

// function randomPuzzle(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }


// // i should equal the number of puzzles in puzzle file
//let i = randomPuzzle(puzzles.length);

let i = 0
if(localStorage.getItem('gamesWon')){
    i = localStorage.getItem('gamesWon');
    i = Number(i); 
}

gridSubsectionBuilder(puzzles[i]);
// for(let key in puzzles){
//     for(let i = 0; i < puzzles.length; i++){
//         console.log(puzzles[key][i])
//     }
// }
