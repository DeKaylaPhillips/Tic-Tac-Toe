export class GameLogic {
    constructor(board, player1, player2) {
        this.board = board;
        this.player1 = player1.getToken();
        this.player2 = player2.getToken();
    };

    // public getWinningToken(): String || null
    getWinningToken() {
        const winConditions =
            [
                { 'winCondition': this.#containsWinningRow(), 'winner': this.#hasWinningRow() },
                { 'winCondition': this.#containsWinningColumn(), 'winner': this.#hasWinningColumn() },
                { 'winCondition': this.#containsWinningMainDiagonal(), 'winner': this.#hasWinningMainDiagonal() },
                { 'winCondition': this.#containsWinningCounterDiagonal(), 'winner': this.#hasWinningCounterDiagonal() }
            ]
        
        for (const condition of winConditions) {
            if (condition.winCondition) {
                return condition.winner[0];
            };
        };
        return null;
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
        return tokenArr.join('') === this.player1.repeat(this.board.columnTotal)
            || tokenArr.join('') === this.player2.repeat(this.board.columnTotal);
    };

    // private #hasWinningTokenCombination(tokenArr: Arr): Array
    #hasWinningTokenCombination(tokenArr) {
        const winningArr = () => this.#isWinner(tokenArr);
        return winningArr() ? tokenArr : [];
    };

    // private #hasWinningRow(): Array
    #hasWinningRow() {
        const winningRow = (rowArr) => this.#isWinner(rowArr);
        return (this.board.getCells().find(winningRow)) || ([]);
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
