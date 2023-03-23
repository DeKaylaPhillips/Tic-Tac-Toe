// To run tests --> $ npm test

const ticTacToeObject = require('./game')

describe('display a single row', () => {
    test('when the displaySingleRow function is called, the console will display a single row correctly', () => {
        const {displaySingleRow: displayRow} = ticTacToeObject;
        const singleRow = displayRow();
        const row = "  |  |  "

        expect(singleRow).toBe(row); 
    });
});

describe('display all three rows', () => {
    test('when the displayThreeRows function is called, the console will display three stacked rows correctly', () => {
        const {displayThreeRows: displayRows} = ticTacToeObject;
        const threeRows = displayRows();
        const rows = "  |  |  \n  |  |  \n  |  |  ";

        expect(threeRows).toBe(rows)
    })
}) 

describe('display rows separated by dashes', () => {
    test('when the displaySeparatedRows function is called, the console will display three stacked rows separated by dashes correctly', () => {
        const {displaySeparatedRows: displayBoard} = ticTacToeObject;
        const rowsWithDashes = displayBoard();
        const row = "    |   |    "
        const dashes = "- - - - - - -"
        const board = `${row}\n${dashes}\n${row}\n${dashes}\n${row}`
            
        expect(rowsWithDashes).toBe(board)
    })
})