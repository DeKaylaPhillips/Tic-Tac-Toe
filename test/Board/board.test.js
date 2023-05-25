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

    describe('placeToken()', () => {
        test('will place a valid token in the board when a valid position is accepted', () => {
            board.placeToken(new Token('X'), 2);
            const cells = board.getCells();
            expect(cells).toStrictEqual([['', 'X', ''], ['', '', ''], ['', '', '']]);
        });
    });

    describe('getColumnCells()', () => {
        const token1 = new Token('X');
        const token2 = new Token('?');

        test('returns a data structure containing tokens detected in each individual column', () => {
            const positions = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
            const placeTokenFn = (arr, num) => num != arr[arr.length - 1] ? board.placeToken(token1, num) : board.placeToken(token2, num);
            positions.forEach((col) => col.forEach((pos) => placeTokenFn(col, pos)))
            const columns = board.getColumnCells();
            expect(columns).toEqual([['X', 'X', '?'], ['X', 'X', '?'], ['X', 'X', '?']]);
        });
    });

    describe('getMainDiagonalCells()', () => {
        const token1 = new Token('X');
        const token2 = new Token('Z');

        test('returns a data structure containing tokens detected in each main diagonal cell', () => {
            const positions = [1, 5, 9];
            const placeTokenFn = (num) => num != positions[positions.length - 1] ? board.placeToken(token1, num) : board.placeToken(token2, num);
            positions.forEach((pos) => placeTokenFn(pos))
            const counterDiagonalCells = board.getMainDiagonalCells();
            expect(counterDiagonalCells).toEqual(['X', 'X', 'Z']);
        });
    });

    describe('getCounterDiagonalCells()', () => {
        const token1 = new Token('?');
        const token2 = new Token('S');

        test('returns a data structure containing tokens detected in each main diagonal cell', () => {
            const positions = [3, 5, 7];
            const placeTokenFn = (num) => num != positions[positions.length - 1] ? board.placeToken(token1, num) : board.placeToken(token2, num);
            positions.forEach((pos) => placeTokenFn(pos))
            const counterDiagonalCells = board.getCounterDiagonalCells();
            expect(counterDiagonalCells).toEqual(['?', '?', 'S']);
        });
    });
});


