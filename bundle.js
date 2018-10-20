(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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
            if (itemToCheck.classList.contains('starred')) {
                element.classList.add('wrongAnswer')
                itemToCheck.classList.add('wrongAnswer')
                setTimeout(function () {
                    itemToCheck.classList.remove('wrongAnswer');
                }, 1000);
                setTimeout(function () {
                    element.classList.remove('wrongAnswer');
                }, 1000);
                return false;
            }
        }
    }

    const currentColStart = 0
    const currentColEnd = colSize

    // Check each item in the row for a star
    for (let index = currentColStart; index < currentColEnd; index++) {
        const indexToCheck = currentRow * rowSize + index + 1
        const itemToCheck = document.getElementById(indexToCheck)
        if (indexToCheck !== id) {
            if (itemToCheck.classList.contains('starred')) {
                element.classList.add('wrongAnswer')
                itemToCheck.classList.add('wrongAnswer')
                setTimeout(function () {
                    itemToCheck.classList.remove('wrongAnswer');
                }, 1000);
                setTimeout(function () {
                    element.classList.remove('wrongAnswer');
                }, 1000);
                return false
            }
        }
    }

    // Check each item in a block for a star
    let color = `td.${element.classList[3]}`
    let colorblock = document.querySelectorAll(color)
    for (let i = 0; i < colorblock.length; i++) {
        if (colorblock[i].classList.contains('starred')) {
            element.classList.add('wrongAnswer')
            colorblock[i].classList.add('wrongAnswer')
            setTimeout(function () {
                colorblock[i].classList.remove('wrongAnswer');
            }, 1000);
            setTimeout(function () {
                element.classList.remove('wrongAnswer');
            }, 1000);
            return false
        }
    }

    const topRight = document.getElementById(id - 7)
    const topLeft = document.getElementById(id - 9)
    const bottomLeft = document.getElementById(id + 7)
    const bottomRight = document.getElementById(id + 9)

    // Check the four corners for a star
    if (topRight !== null) {
        if (Number(topRight.classList[0][1]) === Number(element.classList[0][1]) - 1
            && Number(topRight.classList[1][1]) === Number(element.classList[1][1]) + 1) {
            if (topRight.classList.contains('starred')) {
                element.classList.add('wrongAnswer')
                topRight.classList.add('wrongAnswer')
                setTimeout(function () {
                    topRight.classList.remove('wrongAnswer');
                }, 1000);
                setTimeout(function () {
                    element.classList.remove('wrongAnswer');
                }, 1000);
                return false
            }
        }
    }

    if (topLeft !== null) {
        if (Number(topLeft.classList[0][1]) === Number(element.classList[0][1]) - 1
            && Number(topLeft.classList[1][1]) === Number(element.classList[1][1]) - 1) {
            if (topLeft.classList.contains('starred')) {
                element.classList.add('wrongAnswer')
                topLeft.classList.add('wrongAnswer')
                setTimeout(function () {
                    topLeft.classList.remove('wrongAnswer');
                }, 1000);
                setTimeout(function () {
                    element.classList.remove('wrongAnswer');
                }, 1000);
                return false
            }
        }
    }

    if (bottomLeft !== null) {
        if (Number(bottomLeft.classList[0][1]) === Number(element.classList[0][1]) + 1
            && Number(bottomLeft.classList[1][1]) === Number(element.classList[1][1]) - 1) {
            if (bottomLeft.classList.contains('starred')) {
                element.classList.add('wrongAnswer')
                bottomLeft.classList.add('wrongAnswer')
                setTimeout(function () {
                    bottomLeft.classList.remove('wrongAnswer');
                }, 1000);
                setTimeout(function () {
                    element.classList.remove('wrongAnswer');
                }, 1000);
                return false
            }
        }
    }

    if (bottomRight !== null) {
        if (Number(bottomRight.classList[0][1]) === Number(element.classList[0][1]) + 1
            && Number(bottomRight.classList[1][1]) === Number(element.classList[1][1]) + 1) {
            if (bottomRight.classList.contains('starred')) {
                element.classList.add('wrongAnswer')
                bottomRight.classList.add('wrongAnswer')
                setTimeout(function () {
                    bottomRight.classList.remove('wrongAnswer');
                }, 1000);
                setTimeout(function () {
                    element.classList.remove('wrongAnswer');
                }, 1000);
                return false
            }
        }
    }
    return true
}

// function that reads the puzzle and applies style specified to naked grid
let gridSubsectionBuilder = puzzle => {
    for (let color in puzzle) {
        for (let i = 0; i < puzzle[color].length; i++) {
            let target = puzzle[color][i].toString()
            document.getElementById(target).classList.add(color)
        }
    }
}

// expects a puzzle object, and the height, and width of the tested puzzle
// checks the validity of a puzzle layout with two tests
// first it checks that the right number of squares have been targeted to be placed in their subsections
// second it checks that the sum of all of the id's targeted is equal to the sum of id's in plain grid

let layoutCheck = (puzzle, columnHeight, rowWidth) => {

    let actualGridSize = 0
    let expectedGridSize = columnHeight * rowWidth

    // first test - checking the number of targeted squares against the grid size
    for (let color in puzzle) {
        actualGridSize += puzzle[color].length
    }

    // second test - checking the sum of id numbers targeted
    // part-1 - add all the numbers for a given grid size
    let expectedIDsum = 0
    for (let i = 1; i <= expectedGridSize; i++) {
        expectedIDsum += i
    }

    // part-2 - add all the numbers that have been targeted for styling
    let actualIDsum = 0
    for (let color in puzzle) {
        for (let i = 0; i < puzzle[color].length; i++) {
            actualIDsum += puzzle[color][i]
        }
    }

    // logs whether or not the tests passed
    if (expectedIDsum === actualIDsum && expectedGridSize === actualGridSize) {
    }
}

module.exports = {
    layoutCheck,
    isStarAllowed,
    gridSubsectionBuilder,
}
},{}],2:[function(require,module,exports){
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
                setTimeout (function(){
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
                }, 800)
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

let i = 0
if (localStorage.getItem('gamesWon')) {
    i = localStorage.getItem('gamesWon');
    i = Number(i);
}
document.getElementById('level').innerHTML = `Level ${i + 1}`
gridSubsectionBuilder(puzzles[i]);
},{"./functions.js":1,"./puzzles.js":3}],3:[function(require,module,exports){
const { layoutCheck } = require('./functions.js')

// layout credit: Thomas Snyder
puzzleOne = {
    red: [1, 2, 9, 10],
    blue: [5, 6, 14, 22],
    cornflowerblue: [8, 16, 24, 32],
    chartreuse: [33, 34, 26, 27],
    darkmagenta: [57, 58, 59, 50],
    forestgreen: [48, 56, 64, 63],
    orange: [53, 45, 46, 38],
    grey: [3, 4, 7, 11, 12, 13, 15, 17, 18, 19, 20, 21, 23, 25, 28, 29, 30, 31, 35, 36, 37, 39,
        40, 41, 42, 43, 44, 47, 49, 51, 52, 54, 55, 60, 61, 62]
}

// layout credit: Thomas Snyder
puzzleTwo = {
    red: [1, 2, 3, 4, 5, 6, 7, 15, 23, 31],
    blue: [8, 16, 24, 32, 40, 48, 56, 64, 63, 62, 61, 60, 59, 58, 57, 49, 41, 33, 25, 17, 9],
    cornflowerblue: [10, 11, 12, 13, 14, 22, 30, 38, 46],
    chartreuse: [28, 27, 35, 43, 44, 45],
    darkmagenta: [26, 18, 19, 20, 21],
    forestgreen: [34, 42, 50, 51],
    orange: [52, 53, 54, 55, 47, 39],
    grey: [29, 36, 37],
}

// layout credit: Thomas Snyder
puzzleThree = {
    red: [7, 8, 12, 13, 14, 15, 20, 21, 22, 28, 34, 35, 36, 37, 45, 53],
    blue: [1, 2, 3, 4, 5, 6, 9, 10],
    cornflowerblue: [16, 23, 24],
    chartreuse: [17, 18, 25, 33, 41, 42, 43],
    darkmagenta: [44, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
    forestgreen: [11, 19, 26, 27],
    orange: [38, 46, 47, 32, 40, 48],
    grey: [29, 30, 31, 39],
}

let puzzles = [puzzleOne, puzzleTwo, puzzleThree];

module.exports = {
    puzzles
}
},{"./functions.js":1}]},{},[2]);
