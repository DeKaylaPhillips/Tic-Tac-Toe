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

    // public getWinningToken(): String || null
    getWinningToken() {
        return this.detectRowWin() ? this.token : null;
    };
    
    // private #findRowWin(): String || Boolean
    #findRowWin() {
        return this.board.cells.filter((row) => 
            row.join('') === this.token.repeat(this.board.columnTotal));
    };

    #findColumnWin() {
        const columnData = this.#getColumnData()
        return Object.keys(columnData).filter((column) => 
            columnData[column].count === board.rowTotal);
    };

    #assembleColumnData() {
        let columnDataObj = {}
        for (let col = 0; col < board.columnTotal; col++) {
            columnDataObj[`column${col + 1}`] = {index: col, tokens: [], count: 0}
        };
        return columnDataObj;
    };

    #getColumnData() {
        let columnObj = this.#assembleColumnData()
        this.board.cells.forEach((row) => { 
            row.forEach((col, colIndex) => {
                if (this.token) { 
                    Object.keys(columnObj).forEach((column) => { 
                        colIndex === columnObj[column].index 
                        ? (columnObj[column].tokens.push(col), columnObj[column].count++) 
                        : ''});
            };});});
        return columnObj
    };
}; 

// const board = new Board();
// const playerToken = new Token('X').getToken()
// const game = new GameLogic(board, playerToken)

// board.placeToken(playerToken, 2)
// board.placeToken(playerToken, 5)
// board.placeToken(playerToken, 8)

// console.log(game.detectColumnWin())
// console.log(game.detectRowWin())
// console.log(game.getWinningToken())