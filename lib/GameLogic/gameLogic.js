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
        return this.#findDiagonalWin().length === this.board.rowTotal;
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

    // private #findDiagonalWin(): Array
    #findDiagonalWin() {
        let firstDiagonalCombination = [];
        let secondDiagonalCombination = [];
        const winningDiagonalStr = this.token.repeat(this.board.rowTotal);

        for (let row = 0; row < this.board.rowTotal; row++) {
            const diagonalColumnIndex = (row) => Math.abs(row - (this.board.columnTotal - 1));
            const firstDiagonalSearch = (row, column) => (column === diagonalColumnIndex(row));
            const secondDiagonalSearch = (row, column) => (row === column);
            const confirmDiagonalWin = (diagonalCombinationsArray) => (diagonalCombinationsArray.join('') === winningDiagonalStr);

            for (let column = 0; column < this.board.columnTotal; column++) {
                firstDiagonalSearch(row, column) ? firstDiagonalCombination.push(this.board.cells[row][column]) : '';
                secondDiagonalSearch(row, column) ? secondDiagonalCombination.push(this.board.cells[row][column]) : '';
            };

            if (confirmDiagonalWin(firstDiagonalCombination)) {
                return firstDiagonalCombination;
            } else if (confirmDiagonalWin(secondDiagonalCombination)) {
                return secondDiagonalCombination;
            };
        };
        return [];
    };
};