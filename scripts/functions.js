
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
            if (itemToCheck.classList.contains('starred')) {
                return false
            }
        }
    }

    console.log('The row has passed')


    // Check each item in a block for a star
    let color = `td.${element.classList[3]}`
    let colorblock = document.querySelectorAll(color)
    for (let i = 0; i < colorblock.length; i++) {
        if (colorblock[i].classList.contains('starred')) {
            return false
        }
    }

    console.log('The color has passed')




  
    const topRight = document.getElementById(id - 7)
    const topLeft = document.getElementById(id - 8)
    const bottomLeft = document.getElementById(id + 7)
    const bottomRight = document.getElementById(id + 9)
   
    // const topLeft = (element row - 1) * 8 + (element col - 1)
    // const row = "classList[0][1]"
    // const col = "classList[1][1]"



    // Check the four corners for a star
    if(topRight !== null){
    if (Number(topRight.classList[0][1]) === Number(element.classList[0][1]) - 1
        && Number(topRight.classList[1][1]) === Number(element.classList[1][1]) + 1) {
            if (topRight.classList.contains('starred')) {
                return false
            }
    }
}


    if(topLeft !== null){
    if (Number(topLeft.classList[0][1]) === Number(element.classList[0][1]) - 1
        && Number(topLeft.classList[1][1]) === Number(element.classList[1][1]) - 1) {
            if (topLeft.classList.contains('starred')) {
                return false
            }
    }
}


    if(bottomLeft !== null){
    if (Number(bottomLeft.classList[0][1]) === Number(element.classList[0][1]) + 1
        && Number(bottomLeft.classList[1][1]) === Number(element.classList[1][1]) - 1) {
            if (bottomLeft.classList.contains('starred')) {
                return false
            }
    }
}

    if(bottomRight !== null){
    if (Number(bottomRight.classList[0][1]) === Number(element.classList[0][1]) + 1
        && Number(bottomRight.classList[1][1]) === Number(element.classList[1][1]) + 1) {
            if (bottomRight.classList.contains('starred')) {
                return false
            }
    }
}
    
    console.log('The corners have passed');
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
        for (let i = 0; i < puzzle[color].length; i++) {
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







module.exports = {
    layoutCheck,
    isStarAllowed,
    gridSubsectionBuilder,
}