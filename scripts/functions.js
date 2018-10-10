
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