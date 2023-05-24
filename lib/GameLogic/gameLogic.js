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

    // public containsWinningRow: Boolean
    #containsWinningRow() {
        return this.#hasWinningRow().length == this.board.rowTotal;
    };

    // public containsWinningColumn(): Boolean
    #containsWinningColumn() {
        return this.#hasWinningColumn().length === this.board.rowTotal;
    };

    // public containsWinningMainDiagonal(): Boolean
    #containsWinningMainDiagonal() {
        return this.#hasWinningMainDiagonal().length === this.board.rowTotal;
    };

    // public containsWinningCounterDiagonal(): Boolean
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
        return this.#getColumnCells().find(winningColumn) || [];
    };

    // private #hasWinningMainDiagonal(): Array 
    #hasWinningMainDiagonal() {
        return this.#hasWinningTokenCombination(this.#getMainDiagonalCells());
    };

    // private #hasWinningCounterDiagonal(): Array
    #hasWinningCounterDiagonal() {
        return this.#hasWinningTokenCombination(this.#getCounterDiagonalCells());
    };

    // private #getColumnCells(): Array
    #getColumnCells() {
        const columnArr = [];
        this.board.cells.forEach((col, colIdx) => {
            columnArr[colIdx] = [];
            col.forEach((row, rowIdx) => {
                columnArr[colIdx].push(this.board.cells[rowIdx][colIdx]);
            });
        });
        return columnArr;
    };

    // private getMainDiagonalCells(): Array
    #getMainDiagonalCells() {
        const mainDiagonalTokens = [];
        this.board.cells.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => {
                this.#mainDiagonalIndex(rowIdx, colIdx)
                    ? mainDiagonalTokens.push(row[colIdx]) : '';
            });
        });
        return mainDiagonalTokens;
    };

    // private getCounterDiagonalCells(): Array
    #getCounterDiagonalCells() {
        const counterDiagonalTokens = [];
        this.board.cells.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => {
                this.#counterDiagonalIndex(rowIdx, colIdx)
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
