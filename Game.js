// TO-DO --> Determine if an update method is considered "business logic" or if it should exist within its own class
// TO-DO --> Incorporate validity logic into the program as a separate class
// TO-DO --> Create method that takes a selected token and returns a response to the console based on the validity of the input
// whether or not the selection is valid will determine whether the method to update the board will be called
// selection can be confirmed to exist by calling the search method in the persistence class which determines if a selected cell exists or not
// selection can be confirmed valid by creating a method using validitity logic to manage the results from the search method 
// will check if results confirm the selection exists (if a cell object is returned) or not (false is returned)
// user will be prompted on how to proceed based on the results of their selection within the interface

export class BoardAssembly { 
    constructor(rows = 3) {
        this.rowTotal = rows;
        this.row = "    |   |    ";
        this.line = "- - - - - - -";
        this.cells = new Array(9).fill('');
    };

    getRows(divider) {
        const lineSeparator = (divider === undefined) ? `${this.line}\n` : divider;
        const arrayOfRows = new Array(this.rowTotal).fill(`${this.row}\n`);
        return arrayOfRows.join(lineSeparator);
    };
};

export class BoardPrinter extends BoardAssembly { 
    constructor() {
        super();
    };

    print() {
        return `  ${this.cells[0]}  |  ${this.cells[1]}  |  ${this.cells[2]}  \n${this.line}\n  ${this.cells[3]}  |  ${this.cells[4]}  |  ${this.cells[5]}  \n${this.line}\n  ${this.cells[6]}  |  ${this.cells[7]}  |  ${this.cells[8]}  `;
    };
}
export class BoardPersistence extends BoardAssembly { 
    constructor() {
        super();
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

    getCell(cell) {
        return this.cellCombinations[cell] ? this.cellCombinations[cell] : false;
    };
};

export class BoardValidation extends BoardPersistence {
    constructor() {
        super();

        const board = new BoardPrinter()
        this.board = board
    };

    validate(cell) {
        let cellData = this.getCell(cell)

        if (!cellData) {
            return `\n--- INVALID MOVE BY PLAYER ---\n\n'${selection}' is not a valid row/column combination on the board.\n\nPlease select a valid row/column combination on the board:\n\tRows are denoted by letters A, B, & C from top to bottom.\n\tColumns are denoted by letters 1, 2, & 3 from left to right.\n\ni.e. "B3"\n`
        } else {
            return cellData
        }
    }
}

const board = new BoardValidation()
console.log(board.validate('A5'))
console.log(board.validate('A3'))
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
