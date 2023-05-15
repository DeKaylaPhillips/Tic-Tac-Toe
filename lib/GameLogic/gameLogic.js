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
        return this.#findRowWin().length !== 0;
    };

    // public detectColumnWin(): Boolean
    detectColumnWin() {
        return this.#findColumnWin();
    }

    // private #findRowWin(): Boolean
    #findRowWin() {
        return this.board.cells.filter((row) => 
            row.join('') === this.token.repeat(this.board.columnTotal));
    };
    
    // private #findColumnWin(): Boolean
    #findColumnWin() {
        for(let col = 0; col < this.board.columnTotal; col++){  
            let colComboPos = [];
            let detectWin;
            
            for(let row = 0; row < this.board.rowTotal; row++){ 
                colComboPos.push(this.board.cells[row][col]);
            }

            // TO-DO: make this into a function***
            detectWin = colComboPos.join('') === this.token.repeat(this.board.columnTotal)
            
            if (detectWin) {
                return detectWin
            };
        };
        return false;
    };
}; 

const board = new Board();
const playerToken = new Token('X').getToken()
const game = new GameLogic(board, playerToken)

// board.placeToken(playerToken, 2)
// board.placeToken(playerToken, 5)
// board.placeToken(playerToken, 8)

// console.log(game.detectColumnWin())
// console.log(game.detectRowWin())
// console.log(game.getWinningToken())