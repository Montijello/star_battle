const { layoutCheck } = require('./functions.js')

puzzleOne = {
    red: [1, 2, 9, 10],
    blue: [5, 6, 14, 22],
    yellow: [8, 16, 24, 32],
    chartreuse: [33, 34, 26, 27],
    darkmagenta: [57, 58, 59, 50],
    forestgreen: [48, 56, 64, 63],
    orange: [53, 45, 46, 38],
    papayawhip: [3, 4, 7, 11, 12, 13, 15, 17, 18, 19, 20, 21, 23, 25, 28, 29, 30, 31, 35, 36, 37, 39,
        40, 41, 42, 43, 44, 47, 49, 51, 52, 54, 55, 60, 61, 62]
}


// the layoutCheck args are (puzzleName, heightOfPuzzle, widthOfPuzzle)
//layoutCheck(puzzleOne, 8, 8)

module.exports = {
    puzzleOne,
    }