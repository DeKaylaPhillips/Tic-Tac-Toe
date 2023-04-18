import { Board, Display } from '../../lib/Board/board'

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
});

describe('Display', () => {
    let board, display;

    beforeEach(() => {
        board = new Board();
        display = new Display(board);
    });

    describe('formatCells()', () => {
        test('will format a cell without a column separator', () => {
            const formattedCellWithSeparator = display.formatCells(board.cells[0][2], 2)
            expect(formattedCellWithSeparator).toBe(` `)
        });

        test('will format a cell with a column separator', () => {
            const formattedCellNoSeparator = display.formatCells(board.cells[0][0], 0)
            expect(formattedCellNoSeparator).toBe(`   |`)
        });
    });

    describe('printBoard()', () => {
        test('will print 1 row when the board is instantiated with only 1 row', () => {
            const board = new Board(1, 3)
            const display = new Display(board)
            const row = display.printBoard()
            expect(row).toBe(`   |    |  `)
        });

        test('will print 3 rows with no divider when the board is assembled with an empty string', () => {
            display.assembleBoard('')
            const rows = display.printBoard()
            expect(rows).toBe(`   |    |  \n   |    |  \n   |    |  `)
        });

        test('will print a standard 3x3 Tic-Tac-Toe board', () => {
            const printedBoard = display.printBoard()
            expect(printedBoard).toBe(display.boardDisplay)
        });
    });
});

