import { Board } from '../../lib/Board/board'
import { Token } from '../../lib/Token/token'

describe('Board', () => {
    let board;

    beforeEach(() => {
        board = new Board();
    });

    describe('toString()', () => {
        test('will display 1 row when the board is instantiated with only 1 row', () => {
            board = new Board(1, 3);
            const row = board.toString();
            expect(row).toBe(`   |    |  `);
        });

        test('will display a standard, user-friendly 3x3 Tic-Tac-Toe board', () => {
            const printedBoard = board.toString();
            const rowOutput = `   |    |  `;
            expect(printedBoard).toBe(`${rowOutput}\n${board.rowSeparator}\n${rowOutput}\n${board.rowSeparator}\n${rowOutput}`);
        });
    });

    describe('getCells()', () => {
        test('will return an array data structure used to store each row and column in the board', () => {
            const cellStructure = board.getCells();
            expect(cellStructure).toBe(board.cells);
        });    
    });

    describe('getRow()', () => {
        test('will return the correlated row number for a valid position', () => {
            const row = board.getRow(4);
            expect(row).toBe(1);
        });
    });
 
    describe('getColumn()', () => {
        test('will return the correlated column number for a valid position', () => {
            const column = board.getColumn(5);
            expect(column).toBe(1);
        });
    });

    describe('placeToken()', () => {
        test('will place a valid token in the board when a valid position is accepted', () => {
            board.placeToken(new Token('X').getToken(), 2);
            const cells = board.getCells();
            expect(cells).toStrictEqual([['', 'X', ''],['', '', ''],['', '', '']]);
        });
    });
});

