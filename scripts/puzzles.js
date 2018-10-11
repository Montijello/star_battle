const { layoutCheck } = require('./functions.js')

// by drsudoku (Thomas Snyder) gmpuzzles.com
puzzleOne = {
    red: [1, 2, 9, 10],
    blue: [5, 6, 14, 22],
    cornflowerblue: [8, 16, 24, 32],
    chartreuse: [33, 34, 26, 27],
    darkmagenta: [57, 58, 59, 50],
    forestgreen: [48, 56, 64, 63],
    orange: [53, 45, 46, 38],
    whitesmoke: [3, 4, 7, 11, 12, 13, 15, 17, 18, 19, 20, 21, 23, 25, 28, 29, 30, 31, 35, 36, 37, 39,
        40, 41, 42, 43, 44, 47, 49, 51, 52, 54, 55, 60, 61, 62]
}

// by drsudoku (Thomas Snyder) gmpuzzles.com
puzzleTwo = {
    red: [1, 2, 3, 4, 5, 6, 7, 15, 23, 31],
    blue: [8, 16, 24, 32, 40, 48, 56, 64, 63, 62, 61, 60, 59, 58, 57, 49, 41, 33, 25, 17, 9],
    cornflowerblue: [10, 11, 12, 13, 14, 22, 30, 38, 46],
    chartreuse: [28, 27, 35, 43, 44, 45],
    darkmagenta: [26, 18, 19, 20, 21],
    forestgreen: [34, 42, 50, 51],
    orange: [52, 53, 54, 55, 47, 39],
    whitesmoke: [29, 36, 37],
}


// the layoutCheck args are (puzzleName, heightOfPuzzle, widthOfPuzzle)
// layoutCheck(puzzleTwo, 8, 8)

module.exports = {
    puzzleOne, puzzleTwo
}