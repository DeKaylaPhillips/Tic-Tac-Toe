// To run tests --> $ npm test

import { Game } from './game.js'

describe('display a single row', () => {
    test('when the displaySingleRow function is called, the console will display a single row correctly', () => {
        // ES6 Syntax
        const game = new Game(1)
        const row = "    |   |    \n"

        const displaySingleRow = game.getRows("")

        expect(displaySingleRow).toBe(row)  
    });
});

describe('display all three rows', () => {
    test('when the displayThreeRows function is called, the console will display three stacked rows correctly', () => {
        const game = new Game();
        const row = "    |   |    \n"
        const rows =  `${row}${row}${row}`
        
        const threeRows = game.getRows("");
        
        expect(threeRows).toBe(rows)
    })
}) 

describe('display rows separated by dashes', () => {
    test('when the displaySeparatedRows function is called, the console will display three stacked rows separated by dashes correctly', () => {
        const game = new Game()
        const row = "    |   |    \n"
        const dashes = "- - - - - - -\n"
        const board = `${row}${dashes}${row}${dashes}${row}`

        const rowsWithDashes = game.getRows();
            
        expect(rowsWithDashes).toBe(board)
    })
})