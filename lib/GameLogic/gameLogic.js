export class GameLogic {
    constructor(board, currentPlayerToken) {
        this.board = board;
        this.token = currentPlayerToken;
    };

    // public detectRowWin(): Boolean
    detectRowWin() {
        return this.#findRowWin().length !== 0;
    };

    // public getWinningToken(): String || null
    getWinningToken() {
        return this.detectRowWin() ? this.token : null;
    };
    
    // private #findRowWin(): String || Boolean
    #findRowWin() {
        return this.board.cells.filter((row) => 
            row.join('') === this.token.repeat(this.board.columnTotal));
    };
}; 