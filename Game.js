// NOTE: THIS IS A WALKING SKELETON DRAFT.

// user instructions on startup
/*
console.log(
'\nWELCOME TO THE GAME OF TIC-TAC-TOE!\n',

'\n------ HOW TO PLAY ------\n',

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
*/

// initialize variable 'board' as a nested array containing 3 rows with 3 columns within each row
let board = [['','',''], ['','',''], ['','','']]

// object that assigns each player a default marker of either 'X' or 'O'
let marker = {player1: 'X', player2: 'O'}


// create a 3x3 stacked board
const display_board = () => {
    for (let cell of board) {
        console.log(cell)
    }
}

// position identifier object
let cells = {
    A1: {row: 0, col: 0, active: false},
    A2: {row: 0, col: 1, active: false},
    A3: {row: 0, col: 2, active: false},

    B1: {position: [1][0], active: false},
    B2: {position: [1][1], active: false},
    B3: {position: [1][2], active: false},

    C1: {position: [2][0], active: false},
    C2: {position: [2][1], active: false},
    C3: {position: [2][2], active: false},
}

// hard-coded implementation to check access to specific board indices based on the cell object and update the values in the board
let input = 'A2' // <-- will delete this line and allow for interactivity in the console instead; will log a players input 
let selection = cells[input] // a players cell on the board can be found by looking for the key in the cells object that is the same as the user input 

// on a player's turn, if the player's cell selection is valid, and if their cell selection is also empty and not taken by another player, then that cell will be assigned the current player's marker
// the player who's turn is next will then input a selection, and their cell selection will be checked for validity and emptiness 
// if a player selects a cell that is neither valid, nor empty, the player should be prompted to then make another selection
if (selection) {
    board[selection.row][selection.col] = 'X'
}

display_board()

/*
if (cells[user_selection] && cells[user_selection].active === false) { // valid, empty cell was found if true
    console.log('empty, valid cell found.')
    console.log(cells[user_selection])
    console.log(cells[user_selection].position = 'X')
    console.log(board)
} else if (cells[user_selection] && cells[user_selection].active === true) {
    console.log('valid cell found, but already occupied so try again!')
} else {
    console.log('invalid cell selection')
}
*/

    /* create functionality here to:
        > add a user's marker to the board in the selected position
        > handle cases when a position on the board is occupied i.e. not an empty string
        > handle cases when no more positions are available/there are no more winning moves 
        > identify a winning player
    */







