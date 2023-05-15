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
        // Loop through each col at each individual row to create arrays of column combinations 
        console.log('--- Entering col loop! ---')
        for(let col = 0; col < this.board.columnTotal; col++){  
            
            // WITHIN THE COLUMN LOOP ---
            console.log('--- Entered the col loop! ---')
            console.log('--- Col Iteration # --> ', col)
            
            // Re-initialize a new array to store column combinations on every new column loop
            let colComboPos = [];
            // Re-declare a new variable to store a boolean value used to inform whether a winning column was found or not
            let detectWin;
            
            console.log('--- Entering row loop! ---')
            // WITHIN THE COLUMN LOOP ---

            for(let row = 0; row < this.board.rowTotal; row++){ 
                // WITHIN THE ROW LOOP ---
                console.log('--- Entered the row loop! ---')
                console.log('--- Row Iteration # --> ', row)
                console.log('--- Pushing the token found in the column in the board! ---', this.board.cells[row][col])
                colComboPos.push(this.board.cells[row][col]);
                // EXITING THE ROW LOOP ---
            }

            // BACK INTO THE COLUMN LOOP ---
            console.log('--- Exiting the row loop! ---')
            console.log('--- Col Iteration # --> ', col)
            console.log('--- colComboPos Array at Current Column --> ', colComboPos)
            
            // Declare and define how a detected win would be found
            // A detected win can be found by joining the column combinations lists and comparing the length of the string to the length of what a winning combination string would be 
            console.log('--- Checking if a column win was detected! ---')
            detectWin = colComboPos.join('') === this.token.repeat(this.board.columnTotal)
            console.log('--- Win detected in the board in this column? --> ', detectWin)

            // Set the condition for when a win is detected and return the answer
            if (detectWin) {
                console.log('--- Condition satisfied; win was detected in this column --> ', detectWin)
                return detectWin
                // --- EXITING THE COLUMN LOOP ---
            };
        // --- EXITED NESTED LOOP --> NO TRUE CONDITION RETURNED BEFORE LOOP COULD END ---
        console.log('--- Exiting the column loop because a win wasn\'t detected! ---')    
        };
        return false;
    };
}; 

const board = new Board();
const playerToken = new Token('X').getToken()
const game = new GameLogic(board, playerToken)

board.placeToken(playerToken, 2)
board.placeToken(playerToken, 5)
board.placeToken(playerToken, 8)

console.log(game.detectColumnWin())
console.log(game.detectRowWin())
console.log(game.getWinningToken())