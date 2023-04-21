import { Board } from '../../lib/Board/board'

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

    describe('formatCells()', () => {
        test('will format a cell without a column separator', () => {
            const formattedCellWithSeparator = board.formatCells(board.cells[0][2], 2)
            expect(formattedCellWithSeparator).toBe(` `)
        });

        test('will format a cell with a column separator', () => {
            const formattedCellNoSeparator = board.formatCells(board.cells[0][0], 0)
            expect(formattedCellNoSeparator).toBe(`   |`)
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

        test('will assemble formatted cells according to the current state of the board\'s cells in a string format', () => {
            const initialBoardDisplay = board.boardDisplay
            board.cells[0][0] = 'X' 
          
            const newBoardDisplay = board.assembleBoard()

            expect(initialBoardDisplay).not.toBe(newBoardDisplay) 
        });
    });
});

