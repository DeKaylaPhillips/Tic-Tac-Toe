export class BoardState {
    static cells = new Array(9).fill(''); 
    constructor() {
        this.usedCells = new Array(0);
        this.update = false;
        this.validatedMove = false;
        this.cellCombinations = {
            'A1': { 'marker': BoardState.cells[0], 'occupied': false, 'position': 0 },
            'A2': { 'marker': BoardState.cells[1], 'occupied': false, 'position': 1 },
            'A3': { 'marker': BoardState.cells[2], 'occupied': false, 'position': 2 },
            'B1': { 'marker': BoardState.cells[3], 'occupied': false, 'position': 3 },
            'B2': { 'marker': BoardState.cells[4], 'occupied': false, 'position': 4 },
            'B3': { 'marker': BoardState.cells[5], 'occupied': false, 'position': 5 },
            'C1': { 'marker': BoardState.cells[6], 'occupied': false, 'position': 6 },
            'C2': { 'marker': BoardState.cells[7], 'occupied': false, 'position': 7 },
            'C3': { 'marker': BoardState.cells[8], 'occupied': false, 'position': 8 },
        }; 
    };

    getBoardStateArray() { 
        return BoardState.cells;
    };

    getBoardStateObject() {
        return this.cellCombinations;
    };

    updateBoardStateArray(cell, playerMarker) { 
        let position = this.cellCombinations[cell].position;
        BoardState.cells[position] = playerMarker;
        this.update = true;

        return this.updateBoardStateObject(cell, playerMarker);
    }; 

    updateBoardStateObject(cell, playerMarker) {
        if (this.update) {
            this.cellCombinations[cell].marker = playerMarker;
            this.cellCombinations[cell].occupied = true;
        };
    };
};

export class BoardPrinter extends BoardState { 
    constructor(update) {
        super();
        this.update = update;
        this.line = "- - - - - - -"; 
       
    };

    print(/* take in the update status as boolean */) {
        /* evaluate the update status, and if an update has been performed, print the updated board. */
        return `  ${BoardState.cells[0]}  |  ${BoardState.cells[1]}  |  ${BoardState.cells[2]}  \n${this.line}\n  ${BoardState.cells[3]}  |  ${BoardState.cells[4]}  |  ${BoardState.cells[5]}  \n${this.line}\n  ${BoardState.cells[6]}  |  ${BoardState.cells[7]}  |  ${BoardState.cells[8]}  `;
    };
};

// remove BoardPersistence class - data to be managed in BoardState
export class BoardValidation extends BoardState { 
    constructor(cell) {
        super(cell);
        this.cell = cell
        this.errorMessage1 = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is not a valid row/column combination on the board.\n\nPlease select a valid row/column combination on the board:\n\tRows are denoted by letters A, B, & C from top to bottom.\n\tColumns are denoted by letters 1, 2, & 3 from left to right.\n\ni.e. "B3"\n` 
        this.errorMessage2 = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is occupied by the opponent player.\n\nPlease select an unoccupied position in the board.\n`
    };

    validateMoveExists() {
        return this.cellCombinations[this.cell] ? this.validateMoveAvailable(this.cell) : this.errorMessage1;
    };

    validateMoveAvailable() {
        return !this.cellCombinations[this.cell].occupied ? this.validatedMove = true : this.errorMessage2;    
    };
};


const cell1 = 'A1'
const player1 = 'X'

const validator = new BoardValidation(cell1)
validator.getBoardStateArray()
validator.getBoardStateObject()
console.log(validator.validateMoveExists() === true ? 'move exists' : 'move non-existent')
console.log(validator.validateMoveAvailable() === true ? 'move available' : 'move occupied')
console.log('check update hasn\'t been called yet --> ' + validator.update)
validator.updateBoardStateArray(cell1, player1)
console.log('check that update was called --> ' + validator.update)
console.log(validator.update === true ? validator.print())

    // validate(player, cell) {
    //     const data = this.getCell(cell)
    //     let errorMessage1 = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is not a valid row/column combination on the board.\n\nPlease select a valid row/column combination on the board:\n\tRows are denoted by letters A, B, & C from top to bottom.\n\tColumns are denoted by letters 1, 2, & 3 from left to right.\n\ni.e. "B3"\n` 
    //     let errorMessage2 = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is occupied by the opponent player.\n\nPlease select an unoccupied position in the board.\n`
        
    //     if (data && data.marker === '') {
    //         console.log(`\n${player.name} has placed their token on the board. Opponent -- select a move.\n`)
    //         this.getUpdate(player.marker, cell)

    //     } else if (!data) { 
    //         console.log(errorMessage1)
    //         console.log(this.printer.print())
            
    //         // TO-DO => will need to take in new player input, assign to a variable, and pass the variable to the selectCell method of the player class
    //     } else {
    //         console.log(errorMessage2)
    //         console.log(this.printer.print())
    //     }
    // };


// export class Player extends BoardValidation { 
//     constructor() {
//         super();
//         this.player1 = { 'name': 'Player 1', 'marker': 'X', 'move': true } // may need to initiate player one to true for new games
//         this.player2 = { 'name': 'Player 2', 'marker': 'O', 'move': false }
//     };
    
//     selectCell(cell) { 
//         if (this.player1.move) {
//             this.validate(this.player1, cell)
//             this.player1.move = false;
//             this.player2.move = true;
            
//         } else if (this.player2.move) {
//             this.validate(this.player2, cell)
//             this.player2.move = false;
//             this.player1.move = true;
//         };
//     };
// };





