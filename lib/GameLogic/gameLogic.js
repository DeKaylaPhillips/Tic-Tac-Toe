import { Board } from "../Board/board.js";
import { Token } from "../Token/token.js";
export class GameLogic {
    constructor(board, currentPlayerToken) {
        this.board = board;
        this.token = currentPlayerToken;
    };
    
    // public getWinningToken(): String || null
    getWinningToken() {
        return this.detectRowWin() ? this.token : null;
    };

    // public detectRowWin(): Boolean
    detectRowWin() {
        return this.#findRowWin().flat().length === this.board.columnTotal;
    };

    // public detectColumnWin(): Boolean
    detectColumnWin() {
        return this.#findColumnWin().length === this.board.rowTotal;
    }

    // private #findRowWin(): Array
    #findRowWin() {
        return this.board.cells.filter((row) => 
            row.join('') === this.token.repeat(this.board.columnTotal));
    };
    
    // private #findColumnWin(): Array
    #findColumnWin() {
        const winningColumnStr = this.token.repeat(this.board.columnTotal)
        for(let col = 0; col < this.board.columnTotal; col++) {  
            let confirmColumnWin = (columnCombinationsArray) => (columnCombinationsArray.join('') === winningColumnStr);
            let columnCombinations = [];
            for(let row = 0; row < this.board.rowTotal; row++) { 
                columnCombinations.push(this.board.cells[row][col]);
            };
            if (confirmColumnWin(columnCombinations)) {
                return columnCombinations;
            };
        };
        return [];
    };
}; 