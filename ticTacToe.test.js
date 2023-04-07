import { TicTacToe } from "./ticTacToe"
import {Board} from "./board"

class DisplayMock {
    constructor(){
        this.dataOutputted; 
        this.nTimesLogCalled = 0
    }

    log(something){
        this.nTimesLogCalled++
        this.dataOutputted = something
    }
} 

describe('TicTacToe', () => {
    test('will output to the user', () => {
        const board = new Board()

        const displayMock = new DisplayMock()
        const game = new TicTacToe(board, displayMock)

        const expectedDefaultBoardOutput = board.printBoard()

        game.run()
        
        expect(displayMock.nTimesLogCalled).toBe(1)
        expect(displayMock.dataOutputted).toBe(expectedDefaultBoardOutput)

    })
})