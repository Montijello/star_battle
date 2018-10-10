const { isStarAllowed, gridSubsectionBuilder } = require('./functions.js')
const { puzzleOne } = require('./puzzles.js')


let grid = clickableGrid(8, 8, function (element, row, col, index) {
    // console.log("You clicked on element:", element);
    // console.log("You clicked on row:", row);
    // console.log("You clicked on col:", col);
    // console.log("You clicked on index #:", index);
    // console.log(element.id)

    // gridSubsectionBuilder(puzzleOne);


    // when clicked, first check if box is starred
    // if it is go ahead and remove star, no questions asked
    if (element.classList.contains('starred')) {
        element.classList.replace('starred', 'notStarred')

        // if there is no star, check to see if it's a legal placement
        // if it is, add one
    } else if (isStarAllowed(element)) {
        element.classList.replace('notStarred', 'starred')

        // this is what will happen if you try an illegal placement
        // it'd be good to make grid square flash red
    } else {
        alert('no go')
    }
});

document.body.appendChild(grid);

function clickableGrid(rows, cols, callback) {
    let index = 0;
    let grid = document.createElement('table');
    grid.className = 'grid';
    for (let r = 0; r < rows; ++r) {
        let tr = grid.appendChild(document.createElement('tr'));
        for (let c = 0; c < cols; ++c) {
            let cell = tr.appendChild(document.createElement('td'));
            cell.innerHTML = ++index;
            cell.id = (index);
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