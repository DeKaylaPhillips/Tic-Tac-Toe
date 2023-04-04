// To run tests --> $ npm test

import { BoardAssembly, BoardPersistence, BoardPrinter, BoardValidation } from './Game'

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
    
    test("will return an error message if an invalid row/col combination is provided when the validate() method is called", () => {
        
        let cell = 'A4'

        const results = board.validate(cell)
        const errorMessage = `\n--- INVALID MOVE BY PLAYER ---\n\n'${cell}' is not a valid and unoccupied row/column combination on the board.\n\nPlease select a valid row/column combination on the board:\n\tRows are denoted by letters A, B, & C from top to bottom.\n\tColumns are denoted by letters 1, 2, & 3 from left to right.\n\ni.e. "B3"\n`

        expect(results).toBe(errorMessage)
    });

    test("will return an object containing data about a selected cell if the cell is a valid row/col combination when the validate() method is called", () => {
        
        let cell = 'A3'
        
        const results = board.validate(cell)

        expect(results).toStrictEqual({ 'marker': '', 'occupied': false, 'position': 2 })
    })
});
        /* 
        BV class will be responsible for checking the validity of move made by a player
        rules state:
            if a player selects a cell that is a valid cell, and has no marker in its spot (it is available), then an updated board will display to the console along with a string message instructing the next player to select a cell in which to place their marker
            
            else if... (error handling)
            a player selects a cell that is a valid cell, BUT has a marker in its spot (it is not available), then the board with no update will display to the console along with a string message instructing the current player to select another position to place their marker in the board
            
            else if...
            a player selects a cell that is not a valid cell (possible typo or misunderstanding of row/column formatting rules), then the board with no update will display to the console along with a string message instructing the current player to select another position to place their marker in the board using the proper row/column combos

            else if...
            a player does not select a cell (an empty string or null value), then the board with no update will display to the console along with a string message instructing the current player to select a position using row/column combos format
        instantiate a class named BoardValidation
        from the board validation class, create a validation method that will accept a user's cell as an argument
        call the getCell method passed with user's cell from the persistence class to first determine if the cell selected is valid
        pass the results of the getCell() method to back the validation method - 
            1. will either be a dictionary containing data about the cell's status and position
                this means the spot is VALID - however, doesn't determine availability
                    check availability by determining whetheror not the marker key in the board has the value of an empty string
                    if the value of the marker key is not an empty string - the spot is occupied
                        log the display of the current board to the console
                        display an error message intructing the current player to select an unoccupied cell on the board (and possible a data structure with the unoccupied row/col combinations)
                    else if the value of the marker key is an empty string
                        the spot on the board is both VALID and UNOCCUPIED meaning the board is to be updated

            
            2. "false" - meaning the selected position is not a valid position on the board
                log the display of the current board to the console
                display error message instructing current player to provide a valid row/col combination on the board w/ an example
        */
       





