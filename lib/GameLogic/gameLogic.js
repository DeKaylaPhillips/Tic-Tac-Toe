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
        const winCombo = this.token.repeat(this.board.columnTotal);
        const winningRow = this.board.cells.filter((row) => row.join('') === winCombo);
        return winningRow.length !== 0 ? winningRow.flat()[0] : false;
    };
}; 