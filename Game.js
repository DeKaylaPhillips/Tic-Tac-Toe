export class Board {

    static cells = new Array(9).fill('')

    constructor() {}

    getBoard() {
        return Board.cells
    };
}
export class BoardAssembly { 

    static cells = new Array(9).fill(''); 

    constructor(rows = 3) {
        this.rowTotal = rows;
        this.row = "    |   |    ";
        this.line = "- - - - - - -";
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
        return `  ${BoardAssembly.cells[0]}  |  ${BoardAssembly.cells[1]}  |  ${BoardAssembly.cells[2]}  \n${this.line}\n  ${BoardAssembly.cells[3]}  |  ${BoardAssembly.cells[4]}  |  ${BoardAssembly.cells[5]}  \n${this.line}\n  ${BoardAssembly.cells[6]}  |  ${BoardAssembly.cells[7]}  |  ${BoardAssembly.cells[8]}  `;
    };
};

export class BoardPersistence extends BoardAssembly { 
    constructor() {
        super();
        this.cellCombinations = {
            'A1': { 'marker': BoardAssembly.cells[0], 'occupied': false, 'position': 0 },
            'A2': { 'marker': BoardAssembly.cells[1], 'occupied': false, 'position': 1 },
            'A3': { 'marker': BoardAssembly.cells[2], 'occupied': false, 'position': 2 },
            'B1': { 'marker': BoardAssembly.cells[3], 'occupied': false, 'position': 3 },
            'B2': { 'marker': BoardAssembly.cells[4], 'occupied': false, 'position': 4 },
            'B3': { 'marker': BoardAssembly.cells[5], 'occupied': false, 'position': 5 },
            'C1': { 'marker': BoardAssembly.cells[6], 'occupied': false, 'position': 6 },
            'C2': { 'marker': BoardAssembly.cells[7], 'occupied': false, 'position': 7 },
            'C3': { 'marker': BoardAssembly.cells[8], 'occupied': false, 'position': 8 },
        };  
        
        let printer = new BoardPrinter()
        this.printer = printer;
    };

    getCell(cell) {
        return this.cellCombinations[cell] ? this.cellCombinations[cell] : false;
    };

    getUpdate(playerMarker, cell) {
        let position = this.cellCombinations[cell].position
        this.cellCombinations[cell].marker = playerMarker
        this.cellCombinations[cell].occupied = true 
        BoardAssembly.cells[position] = playerMarker 
        console.log(this.printer.print()) 
    };
};

export class BoardValidation extends BoardPersistence { 
    constructor() {
        super();

        const printer = new BoardPrinter()
        this.printer = printer
    };

    validate(player, cell) {
        const data = this.getCell(cell)
        let errorMessage1 = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is not a valid row/column combination on the board.\n\nPlease select a valid row/column combination on the board:\n\tRows are denoted by letters A, B, & C from top to bottom.\n\tColumns are denoted by letters 1, 2, & 3 from left to right.\n\ni.e. "B3"\n` 
        let errorMessage2 = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is occupied by the opponent player.\n\nPlease select an unoccupied position in the board.\n`
        
        if (data && data.marker === '') {
            console.log(`\n${player.name} has placed their token on the board. Opponent -- select a move.\n`)
            this.getUpdate(player.marker, cell)

        } else if (!data) { 
            console.log(errorMessage1)
            console.log(this.printer.print())
            
            // TO-DO => will need to take in new player input, assign to a variable, and pass the variable to the selectCell method of the player class
        } else {
            console.log(errorMessage2)
            console.log(this.printer.print())
        }
    };
};

export class Player extends BoardValidation { 
    constructor() {
        super();
        this.player1 = { 'name': 'Player 1', 'marker': 'X', 'move': true } // may need to initiate player one to true for new games
        this.player2 = { 'name': 'Player 2', 'marker': 'O', 'move': false }
    };
    
    selectCell(cell) { 
        if (this.player1.move) {
            this.validate(this.player1, cell)
            this.player1.move = false;
            this.player2.move = true;
            
        } else if (this.player2.move) {
            this.validate(this.player2, cell)
            this.player2.move = false;
            this.player1.move = true;
        };
    };
};


const player = new Player()
player.selectCell('A1')
player.selectCell('B2')
player.selectCell('B2')



