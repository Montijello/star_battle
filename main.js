let starred;
let grid = clickableGrid(8, 8, function (element, row, col, index) {
    console.log("You clicked on element:", element);
    console.log("You clicked on row:", row);
    console.log("You clicked on col:", col);
    console.log("You clicked on index #:", index);

    if (element.classList.contains('starred')) {

        element.classList.remove('starred')
        element.className = 'notStarred'
        // }else if(isItAllowed()){
        //     element.classList.remove('notStarred')   
        //     element.className = 'starred'
    } else {
        element.classList.remove('notStarred')
        element.className = 'starred'
    }
});

// let isItAllowed = (element){
//     make alerts to tell you why you cant put a star there

//     does element row have starred class
//     does element column have star
//     does element index -7 have star
//     does element index -9 have star
//     does element index +7 have star
//     does element index +9 have star
// }

document.body.appendChild(grid);

function clickableGrid(rows, cols, callback) {
    let index = 0;
    let grid = document.createElement('table');
    grid.className = 'grid';
    for (let r = 0; r < rows; ++r) {
        let tr = grid.appendChild(document.createElement('tr'));
        for (let c = 0; c < cols; ++c) {
            let cell = tr.appendChild(document.createElement('td'));
            cell.className = 'notStarred'
            cell.innerHTML = ++index;
            cell.addEventListener('click', (function (element, r, c, index) {
                return function () {
                    callback(element, r, c, index);
                }
            })(cell, r, c, index), false);
        }
    }
    return grid;
}