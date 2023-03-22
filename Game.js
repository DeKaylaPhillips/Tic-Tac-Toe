// NOTE: THIS IS A WALKING SKELETON DRAFT.

// user instructions on startup
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
let positions = {
    A1: {position: board[0][0], active: false},
    A2: {position: board[0][1], active: false},
    A3: {position: board[0][2], active: false},
    B1: {position: board[1][0], active: false},
    B1: {position: board[1][1], active: false},
    B2: {position: board[1][2], active: false},
    B3: {position: board[1][3], active: false},
    C1: {position: board[2][0], active: false},
    C2: {position: board[2][1], active: false},
    C3: {position: board[2][2], active: false},
}

// hard-coded function to handle user input and display the updated board

const update_board = (selection) => {
    /* create functionality here to:
        > add a user's marker to the board in the selected position
        > handle cases when a position on the board is occupied i.e. not an empty string
        > handle cases when no more positions are available/there are no more winning moves 
        > identify a winning player
    */
}
update_board('A1')






