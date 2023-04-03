// To run tests --> $ npm test

import { BoardAssembly, BoardPersistence, BoardPrinter } from './Game'

describe('Board Assembly', () => {
    test('will display 1 row when the class is instantiated with 1 as an arg, and when getRows() method is called with no args', () => {
        const board = new BoardAssembly(1)
        const row = "    |   |    \n"

        const displaySingleRow = board.getRows("")

        expect(displaySingleRow).toBe(row)  
    });
});

describe('Board Assembly', () => {
    test('will display 3 stacked rows without lines when the class is instantiated with no args and the getRows() method is called with an empty space as an arg', () => {
        const board = new BoardAssembly();
        const row = `${board.row}\n`
        const rows =  `${row}${row}${row}`
        
        const threeRows = board.getRows("");
        
        expect(threeRows).toBe(rows)
    });
});

describe('Board Assembly', () => {
    test('will display 3 stacked rows separated by 2 dashed lines when the class is instantiated with no args and the getRows() method is called without an argument', () => {
        const board = new BoardAssembly()
        const row = `${board.row}\n`
        const line = `${board.line}\n`
        const rowsAndLines = `${row}${line}${row}${line}${row}`

        const rowsWithline = board.getRows();
            
        expect(rowsWithline).toBe(rowsAndLines)
    });
});

describe('Board Printer', () => {
    test("will return a display of a board to the console containing cell values that are able to be manipulated when the print() method is called", () => {
        const board = new BoardPrinter()
        const cells = board.cells
        const line = board.line
        const expectedBoard = `  ${cells[0]}  |  ${cells[1]}  |  ${cells[2]}  \n${line}\n  ${cells[3]}  |  ${cells[4]}  |  ${cells[5]}  \n${line}\n  ${cells[6]}  |  ${cells[7]}  |  ${cells[8]}  `

        const displayBoard = board.print();

        expect(displayBoard).toStrictEqual(expectedBoard);
    });
});

describe('Board Persistence', () => {
    test("contains a data structure that will allow row/column combinations and their data to be accessed when a valid cell is selected on the board", () => {
        const board = new BoardPersistence()
        const cells = board.cellCombinations
        const validCell = 'A3'
        const invalidCell = 'D4'

        const results1 = cells[validCell] ? true : false
        const results2 = cells[invalidCell] ? true : false

        expect(results1).toBeTruthy()
        expect(results2).toBeFalsy()
    });
});

describe('Board Persistence', () => {
    test("will return a data structure containing information about a cell when a valid cell combination is passed to the search() method", () => {
        const board = new BoardPersistence()
        
        const cellData = board.search('A3')

        expect(cellData).toStrictEqual({ 'position': '' , 'occupied': false })   
    });
});


