import { Board } from '../../lib/Board/board'
import { Token } from '../../lib/Token/token'

describe('Board', () => {
    let board;

    
    beforeEach(() => {
        board = new Board();
    });

    describe('getCells()', () => {
        test('will return a structure storing each individual cell in the board', () => {
            const cellStructure = board.getCells()
            expect(cellStructure).toBe(board.cells)
        });    
    });

    describe('toString()', () => {
        test('will print 1 row when the board is instantiated with only 1 row', () => {
            const board = new Board(1, 3)
            const row = board.toString()
            expect(row).toBe(`   |    |  `)
        });

        test('will print a standard, user-friendly 3x3 Tic-Tac-Toe board', () => {
            const printedBoard = board.toString()
            const rowOutput = `   |    |  `
            expect(printedBoard).toBe(`${rowOutput}\n${board.rowSeparator}\n${rowOutput}\n${board.rowSeparator}\n${rowOutput}`)
        });
    });

    describe('getRow()', () => {
        test('will return the correlated row number for a given position', () => {
            const row = board.getRow(4)
            expect(row).toBe(1)
        });
    });

    describe('getColumn()', () => {
        test('will return the correlated column number for a given position', () => {
            const column = board.getColumn(5)
            expect(column).toBe(1)
        });
    });
});

