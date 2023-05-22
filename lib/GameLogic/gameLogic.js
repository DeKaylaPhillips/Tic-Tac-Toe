export class GameLogic {
    constructor(board, currentPlayerToken) {
        this.board = board;
        this.token = currentPlayerToken;
    };

    // public getWinningToken(): String || null
    getWinningToken() {
        return (
            this.containsWinningRow() 
            || this.containsWinningMainDiagonal() 
            || this.containsWinningCounterDiagonal() 
            ? this.token : null
        );
    };

    // public containsWinningRow: Boolean
    containsWinningRow() {
        return this.#findWinningRow().length === this.board.rowTotal;
    };

    // public containsWinningMainDiagonal(): Boolean
    containsWinningMainDiagonal() {
        return this.#findWinningMainDiagonal().length === this.board.rowTotal;
    };

    // public containsWinningCounterDiagonal(): Boolean
    containsWinningCounterDiagonal() {
        return this.#findWinningCounterDiagonal().length === this.board.rowTotal;
    };

    // private #isWinner(tokenArr: Array): Boolean
    #isWinner(tokenArr) {
        return tokenArr.join('') === this.token.repeat(this.board.columnTotal)
    };

    // private #findWinningRow(): Array
    #findWinningRow() {
        const winningRow = (rowArr) => this.#isWinner(rowArr)
        return this.board.cells.filter(winningRow).flat();
    };

    // private findWinningMainDiagonal(): Array || Boolean
    #findWinningMainDiagonal() { 
        const mainDiagArr = this.#findMainDiagonal()
        const mainDiagonalWin = (diagArr) => this.#isWinner(diagArr); 
        return mainDiagonalWin(mainDiagArr) ? this.#findMainDiagonal() : [];
    };
    
    // private findWinningCounterDiagonal(): Array || Boolean
    #findWinningCounterDiagonal() {
        const counterDiagArr = this.#findCounterDiagonal()
        const counterDiagonalWin = (diagArr) => this.#isWinner(diagArr);
        return counterDiagonalWin(counterDiagArr) ? this.#findCounterDiagonal() : [];
    };

    #findMainDiagonal() {
        const mainDiagonalTokens = [];
        this.board.cells.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => { this.#mainDiagonalIndex(rowIdx, colIdx) 
                ? mainDiagonalTokens.push(row[colIdx]) : '';
            });
        });
        return mainDiagonalTokens;
    };

    #findCounterDiagonal() {
        const counterDiagonalTokens = [];
        this.board.cells.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => { this.#counterDiagonalIndex(rowIdx, colIdx) 
                ? counterDiagonalTokens.push(row[colIdx]) : '';
            });
        });
        return counterDiagonalTokens;
    };

    // private mainDiagonalTokenSearch(rowIndex: Number, columnIndex: Number): Boolean
    #mainDiagonalIndex(rowIndex, columnIndex) {
        return columnIndex === rowIndex;
    };

    // private counterDiagonalTokenSearch(rowIndex: Number, columnIndex: Number): Boolean
    #counterDiagonalIndex(rowIndex, columnIndex) {
        return columnIndex === this.#calculateCounterDiagonalIndices(rowIndex);
    };

    // private calculateCounterDiagonalIndices(rowIndex: Number): Number
    #calculateCounterDiagonalIndices(rowIndex) {
        return Math.abs(rowIndex - (this.board.columnTotal - 1));
    };
};