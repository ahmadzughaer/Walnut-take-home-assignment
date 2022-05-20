const grid = document.querySelector('.grid');
const select = document.querySelector("#gridNumber");
const startButton = document.querySelector("#startBtn")
let option = document.querySelector('.option')
let pickedNumber = 5;
// for (pickedNumber = 1; pickedNumber < 10; pickedNumber++) {
//     const option = document.createElement("option");
//     option.text = pickedNumber;
//     select.appendChild(option);
// } TODO: make pick mode dynamic 


const createGrid = (rows, cols) => {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let div = document.createElement("div");
        grid.appendChild(div).className = "grid-item";
        div.style.background = 'white'
    };
}

createGrid(pickedNumber, pickedNumber)

startButton.addEventListener('click', (e) => {
    grid.addEventListener('mouseover', (e) => {
        console.log(e.target)
        if (e.target.style.background == "white") {
            e.target.style.background = "blue";
        } else if (e.target.style.background == "blue") {
            e.target.style.background = "white";
        }
    })
    e.target.textContent = 'stop'
})

const gridBoard = (color, columnStart, columnEnd) => {
    let draw;
    for (let column = columnStart; column <= columnEnd; column++) {
        draw = grid.childNodes[`${column}`].style.background = color;
    }
    return draw
}
const resizeBoard = () => {
    if (pickedNumber > 2) {
        gridBoard('blue', pickedNumber + 1, pickedNumber + 3)
        gridBoard('blue', pickedNumber * 2 + 3, pickedNumber * 2 + 3)

    } else {
        gridBoard('blue', pickedNumber, pickedNumber)
    }
}
resizeBoard()

// select.addEventListener('change', (e) => {
//     pickedNumber = e.target.value
//     createGrid(pickedNumber, pickedNumber)
// }) TODO: change grid size 


