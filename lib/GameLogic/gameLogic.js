export class GameLogic {
    constructor(board, currentPlayerToken) {
        this.board = board;
        this.playerToken = currentPlayerToken;
    };

    // public getWinningToken(): String || null
    getWinningToken() {
        return (
            this.#containsWinningRow()
                || this.#containsWinningColumn()
                || this.#containsWinningMainDiagonal()
                || this.#containsWinningCounterDiagonal()
                ? this.playerToken : null
        );
    };

    // private containsWinningRow: Boolean
    #containsWinningRow() {
        return this.#hasWinningRow().length == this.board.rowTotal;
    };

    // private containsWinningColumn(): Boolean
    #containsWinningColumn() {
        return this.#hasWinningColumn().length === this.board.rowTotal;
    };

    // private containsWinningMainDiagonal(): Boolean
    #containsWinningMainDiagonal() {
        return this.#hasWinningMainDiagonal().length === this.board.rowTotal;
    };

    // private containsWinningCounterDiagonal(): Boolean
    #containsWinningCounterDiagonal() {
        return this.#hasWinningCounterDiagonal().length === this.board.rowTotal;
    };

    // private #isWinner(tokenArr: Array): Boolean
    #isWinner(tokenArr) {
        return tokenArr.join('') === this.playerToken.repeat(this.board.columnTotal);
    };

    // private #hasWinningTokenCombination(tokenArr: Arr): Array
    #hasWinningTokenCombination(tokenArr) {
        const winningArr = () => this.#isWinner(tokenArr);
        return winningArr() ? tokenArr : [];
    };

    // private #hasWinningRow(): Array
    #hasWinningRow() {
        const winningRow = (rowArr) => this.#isWinner(rowArr);
        return this.board.getCells().find(winningRow) || [];
    };

    // private #hasWinningColumn(): Array
    #hasWinningColumn() {
        const winningColumn = (col) => this.#isWinner(col);
        return this.board.getColumnCells().find(winningColumn) || [];
    };

    // private #hasWinningMainDiagonal(): Array 
    #hasWinningMainDiagonal() {
        return this.#hasWinningTokenCombination(this.board.getMainDiagonalCells());
    };

    // private #hasWinningCounterDiagonal(): Array
    #hasWinningCounterDiagonal() {
        return this.#hasWinningTokenCombination(this.board.getCounterDiagonalCells());
    };
};
