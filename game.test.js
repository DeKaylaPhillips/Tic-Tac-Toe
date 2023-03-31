// To run tests --> $ npm test

import { Game } from './Game'

describe('display a single row', () => {
    test('when the displaySingleRow function is called, the console will display a single row correctly', () => {
        const game = new Game(1)
        const row = "    |   |    \n"

        const displaySingleRow = game.getRows("")

        expect(displaySingleRow).toBe(row)  
    });
});

describe('display all three rows', () => {
    test('when the threeRows function is called, the console will display three stacked rows correctly', () => {
        const game = new Game();
        const row = "    |   |    \n"
        const rows =  `${row}${row}${row}`
        
        const threeRows = game.getRows("");
        
        expect(threeRows).toBe(rows)
    });
});

describe('display rows separated by dashes', () => {
    test('when the rowsWithDashes function is called, the console will display three stacked rows separated by dashes correctly', () => {
        const game = new Game()
        const row = "    |   |    \n"
        const dashes = "- - - - - - -\n"
        const board = `${row}${dashes}${row}${dashes}${row}`

        const rowsWithDashes = game.getRows();
            
        expect(rowsWithDashes).toBe(board)
    });
});

describe('tic-tac-toe board', () => {
    test("has a structure that can accept and store values", () => {
        const game = new Game()
        const cells = new Array(9).fill('')
        const line = game.line
        const expectedBoard = `  ${cells[0]}  |  ${cells[1]}  |  ${cells[2]}  \n${line}\n  ${cells[3]}  |  ${cells[4]}  |  ${cells[5]}  \n${line}\n  ${cells[6]}  |  ${cells[7]}  |  ${cells[8]}  `

        const board = game.getBoard();

        expect(board).toStrictEqual(expectedBoard);
    });
});

