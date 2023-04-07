// To run tests --> $ npm test

import { Board } from '../../lib/Board/board'

describe('display a single row', () => {
    test('when the displaySingleRow function is called, the console will display a single row correctly', () => {
        const board = new Board(1)
        const row = "    |   |    \n"

        const displaySingleRow = board.getRows("")

        expect(displaySingleRow).toBe(row)  
    });
});

describe('display all three rows', () => {
    test('when the threeRows function is called, the console will display three stacked rows correctly', () => {
        const board = new Board();
        const row = "    |   |    \n"
        const rows =  `${row}${row}${row}`
        
        const threeRows = board.getRows("");
        
        expect(threeRows).toBe(rows)
    });
});

describe('display rows separated by dashes', () => {
    test('when the rowsWithDashes function is called, the console will display three stacked rows separated by dashes correctly', () => {
        const board = new Board()
        const row = "    |   |    \n"
        const dashes = "- - - - - - -\n"
        const rows_dashes = `${row}${dashes}${row}${dashes}${row}`

        const rowsWithDashes = board.getRows();
            
        expect(rowsWithDashes).toBe(rows_dashes)
    });
});

describe('tic-tac-toe board', () => {
    test("has a structure that can accept and store values", () => {
        const board = new Board()
        const cells = new Array(9).fill('')
        const line = board.line
        const expectedBoard = `  ${cells[0]}  |  ${cells[1]}  |  ${cells[2]}  \n${line}\n  ${cells[3]}  |  ${cells[4]}  |  ${cells[5]}  \n${line}\n  ${cells[6]}  |  ${cells[7]}  |  ${cells[8]}  `

        const displayBoard = board.printBoard();

        expect(displayBoard).toStrictEqual(expectedBoard);
    });
});

