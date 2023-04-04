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
};
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
        const data = this.getCell(cell)
        const errorMessage1 = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is not a valid row/column combination on the board.\n\nPlease select a valid row/column combination on the board:\n\tRows are denoted by letters A, B, & C from top to bottom.\n\tColumns are denoted by letters 1, 2, & 3 from left to right.\n\ni.e. "B3"\n` 
        const errorMessage2 = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is occupied by the opponent player.\n\nPlease select an unoccupied position in the board.\n`
        
        if (data && data.marker === '') {
            // need to send cell data to be used to update the board
            // essentially will return a display of the updated board, and then..
            // instruct the next player to select a position on the board
            // will eventually have to account for when to stop playing the game and selecting cells
            return data 
        } else if (!data) { 
            console.log(this.board.print())
            return errorMessage1
        }
        console.log(this.board.print())
        return errorMessage2 
    };
};

export class Player {
    constructor() {
        this.player1 = { 'marker': 'X', 'move': false }
        this.player2 = { 'marker': 'O', 'move': false }

        const validation = new BoardValidation()
        this.validation = validation

        const board = new BoardPrinter()
        this.board = board
    };
    
    selectCell(currentPlayer, cell) {
        this.validation.validate(cell)
        console.log(this.board.print())
    }
};

const player = new Player()
console.log(player.player1)
console.log(player.player2)
console.log(player.selectCell('player1', 'A2'))