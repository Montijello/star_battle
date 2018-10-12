const { layoutCheck } = require('./functions.js')

// credit: Thomas Snyder
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

// credit: Thomas Snyder
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

// credit: Thomas Snyder
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



// the layoutCheck parameters are (puzzleName, heightOfPuzzle, widthOfPuzzle)
// layoutCheck(puzzleThree, 8, 8)

module.exports = {
    puzzles
}