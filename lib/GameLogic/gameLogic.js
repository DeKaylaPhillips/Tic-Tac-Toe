export class GameLogic {
    constructor(board, currentPlayerToken) {
        this.board = board;
        this.token = currentPlayerToken;
    };

    // public detectRowWin(): Boolean
    detectRowWin() {
        return this.#findRowWin() !== false;
    };
    
    // private #findRowWin(): String || Boolean
    #findRowWin() {
        const winningRow = this.board.cells.filter((row) => 
            row.join('') === this.token.repeat(this.board.columnTotal));
        return winningRow.length !== 0 ? winningRow.flat()[0] : false;
    };
}; 