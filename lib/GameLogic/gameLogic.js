import { Board } from "../Board/board.js";
import { Token } from "../Token/token.js";
export class GameLogic {
    constructor(board, currentPlayerToken) {
        this.board = board;
        this.token = currentPlayerToken;
    };

    // public detectRowWin(): Boolean
    detectRowWin() {
        return this.#findRowWin().flat().length === this.board.rowTotal;
    };

    // public detectDiagonalWin(): Boolean
    detectDiagonalWin() {
        return this.#findDiagonalTokens().length === this.board.rowTotal;
    };

    // public getWinningToken(): String || null
    getWinningToken() {
        return this.detectRowWin() ? this.token : null;
    };

    // private #findRowWin(): Array
    #findRowWin() {
        return this.board.cells.filter((row) =>
            row.join('') === this.token.repeat(this.board.columnTotal));
    };

    // private getDiagonalWinArr(diagonalCombinationArr: Array): Array || Boolean
    #findDiagonalWin(diagonalCombinationArr) {
        return diagonalCombinationArr.join('') === this.token.repeat(this.board.rowTotal) ? diagonalCombinationArr : false;
    };

    // private #findDiagonalTokens(): Array
    #findDiagonalTokens() {
        const mainDiagonalTokens = [];
        const counterDiagonalTokens = [];
        this.board.cells.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => {
                this.#mainDiagonalIndex(rowIdx, colIdx) ? mainDiagonalTokens.push(row[colIdx]) : '';
                this.#counterDiagonalIndex(rowIdx, colIdx) ? counterDiagonalTokens.push(row[colIdx]) : '';
            });
        });
        return this.#findDiagonalWin(mainDiagonalTokens) || this.#findDiagonalWin(counterDiagonalTokens);
    };

    // private counterDiagonalTokenSearch(rowIndex: Number, columnIndex: Number): Boolean
    #counterDiagonalIndex(rowIndex, columnIndex) {
        // diagonal line from top-right to bottom-left in a square board
        return columnIndex === rowIndex;
    };

    // private mainDiagonalTokenSearch(rowIndex: Number, columnIndex: Number): Boolean
    #mainDiagonalIndex(rowIndex, columnIndex) {
        // diagonal line from top-left to bottom-right in a square board
        return columnIndex === this.#calculateCounterDiagonalIndices(rowIndex);
    };

    // private calculateCounterDiagonalIndices(rowIndex: Number): Number
    #calculateCounterDiagonalIndices(rowIndex) {
        return Math.abs(rowIndex - (this.board.columnTotal - 1));
    };
};