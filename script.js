const SIZE = 9;
const board = document.getElementById("sudoku-board");

/* Create Sudoku Grid */
for (let i = 0; i < SIZE; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < SIZE; j++) {
        const cell = document.createElement("td");
        const input = document.createElement("input");
        input.type = "number";
        input.min = "1";
        input.max = "9";
        cell.appendChild(input);
        row.appendChild(cell);
    }
    board.appendChild(row);
}

/* Read board from UI */
function getBoard() {
    let grid = [];
    for (let i = 0; i < SIZE; i++) {
        grid[i] = [];
        for (let j = 0; j < SIZE; j++) {
            let value = board.rows[i].cells[j].firstChild.value;
            grid[i][j] = value === "" ? 0 : parseInt(value);
        }
    }
    return grid;
}

/* Set board to UI */
function setBoard(grid) {
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            board.rows[i].cells[j].firstChild.value =
                grid[i][j] === 0 ? "" : grid[i][j];
        }
    }
}

/* Solve Button */
function solveSudokuUI() {
    let grid = getBoard();
    if (solveSudoku(grid)) {
        setBoard(grid);
        alert("Sudoku Solved Successfully!");
    } else {
        alert("No solution exists.");
    }
}

/* Reset Button */
function resetBoard() {
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            board.rows[i].cells[j].firstChild.value = "";
        }
    }
}

/* Load Sample Inputs */
function loadSample(sampleNumber) {

    let sampleBoard;

    if (sampleNumber === 1) {
        // Sample 1: Standard Valid Sudoku
        sampleBoard = [
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ];
    } 
    else if (sampleNumber === 2) {
        // Sample 2: Easy Sudoku
        sampleBoard = [
            [0, 0, 6, 0, 0, 8, 0, 0, 0],
            [5, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 8, 7, 0, 0, 0, 0, 3, 1],
            [0, 0, 3, 0, 1, 0, 0, 8, 0],
            [9, 0, 0, 8, 6, 3, 0, 0, 5],
            [0, 5, 0, 0, 9, 0, 6, 0, 0],
            [1, 3, 0, 0, 0, 0, 2, 5, 0],
            [0, 0, 0, 0, 0, 0, 0, 7, 4],
            [0, 0, 5, 2, 0, 6, 3, 0, 0]
        ];
    } 
    else if (sampleNumber === 3) {
        // Sample 3: Invalid Sudoku (No Solution)
        sampleBoard = [
            [5, 5, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
        ];
    }

    setBoard(sampleBoard);
}

/* Backtracking Algorithm */
function solveSudoku(grid) {
    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            if (grid[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(grid, row, col, num)) {
                        grid[row][col] = num;
                        if (solveSudoku(grid)) return true;
                        grid[row][col] = 0; // backtrack
                    }
                }
                return false;
            }
        }
    }
    return true;
}

/* Check validity */
function isValid(grid, row, col, num) {

    // Row check
    for (let x = 0; x < SIZE; x++) {
        if (grid[row][x] === num) return false;
    }

    // Column check
    for (let x = 0; x < SIZE; x++) {
        if (grid[x][col] === num) return false;
    }

    // 3x3 subgrid check
    let startRow = row - row % 3;
    let startCol = col - col % 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[startRow + i][startCol + j] === num) return false;
        }
    }

    return true;
}
