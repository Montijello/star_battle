(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// expects a puzzle object, and the height, and width of the tested puzzle
// checks the validity of a puzzle layout with two tests
// first it checks that the right number of squares have been targeted to be placed in their subsections
// second it checks that the sum of all of the id's targeted is equal to the sum of id's in plain grid

let layoutCheck = (puzzle, columnHeight, rowWidth) => {

    let actualGridSize = 0
    let expectedGridSize = columnHeight * rowWidth
    console.log(`Correct grid size: ${expectedGridSize}`)

    // first test - checking the number of targeted squares against the grid size
    for (let color in puzzle) {
        actualGridSize += puzzle[color].length
    }
    console.log(`Actual size: ${actualGridSize}`)


    // second test - checking the sum of id numbers targeted
    // part-1 - add all the numbers for a given grid size
    let expectedIDsum = 0
    for (let i = 1; i <= expectedGridSize; i++) {
        expectedIDsum += i
    }
    console.log(`Correct Value: ${expectedIDsum}`)

    // part-2 - add all the numbers that have been targeted for styling
    let actualIDsum = 0
    for (let color in puzzle) {
        for (let i = 0; i < puzzle[key].length; i++) {
            actualIDsum += puzzle[color][i]
        }
    }
    console.log(`Actual Value: ${actualIDsum}`)


    // console logs whether or not the tests passed
    if (expectedIDsum === actualIDsum && expectedGridSize === actualGridSize) {
        console.log('Right on the money')
    }
    else {
        console.log(`You are ${expectedIDsum - actualIDsum} off`)
    }
}












const isStarAllowed = (element) => {
    const rowSize = 8
    const colSize = 8
    const id = Number(element.id)

    const currentRow = parseInt((id - 1) / rowSize)
    const currentCol = parseInt((id - 1) % colSize)

    const currentRowStart = 0
    const currentRowEnd = rowSize

    // Check each item in the column for a star
    for (let index = currentRowStart; index < currentRowEnd; index++) {
        const indexToCheck = index * colSize + currentCol + 1
        const itemToCheck = document.getElementById(indexToCheck)
        if (indexToCheck !== id) {
            console.log(indexToCheck)
            if (itemToCheck.classList.contains('starred')) {
                return false
            }
        }
    }

    console.log('The column has passed')

    const currentColStart = 0
    const currentColEnd = colSize

    // Check each item in the row for a star
    for (let index = currentColStart; index < currentColEnd; index++) {
        const indexToCheck = currentRow * rowSize + index + 1
        const itemToCheck = document.getElementById(indexToCheck)
        if (indexToCheck !== id) {
            console.log(indexToCheck)
            if (itemToCheck.classList.contains('starred')) {
                return false
            }
        }
    }

    console.log('The row has passed')

    // //  store the row and column of current element, compare with new location, reject if off by more than one
    // const topRight = (element row - 1) * 8 + (element col + 1)
    // const topLeft = 
    // const bottomLeft = id + 7
    // const bottomRight = id + 9

    // console.log(topRight, topLeft, bottomLeft, bottomRight)

    // // The following four if statements check the four corners of the selected element
    // if (topRight < 0 && topRight < rowSize * colSize) {
    //     if (document.getElementById(topRight).classList.contains('starred')) {
    //         return false
    //     }
    // }

    // if (topLeft < 0 && topLeft < rowSize * colSize) {
    //     if (document.getElementById(topLeft).classList.contains('starred')) {
    //         return false
    //     }
    // }

    // if ( bottomLeft < 0 && bottomLeft < rowSize * colSize) {
    //     if (document.getElementById(bottomLeft).classList.contains('starred')) {
    //         return false
    //     }
    // }

    // if (document.getElementById(bottomRight).classList.contains('starred')) {
    //     return false
    // }
    // console.log('corners have passed')
    return true
}










let gridSubsectionBuilder = puzzle => {
    for (let color in puzzle) {
        for (let i = 0; i < puzzle[color].length; i++) {
            let target = puzzle[color][i].toString()
            document.getElementById(target).classList.add(color)
        }
    }
}







module.exports = {
    layoutCheck,
    isStarAllowed,
    gridSubsectionBuilder,
}
},{}],2:[function(require,module,exports){
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
},{"./functions.js":1,"./puzzles.js":3}],3:[function(require,module,exports){
const { layoutCheck } = require('./functions.js')

puzzleOne = {
    red: [1, 2, 9, 10],
    blue: [5, 6, 14, 22],
    aqua: [8, 16, 24, 32],
    chartreuse: [33, 34, 26, 27],
    darkmagenta: [57, 58, 59, 50],
    forestgreen: [48, 56, 64, 63],
    orange: [53, 45, 46, 38],
    papayawhip: [3, 4, 7, 11, 12, 13, 15, 17, 18, 19, 20, 21, 23, 25, 28, 29, 30, 31, 35, 36, 37, 39,
        40, 41, 42, 43, 44, 47, 49, 51, 52, 54, 55, 60, 61, 62]
}


// test arguments are (puzzleName, heightOfPuzzle, widthOfPuzzle)

//layoutCheck(puzzleOne, 8, 8)

module.exports = {
    puzzleOne,
    }
},{"./functions.js":1}]},{},[2]);
