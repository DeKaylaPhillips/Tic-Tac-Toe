// To run tests --> $ npm test

import { BoardAssembly, BoardPersistence, BoardPrinter, BoardValidation, Player } from './Game'

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


describe('Board Printer', () => {
    const board = new BoardPrinter()

    test("will return a display of a board to the console containing cell values that are able to be manipulated when the print() method is called", () => {
        
        const cells = board.cells
        const line = board.line
        const expectedBoard = `  ${cells[0]}  |  ${cells[1]}  |  ${cells[2]}  \n${line}\n  ${cells[3]}  |  ${cells[4]}  |  ${cells[5]}  \n${line}\n  ${cells[6]}  |  ${cells[7]}  |  ${cells[8]}  `

        const displayBoard = board.print()

        expect(displayBoard).toStrictEqual(expectedBoard)
    });
});

describe('Board Persistence', () => {
    const board = new BoardPersistence()

    test("contains a data structure that will allow row/column combinations and their data to be accessed when a valid cell is selected on the board", () => {
        
        const cells = board.cellCombinations
        const validCell = 'A3'
        const invalidCell = 'D4'

        const results1 = cells[validCell] ? true : false
        const results2 = cells[invalidCell] ? true : false

        expect(results1).toBeTruthy()
        expect(results2).toBeFalsy()
    });

    test("will return a data structure containing information about a cell only if a valid cell combination is passed to the getCell() method", () => {
        
        // valid cells
        const results1 = board.getCell('A3')
        // invalid cells
        const results2 = board.getCell('')
        const results3 = board.getCell()
        const results4 = board.getCell('D2')

        expect(results1).toStrictEqual({ 'marker': '', 'occupied': false, 'position': 2 })
        expect(results2).toBeFalsy()
        expect(results3).toBeFalsy()
        expect(results4).toBeFalsy()
    });
});

describe('Board Validation', () => {
    const board = new BoardValidation()
    
    test("will return an object containing data about the cell if a valid cell is selected by a player when the validate() method is called", () => {
        
        const cell = 'A3'
        
        const results = board.validate(cell)

        expect(results).toStrictEqual({ 'marker': '', 'occupied': false, 'position': 2 })
    });

    test("will return an error message if an invalid row/col combination is provided when the validate() method is called", () => {
        
        const cell = 'A4'
        const errorMessage = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is not a valid row/column combination on the board.\n\nPlease select a valid row/column combination on the board:\n\tRows are denoted by letters A, B, & C from top to bottom.\n\tColumns are denoted by letters 1, 2, & 3 from left to right.\n\ni.e. "B3"\n`

        const results = board.validate(cell)

        expect(results).toBe(errorMessage)
    });

    test("will return an error message if the cell selected by a player is valid, but occupied by the opponent when the validate() method is called", () => {
        
        const cell = 'A3'
        const marker = 'X'
        const errorMessage = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is occupied by the opponent player.\n\nPlease select an unoccupied position in the board.\n`

        board.cellCombinations[cell].marker = marker
        const results = board.validate(cell)

        expect(results).toBe(errorMessage)
    });
});
        
       
describe('Player', () => {
    const player = new Player()

    test("will return an object containing data about a player's assigned marker and if that player can make moves when the getPlayer() method is called", () => {
        
        const player1 = player.player1
        const player2 = player.player2

        expect(player1).toStrictEqual({ 'marker': 'X', 'move': false })
        expect(player2).toStrictEqual({ 'marker': 'O', 'move': false })
    });

    test("will allow a player to select a cell on the board and return an error message if an invalid row/col combination is selected when the selectCell() method is called", () => {
        
        const player1 = player.player1
        const cell = 'A4'
        const errorMessage = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is not a valid row/column combination on the board.\n\nPlease select a valid row/column combination on the board:\n\tRows are denoted by letters A, B, & C from top to bottom.\n\tColumns are denoted by letters 1, 2, & 3 from left to right.\n\ni.e. "B3"\n`

        const results = player.selectCell(player1, cell)
        
        expect(results).toBe(errorMessage)
    });   

    test("will allow a player to select a cell on the board and return an object containing data about the cell if a valid, unoccupied row/col combination is selected when the selectCell() method is called", () => {

        const player2 = player.player2
        const cell = 'A1'
        const data = { 'marker':'', 'occupied': false, 'position': 0 }

        const results = player.selectCell(player2, cell)

        expect(results).toBe(data)
    })
});
/*
--> a method to validate a user's selected cell...
some [(data structure) to store each player's distinct marker symbol - 'X' or 'O']
    - create a player class with attributes that set player1 to X and player 2 to O?
    - data structure containing current moves = updated cell array
    - initialize the value of current player to null
    - the value of the current player will alternate between players as valid moves are made
    - if the current player is player1, then that player sends their selected cell for validation in the validation class
    - if the cell is validated and data is returned regarding the selected cell, 
    - the cell object is sent to a method that updates the array --> this should in turn, update the boardpersistance class from the assembly class
take the [player's symbol] if that [(player's move) is valid and available]
using the data object from validation, reassign the index value in the cells array from an empty string to a player's marker symbol
*/


