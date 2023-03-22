// To run tests --> $ npm test

const ticTacToeObject = require('./game')

describe('display a single row', () => {
    test('when the displaySingleRow function is called, the console will display a single row correctly', () => {
        const {displaySingleRow: displayRow} = ticTacToeObject;
        const singleRow = displayRow();
        expect(singleRow).toBe("'' | '' | ''"); 
    });
});

describe('display all three rows', () => {
    test('when the displayThreeRows function is called, the console will display three stacked rows correctly', () => {
        const {displayThreeRows: displayRows} = ticTacToeObject;
        const board = displayRows();
        expect(board).toBe("\n'' | '' | ''\n'' | '' | ''\n'' | '' | ''\n")
    })
}) 