const grid = document.querySelector('.grid');
const select = document.querySelector("#gridNumber");
const statusButton = document.querySelector("#statusButton");
const buttonText = {
    start: "start",
    stop: 'stop'
}

const createGrid = (rows, cols) => {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        const div = document.createElement("div");
        grid.appendChild(div).className = "grid-item";
        div.style.background = 'white'
    };
}

const hoverHandler = (e) => {
    if (e.target.style.background === "white") {
        e.target.style.background = "blue";
    } else if (e.target.style.background === "blue") {
        e.target.style.background = "white";
    }
}
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




const fillGrid = (color, columnStart, columnEnd) => {
    for (let column = columnStart; column <= columnEnd; column++) {
        grid.childNodes[column].style.background = color;
    }
}

const fillInitialGrid = (gridSize) => {
    if (gridSize > 2) {
        fillGrid('blue', gridSize + 1, gridSize + 3)
        fillGrid('blue', gridSize * 2 + 3, gridSize * 2 + 3)
    } else {
        fillGrid('blue', gridSize, gridSize)
    }
}

const getGridSize = () => {
    return parseInt(select.value, 10)
}

const initiateGrid = () => {
    statusButton.textContent = buttonText.start
    startGrid()
    createGrid(getGridSize(), getGridSize())
    fillInitialGrid(getGridSize())
    select.addEventListener(('change'), () => {
        grid.innerHTML = ""
        createGrid(getGridSize(), getGridSize())
        fillInitialGrid(getGridSize())
        statusButton.textContent = buttonText.start
        grid.removeEventListener('mouseover', hoverHandler)
    
    })
}

initiateGrid()




