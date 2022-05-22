const grid = document.querySelector('.grid');
const select = document.querySelector("#gridNumber");
const statusButton = document.querySelector("#statusButton");
const buttonText = {
    start: "start",
    stop: 'stop'
}

// create a grid based on passed rows and columns number
const createGrid = (rows, cols) => {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        const div = document.createElement("div");
        grid.appendChild(div).className = "grid-item";
        div.style.background = 'white'
    };
}

// handle hover effect 
const hoverHandler = (e) => {
    if (e.target.style.background === "white") {
        e.target.style.background = "blue";
    } else if (e.target.style.background === "blue") {
        e.target.style.background = "white";
    }
}
// event listener on click to start  hover effect 
const startGrid = () => {
    statusButton.addEventListener('click', (e) => {
        if (e.target.textContent === buttonText.start) {
            e.target.textContent = buttonText.stop
            grid.addEventListener('mouseover', hoverHandler)
        }
        else {
            e.target.textContent = buttonText.start
            grid.removeEventListener('mouseover', hoverHandler)
        }
    })
}

// fill grid with cells
const fillGrid = (color, columnStart, columnEnd) => {
    for (let column = columnStart; column <= columnEnd; column++) {
        grid.childNodes[column].style.background = color;
    }
}

// get the grid size 
const getGridSize = () => {
    return parseInt(select.value)
}

// fill grid with blue cells 
const fillInitialGrid = (gridSize) => {
    if (gridSize > 3) {
        fillGrid('blue', gridSize + 1, gridSize + 3)
        fillGrid('blue', gridSize * 2 + 3, gridSize * 2 + 3)
    }
    else if (gridSize === 3) {
        fillGrid('blue', gridSize, gridSize + 2)
        fillGrid('blue', gridSize * 2 + 2, gridSize * 2 + 2)
    }
    else {
        fillGrid('blue', gridSize - 1, gridSize - 1)
    }
}

// start the grid 
const initiateGrid = () => {
    statusButton.textContent = buttonText.start
    startGrid()
    createGrid(getGridSize(), getGridSize())
    select.addEventListener(('change'), () => {
        grid.innerText = ""
        createGrid(getGridSize(), getGridSize())
        fillInitialGrid(getGridSize())
        statusButton.textContent = buttonText.start
        grid.removeEventListener('mouseover', hoverHandler)
    })
    fillInitialGrid(getGridSize())
}

initiateGrid()




