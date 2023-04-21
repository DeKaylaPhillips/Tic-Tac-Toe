import { TicTacToe } from "../../lib/TicTacToe/ticTacToe"
import {Board} from "../../lib/Board/board"

class DisplayMock {
    /* constructor():void */
    constructor(){
        this.dataOutputted; 
        this.nTimesLogCalled = 0
    }

    /* output(objectToDisplay:String):void */
    output(something){
        this.nTimesLogCalled++
        this.dataOutputted = something
    }
} 

describe('TicTacToe', () => {
    test('will output to the user', () => {
        const board = new Board()

        const displayMock = new DisplayMock()
        const game = new TicTacToe(displayMock)

        const expectedDefaultBoardOutput = board.toString()

        game.run()
        
        expect(displayMock.nTimesLogCalled).toBe(1)
        expect(displayMock.dataOutputted).toBe(expectedDefaultBoardOutput)

    })
})