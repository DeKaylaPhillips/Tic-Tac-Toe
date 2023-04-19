import { Board, Display } from '../Board/board.js'

export class TicTacToe {
    constructor(board) {
        this.board = board;
    }

    run() {
        console.log(this.board.printBoard())
    }
}

const data = new Board()
const board = new Display(data)
const game = new TicTacToe(board)
game.run()