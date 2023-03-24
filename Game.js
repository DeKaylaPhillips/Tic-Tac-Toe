export class Game {
    constructor(rows=3) {
        this.rowTotal = rows
        this.row = "    |   |    "
        this.line = "- - - - - - -"
    }
    /* 
       CODE LAYERS 
       Basic idea: Seperate the Responsibility 
       SOLID
       S - Separate the Responsibility 
            Each layer should do one thing

       O - Open to Extension
            A function or class/general data structure is easy to change    

    */
    getRows(divider) {
        const lineSeparator = (divider === undefined) ? `${this.line}\n` : divider
        const arrayOfRows = new Array(this.rowTotal).fill(`${this.row}\n`)
        return arrayOfRows.join(lineSeparator)
    }
}


// Uncomment the code below to display a single row of the Tic-Tac-Toe board.
// const game = new TicTacToe(1)
// console.log(game.displayRows())

// Uncomment the code below to display three rows of the Tic-Tac-Toe board.
// const game = new TicTacToe(3)
// console.log(game.displayRows())

// Uncomment the code below to display the rows separates by dashes.
// const game = new TicTacToe()
// console.log(game.displayBoard())
