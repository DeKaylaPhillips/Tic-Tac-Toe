import { Board, Display } from '../../lib/Board/board'

describe('Board', () => {
    test('will return a structure storing each individual cell in the board when getCells() is called', () => {
        const board = new Board()
        const expectedResults = board.cells

        const cellStructure = board.getCells()
        
        expect(cellStructure).toBe(expectedResults)
    });
});

describe('Display', () => {
    test('will format a cell without a column separator into a column when formatCells() is called', () => {
        const board = new Board(1, 3)
        const display = new Display(board)
        const expectedResults = ` `;

        const formattedCellWithSeparator = display.formatCells(board.cells[0][2], 2)

        expect(formattedCellWithSeparator).toBe(expectedResults)

    });

    test('will format a cell with a column separator into a column when formatCells() is called', () => {
        const board = new Board(1, 3)
        const display = new Display(board)
        const expectedResults = `   |`;

        const formattedCellNoSeparator = display.formatCells(board.cells[0][0], 0)

        expect(formattedCellNoSeparator).toBe(expectedResults)

    });

    test('will print a single row to the console when an instance of the Board is passed to the class where 1 is an arg for rows', () => {
        const board = new Board(1, 3)
        const display = new Display(board)
        const expectedResults = display.boardDisplay

        const row = display.printBoard()
        
        expect(row).toBe(expectedResults)
    });
    
    test('will print 3 stacked rows to the console when an instance of the Board is passed to the class where 3 is an arg for rows', () => {
        const board = new Board(3, 3)
        const display = new Display(board)
        display.assembleBoard('')
        const expectedResults = display.boardDisplay

        const rows = display.printBoard()

        expect(rows).toBe(expectedResults)
    });

    test('will print a Tic-Tac-Toe board to the console when an instance of the Board is passed to the class', () => {
        const board = new Board(3, 3)
        const display = new Display(board)
        const expectedResults = display.boardDisplay

        const printedBoard = display.printBoard()
        
        expect(printedBoard).toBe(expectedResults)
    });


});

