import { Board } from '../Board/board.js'
import { Display } from '../Display/display.js'
import { UserPrompts } from '../UserPrompts/userPrompts.js';
import { GameLogic } from '../GameLogic/gameLogic.js';
import { Token } from '../Token/token.js';


export class TicTacToe {
    constructor(board, display, logic, token, prompts) {
        this.board = board;
        this.display = display;
        this.logic = logic;
        this.token = token;
        this.prompts = prompts;
    };

    /* run():String */
    run() {
        /* TODO: 
        Welcome the user to the game
        Display the board
        Ask user to place a token on the board

        loop until the game finds a winner
        exit out of function
        */
        this.display.output(this.prompts.getWelcomePrompt())
        this.display.output(this.board.toString())
        this.display.output(this.prompts.getPlaceTokenPrompt())

        let tokenPlacements = [1, 2, 4, 8, 5]
        while (!logic.getWinningToken()) {
            //do this
            // place a users token on the board
            this.display.output(this.board.toString()); // display the board again
            this.display.output(this.prompts.getPlaceTokenPrompt());// ask the user to place token
            // get last item from tokenPlacements
            // place token on position from item retrieved from token placements
            let lastTokenPosition = tokenPlacements.pop();
            // console.log(lastTokenPosition)
            board.placeToken(this.token, lastTokenPosition);
        }
    };
};

const board = new Board();
const display = new Display();
const token = new Token('X').getToken();
const logic = new GameLogic(board, token);
const prompts = new UserPrompts();
const game = new TicTacToe(board, display, logic, token, prompts);

game.run();