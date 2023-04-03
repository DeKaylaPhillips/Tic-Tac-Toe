export class BoardAssembly { // business logic
    constructor(rows=3) {
        this.rowTotal = rows;
        this.row = "    |   |    ";
        this.line = "- - - - - - -"; 
        this.cells = new Array(9).fill('');
    }

    getRows(divider) { 
        const lineSeparator = (divider === undefined) ? `${this.line}\n` : divider;
        const arrayOfRows = new Array(this.rowTotal).fill(`${this.row}\n`);
        return arrayOfRows.join(lineSeparator);
    }
}

export class BoardPrinter extends BoardAssembly { // printing logic that inherits the cells from the board assembly class
    constructor(rows=3) {
        super(rows=3);
    }

    print() { 
       return `  ${this.cells[0]}  |  ${this.cells[1]}  |  ${this.cells[2]}  \n${this.line}\n  ${this.cells[3]}  |  ${this.cells[4]}  |  ${this.cells[5]}  \n${this.line}\n  ${this.cells[6]}  |  ${this.cells[7]}  |  ${this.cells[8]}  `;
    }
}
export class BoardPersistence extends BoardAssembly { // persistance logic
    constructor(rows=3) {
        super(rows=3)
        this.cellCombinations = {
            'A1': { 'marker': this.cells[0], 'occupied': false, 'position': 0 },
            'A2': { 'marker': this.cells[1], 'occupied': false, 'position': 1 },
            'A3': { 'marker': this.cells[2], 'occupied': false, 'position': 2 },
            'B1': { 'marker': this.cells[3], 'occupied': false, 'position': 3 },
            'B2': { 'marker': this.cells[4], 'occupied': false, 'position': 4 },
            'B3': { 'marker': this.cells[5], 'occupied': false, 'position': 5 },
            'C1': { 'marker': this.cells[6], 'occupied': false, 'position': 6 },
            'C2': { 'marker': this.cells[7], 'occupied': false, 'position': 7 },
            'C3': { 'marker': this.cells[8], 'occupied': false, 'position': 8 },
        };
    };

    search(selectedCell) {
        return this.cellCombinations[selectedCell] ? this.cellCombinations[selectedCell] : false; 
    };
};

const board = new BoardPersistence()

const selection = 'A1'
console.log(board.cellCombinations[selection].marker) // to access the marker at the cell
console.log(board.cellCombinations[selection].position) // to access the index of the cell in the array
console.log(board.cellCombinations[selection].occupied) // to access occupancy status
console.log(board.search('A1'))



// export class BoardUpdate {
//     constructor() {}

//     // class method
//         // code to execute
// }


/* 
Notes 4/3/23:
- separate the logic 
- refactor tests to accept new structure

Ticket - Accept Token
    goal: enter a token into TTT

- what does the position look like as input?
    - use rows and column combinations denoted with letters and numbers to identify and choose cells on the board
    - use an object to store the cell combinations in the board to easily access and compare them to user input?

- validation logic:
    - rows denoted by letters - A, B, C (top to bottom)
    - columns denoted by numbers - 1, 2, 3 (left to right)
    - valid row/column combinations - A1, B3, C2
    - invalid row/column combinations 
        combination NOT containing EXACTLY 1 letter --> A, B, or C
        combination NOT containing EXACTLY 1 number equal to 1, 2, or 3 
        empty string --> '' (no input)
        occupied cell (occupied cells to be stored in some data structure and checked for cell vacancy)



- how do you accept this input?
    - accept input as an argument to a function that updates the board and console message based on the validity of the input 

technical:
- user inputs position
    if VALID and AVAILABLE --> print updated board to the console; instruct next user to play
    if VALID and UNAVAILABLE --> print board without update and inform user the position chosen is occupied; try again
    if INVALID --> error: inform user of format of the position is supposed to look like
    if EMPTY STRING --> error: inform user of format of position is supposed to look like
    
*/
