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
        this.display.output(this.prompts.getWelcomePrompt());
        this.display.output(this.board.toString());
        this.display.output(this.prompts.getPlaceTokenPrompt());

        while (!logic.getWinningToken()) {
            this.display.output(this.board.toString()); 
            this.display.output(this.prompts.getPlaceTokenPrompt());
            this.display.output(this.board.toString()); 
        };
    };
};

const board = new Board();
const display = new Display();
const token = new Token('X').getToken();
const logic = new GameLogic(board, token);
const prompts = new UserPrompts();
const game = new TicTacToe(board, display, logic, token, prompts);

game.run();