// To run tests --> $ npm test
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
        const expectedResults = '   |    |  '

        const row = display.getBoard()
        
        expect(row).toBe(expectedResults)
    });

    test('will print a Tic-Tac-Toe board to the console when an instance of the Board is passed to the class', () => {
        const board = new Board(3, 3)
        const display = new Display(board)
        const expectedResults = display.boardDisplay

        const printedBoard = display.getBoard()
        
        expect(printedBoard).toBe(expectedResults)
    });

    // test('will print 3 stacked rows to the console when an instance of the Board is passed to the class where 3 is an arg for rows', () => {
        // TO-DO
    // });

});


// describe('BoardAssembly', () => {
//     test('will display a single row when an instance of the BoardAssembly is created with 1 row and the getRows() method is called', () => {
//         const board = new BoardAssembly(1)
//         const row = ` ${this.col} | ${this.col}  |  ${this.col}  \n`

//         const displaySingleRow = board.getRows("")

//         expect(displaySingleRow).toBe(row)  
//     });
// });

/*
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
*/
