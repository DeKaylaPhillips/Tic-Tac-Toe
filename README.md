# TIC-TAC-TOE (COMMAND LINE APPLICATION)

Simple command line application that allows two human players to compete in the classic game of Tic-Tac-Toe.

## HOW TO PLAY

This game allows for two human players.

PLAYER 1 = X

PLAYER 2 = O

You will be given a board with three columns and three rows.

Each row and column can be identified and selected using the numbers 1-9, inclusive.
Every position on the board is numbered, ordered, and can be read from left to right.

*See example board below for position numbering:*

```text
  1 | 2 | 3
- - - - - - -
  4 | 5 | 6  
- - - - - - -
  7 | 8 | 9          
```

Each player will have the chance to alternate between turns in the game as they place their designated markers on the board until a winner is detected, or no more moves are available.
If a player makes a move to a position on the board that is *not* available and is occupied by their opponent, the player will be give the chance to try again by selecting an empty, valid position on the board.

The winning player will have adjacently aligned three of their designated markers along the board - either horizontally, vertically, or diagonally.

***Horizontal***

```text
    |   |
- - - - - - -
  X | X | X  
- - - - - - -
    |   |           
```

***Diagonal***

```text
    |   | X
- - - - - - -
    | X |    
- - - - - - -
  X |   |
```

***Vertical***

```text
    | X |
- - - - - - -
    | X |  
- - - - - - -
    | X |
```

In the event of a tie where no more moves are possible, the users will be given the option to restart or exit the game.

## SETUP/INSTALLATIONS

- Node Version: v18.15.0
- npm Version: 9.5.0
- Jest Version: 29.5.0 (should be pre-installed as a devDependency in package.json file)

## USAGE

To play the game, run the command:
`node Game.js`

To run the tests, run the command:
`npm test`
