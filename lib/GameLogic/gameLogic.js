import { Board } from "../Board/board.js";
import { Token } from "../Token/token.js";
export class GameLogic {
    constructor(board, currentPlayerToken) {
        this.board = board;
        this.token = currentPlayerToken;
    };

    // public detectRowWin(): Boolean
    detectRowWin() {
        return this.#findRowWin().length !== 0;
    };

    // public detectDiagonalWin(): Boolean
    detectDiagonalWin() {

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
    #findDiagonalWin() { // *** right to left win only, currently! ***
        const winningDiagonalStr = this.token.repeat(this.board.rowTotal)
        let diagonalCombinations = [];
        
        for (let row = 0; row < this.board.rowTotal; row++) {
            const confirmDiagonalWin = (diagonalCombinationsArray) => (diagonalCombinationsArray.join('') === winningDiagonalStr)        
            const findDiagonalIndex = (row, column) => (column === Math.abs(row - (this.board.columnTotal - 1)));  
            for (let column = 0; column < this.board.columnTotal; column++) {
                findDiagonalIndex(row, column) ? diagonalCombinations.push(this.board.cells[row][column]) : '';
            };
            if (confirmDiagonalWin(diagonalCombinations)) {
                return diagonalCombinations; 
            };  
        };
        return [];
    };
}; 

const board = new Board()
const token = new Token('X').getToken()
const game = new GameLogic(board, token)

board.placeToken(token, 3)
board.placeToken(token, 5)
board.placeToken(token, 7)
