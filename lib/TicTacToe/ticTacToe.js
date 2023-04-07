export class TicTacToe {
    constructor(board, display) {
        this.board = board
        this.display = display
    }

    run() {
        this.display.log(this.board.printBoard())
    }
}