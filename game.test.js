// To run tests --> $ npm test

import { BoardState, BoardAssembly, BoardPersistence, BoardPrinter, BoardValidation, Player } from './Game'

describe('BoardState Class', () => {

    const board = new BoardState();

    test('will initialize and store the state of the moves in the board in a static list', () => {
        
        const cellArr = BoardState.cells;

        expect(cellArr).toStrictEqual(expect.any(Array));
    });

    test('will initialize and store the state of the cells in the board in an object containing data about each cell', () => {

        const cellObj = board.cellCombinations;

        expect(cellObj).toStrictEqual(expect.any(Object));
    })

    test('will return the data structure responsible for storing and modifying the state of the game when the getBoard() method is called', () => {  
        
        const expectedResults = BoardState.cells

        const boardState = board.getBoardStateArray();
        
        expect(boardState).toBe(expectedResults);
    });

    test('will update the state of the game board array when the updateBoardStateArray() method is called', () => {
        
        const boardArray = BoardState.cells
        const expectedResults = ['X', '', '', '', '', '', '', '', ''];   
        
        board.updateBoardStateArray('A1', 'X');

        expect(boardArray).toStrictEqual(expectedResults);
    });

    test('will update the state of the game board object when the updateBoardStateObject() method is called', () => {
        
        const cellObject = board.cellCombinations['A1'];
        const expectedResults = { 'marker': 'X', 'occupied': true, 'position': 0 };

        board.updateBoardStateObject('A1', 'X');

        expect(cellObject).toStrictEqual(expectedResults);
    });
});

describe('Board Printer', () => {
    const board = new BoardPrinter()

    test("will return a display of a board to the console containing cell values that are able to be manipulated when the print() method is called", () => {
        
        const expectedResults = `  ${BoardState.cells[0]}  |  ${BoardState.cells[1]}  |  ${BoardState.cells[2]}  \n${board.line}\n  ${BoardState.cells[3]}  |  ${BoardState.cells[4]}  |  ${BoardState.cells[5]}  \n${board.line}\n  ${BoardState.cells[6]}  |  ${BoardState.cells[7]}  |  ${BoardState.cells[8]}  `
        
        BoardState.cells[2] == 'X'
        const formattedBoard = board.print()
        
        expect(formattedBoard).toStrictEqual(expectedResults)
    });
});

describe('Board Validation', () => {

    test('will return an error message when a player does not select a cell when the validateMoveExists() method is called', () => {
        const validator = new BoardValidation('')
        
        const noInputValidator = validator.validateMoveExists();

        expect(noInputValidator).toBe(validator.errorMessage1);
        // expect(invalidCellValidator).toBe(validator.errorMessage1);
    });

    test('will return an error message if a player selects a cell with an invalid row/col combination when the validateMoveExists() method is called', () => {
        const validator = new BoardValidation('D1')
        
        const noInputValidator = validator.validateMoveExists();

        expect(noInputValidator).toBe(validator.errorMessage1);
    });

    test('will return an error message if a player selects a taken cell on the board when the validateMoveAvailable() method is called', () => {
        
        const validator = new BoardValidation('A1')
        state.validateMoveExists()
        state.updateBoardStateArray('A1', 'X')
        console.log(state.cellCombinations)

        state.validateMoveExists('A1')
        const expectedResults = state.validateMoveAvailable()

        expect(expectedResults).toBe(validator.errorMessage2)
    });

    // test("will return an error message if an invalid row/col combination is provided when the validate() method is called", () => {
    //     // TO-DO => fix: currently not returning anything, only logging to the console due to bug with returning the error message
    //     const cell = 'A4'
    //     const errorMessage = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is not a valid row/column combination on the board.\n\nPlease select a valid row/column combination on the board:\n\tRows are denoted by letters A, B, & C from top to bottom.\n\tColumns are denoted by letters 1, 2, & 3 from left to right.\n\ni.e. "B3"\n`

    //     const results = board.validate(cell)

    //     expect(results).toBe(errorMessage)
    // });

    // test("will return an error message if the cell selected by a player is valid, but occupied by the opponent when the validate() method is called", () => {
    //     // TO-DO => fix: currently not returning anything, only logging to the console due to bug with returning the error message
    //     const cell = 'A3'
    //     const marker = 'X'
    //     const errorMessage = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is occupied by the opponent player.\n\nPlease select an unoccupied position in the board.\n`

    //     board.cellCombinations[cell].marker = marker
    //     const results = board.validate(cell)

    //     expect(results).toBe(errorMessage)
    // });
});








/*
describe('Board Assembly', () => {
    const board = new BoardAssembly()
    
    test('will display 1 row when the class is instantiated with 1 as an arg, and when getRows() method is called with no args', () => {
        
        const board = new BoardAssembly(1)
        const row = `${board.row}\n`

        const displaySingleRow = board.getRows("")

        expect(displaySingleRow).toBe(row)
    });

    test('will display 3 stacked rows without lines when the class is instantiated with no args and the getRows() method is called with an empty space as an arg', () => {
        
        const row = `${board.row}\n`
        const rows = `${row}${row}${row}`

        const threeRows = board.getRows("")

        expect(threeRows).toBe(rows)
    });

    test('will display 3 stacked rows separated by 2 dashed lines when the class is instantiated with no args and the getRows() method is called without an argument', () => {
        
        const row = `${board.row}\n`
        const line = `${board.line}\n`
        const rowsAndLines = `${row}${line}${row}${line}${row}`

        const rowsWithline = board.getRows()

        expect(rowsWithline).toBe(rowsAndLines)
    });
});
*/

/*     
describe('Player', () => {
    const player = new Player()

    test("will return an object containing data about a player's assigned marker and if that player can make moves when the getPlayer() method is called", () => {
        // TO-DO => add "name" key to the assertion
        const player1 = player.player1
        const player2 = player.player2

        expect(player1).toStrictEqual({ 'marker': 'X', 'move': false })
        expect(player2).toStrictEqual({ 'marker': 'O', 'move': false })
    });

    test("will allow a player to select a cell on the board and return an error message if an invalid row/col combination is selected when the selectCell() method is called", () => {
        // TO-DO => fix: no error message returning; only logged to console
        const player1 = player.player1
        const cell = 'A4'
        const errorMessage = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is not a valid row/column combination on the board.\n\nPlease select a valid row/column combination on the board:\n\tRows are denoted by letters A, B, & C from top to bottom.\n\tColumns are denoted by letters 1, 2, & 3 from left to right.\n\ni.e. "B3"\n`

        const results = player.selectCell(player1, cell)
        
        expect(results).toBe(errorMessage)
    });   

    test("will allow a player to select a cell on the board and return an object containing data about the cell if a valid, unoccupied row/col combination is selected when the selectCell() method is called", () => {
        // TO-DO => refactor test statement and test that the validate() method is called to validate the cell
        const player2 = player.player2
        const cell = 'A1'
        const data = { 'marker':'', 'occupied': false, 'position': 0 }

        const results = player.selectCell(player2, cell)

        expect(results).toStrictEqual(data)
    });
});

*/

