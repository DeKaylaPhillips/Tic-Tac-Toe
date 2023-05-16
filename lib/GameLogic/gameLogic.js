import { Board } from "../Board/board.js";
import { Token } from "../Token/token.js";
export class GameLogic {
    constructor(board, currentPlayerToken) {
        this.board = board;
        this.playerToken = currentPlayerToken;
    };
    
    // public getWinningToken(): String || null
    getWinningToken() {
        return this.containsWinningRow() ? this.playerToken : null;
    };

    // public containsWinningRow(): Boolean
    containsWinningRow() {
        return this.#findWinningRow().length === this.board.columnTotal;
    };

    // public containsWinningColumn(): Boolean
    containsWinningColumn() {
        return this.#findWinningColumn().length === this.board.rowTotal;
    };
    
    // public detectDiagonalWin(): Boolean
    detectDiagonalWin() {
        return this.#findDiagonalWin().length === this.board.rowTotal;
    };

    // private #isWinner(tokenArr: Array): Boolean
    #isWinner(tokenArr) {
        return tokenArr.join('') === this.playerToken.repeat(this.board.columnTotal);
    }; 

    // private #findWinningRow(): Array
    #findWinningRow() {
        const winningRow = (rowArr) => this.#isWinner(rowArr)
        return this.board.cells.filter(winningRow).flat();
    };
    
    // private #findWinningColumn(): Array
    #findWinningColumn() {
        const winningColumn = () => this.#isWinner(this.#findColumns());
        return this.board.cells.filter(winningColumn);
    };

    // private #findColumns(): Array
    #findColumns() {
        let columnArr = [];
        for(let col = 0; col < this.board.columnTotal; col++) {  
            for(let row = 0; row < this.board.rowTotal; row++) { 
                columnArr.push(this.board.cells[row][col]);
            };      
        };
        return columnArr; 
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
