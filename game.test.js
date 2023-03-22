// To run tests --> $ npm test

const ticTacToeObject = require('./game')

describe('display a single row', () => {
    test('when the game function is called, the console will display a single row correctly', () => {
        const {displaySingleRow: displayRow} = ticTacToeObject;
        const singleRow = displayRow("'' | '' | ''");
        expect(singleRow).toBe("'' | '' | ''"); 
    });
});