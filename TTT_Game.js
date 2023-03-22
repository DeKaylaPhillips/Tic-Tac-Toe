const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const gameInstructions = () => {
    const instructions = console.log('\n------ HOW TO PLAY TIC-TAC-TOE ------\n',

        '\nPlayer 1 = "X"',
        '\nPlayer 2 = "O"',

        '\n\nThe game board has 3 ROWS and 3 COLUMNS.',

        '\n\nEach ROW is denoted by the letters A, B, and C in order from TOP to BOTTOM.',
        '\nEach COLUMN is denoted by the numbers 1, 2, and 3 from LEFT to RIGHT.',

        '\n\nSelect a position to place your marker within an available cell by entering the row letter and column number of the position you are selecting.',

        '\n\ni.e.)',

        '\n\tThe second column of the second row in the game board can be accessed by entering the row letter "B" and the column number "2" as "B2".',
        '\n\tThe first column of the third row in the game board can be accessed by entering the row letter "C" and the column number "1".',

        '\n\nEach player will alternate turns placing their designated marker one after another on the board until a player has successfully placed 3 adjacent markers on the board --> XXX or OOO',

        '\n\nIf a player selects a position that is already taken, or selects a position that doesn\'t exist, the player will be prompted to choose a different position.',
        '\nA winning player will have placed 3 of their markers in a row, either horizontally, vertically, or diagonally.',
        '\nIn the event of a tie, or no more spaces to move, the game will end.',
        '\n')

    return instructions
}

let board = [['', '', ''], ['', '', ''], ['', '', '']]

let marker = { player1: 'X', player2: 'O' }

let cells = {
    A1: {row: 0, col: 0, active: false},
    A2: {row: 0, col: 1, active: false},
    A3: {row: 0, col: 2, active: false},

    B1: {row: 1, col: 0, active: false},
    B2: {row: 1, col: 1, active: false},
    B3: {row: 1, col: 2, active: false},

    C1: {row: 2, col: 0, active: false},
    C2: {row: 2, col: 1, active: false},
    C3: {row: 2, col: 2, active: false},
};

const display_board = () => {
    for (let cell in board) {
        console.log(board[cell])
    }
}

const updateBoard = () => {

}

rl.question("\nWelcome to the game of Tic-Tac-Toe! Ready to play?\n\nEnter 'Y' to begin. Enter 'N' to exit the game.\n", (answer) => {

    const startup = (answer) => {
        if (answer.toLowerCase() === 'y') {
            gameInstructions() // execute code here to give instructions on how to play the game; create an instruction function
            console.log('Here is your board:\n')
            display_board();
            console.log('\nPlayer 1 will go first.')
            playerMoves()
        } else if (answer.toLowerCase() === 'n') {
            console.log('\nExiting the game. Goodbye! :)')
            return process.exit();
        } else {
            console.log('\nSorry, invalid input! Try again!')
            return process.exit();
        }
    }

    startup(answer)
 
    rl.close()
})

const playerMoves = () => {
    rl.question('Select a cell on the board:\n', (move) => {
        
        console.log(`You selected '${move}'.`)

        
        rl.close()
    })
}    

//     let player1 = true;
//     let player2 = false;
//     // let selection = cells[playerInput];

// rl.question('Select a cell to place your marker on the board', (playerInput) => {
//     let selection = cells[playerInput];

//     console.log(selection)

//     // while (true) {
//     //     if (player1 && selection && board[selection.row][selection.col] === '') {
//     //         board[selection.row][selection.col] = marker.player1;
//     //         display_board()
//     //         player1 = false;
//     //         return player2 = true
//     //     } else if (player1 && selection && board[selection.row][selection.col] !== '') {
//     //         console.log('Please choose an empty cell!')
//     //         return playerMoves()
//     //     }
//     // } 
    
//     rl.close()
// });

