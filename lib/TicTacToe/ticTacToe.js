import { Board } from '../Board/board.js'
import { Display } from '../Display/display.js'

export class TicTacToe {
    constructor(display) {
        this.display = display;
    }

    run() {
        this.display.output(new Board().toString())
    }
}

const board = new Board()
const display = new Display(board)
const game = new TicTacToe(display)
game.run()