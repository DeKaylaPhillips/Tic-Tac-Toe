# TIC-TAC-TOE (COMMAND LINE APPLICATION)

Simple command line application that allows two human players to compete in the classic game of Tic-Tac-Toe.

## HOW TO PLAY

This game allows for two human players.

PLAYER 1 = X
PLAYER 2 = O

You will be given a board with three columns and three rows.

Each row is denoted by the letters 'A', 'B', and 'C' from top (first row on the board) to bottom (last row on the board).
Each column is denoted by the numbers '1', '2', and '3' from left to right.

Each player will have the chance to alternate between turns in the game as they place their designated markers on the board until a winner is selected, or no more moves are available.
If a player makes a move to a spot on the board that is *not* available and occupied by their opponent, the player will be give the chance to try again by selecting an empty spot on the board.

The winning player will have adjacently aligned three of their designated markers along the board - either horizontally, vertically, or diagonally.

***Horizontal***

`   |   |   `
`- - - - - - -`
` X | X | X  `
`- - - - - - -`
`   |   |   ` 

***Diagonal***

    |   | X
- - - - - - -
    | X |    
- - - - - - -
  X |   |

***Vertical***

    | X |
- - - - - - -
    | X |  
- - - - - - -
    | X |

In the event of a tie where no more moves are possible, the users will be given the option to restart or exit the game.

