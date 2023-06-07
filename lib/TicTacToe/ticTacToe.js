import { Board } from '../Board/board.js'
import { Display } from '../Display/display.js'
import { UserPrompts } from '../UserPrompts/userPrompts.js';
import { GameLogic } from '../GameLogic/gameLogic.js';
import { Token } from '../Token/token.js';
import { Computer } from '../Computer/computer.js';
export class TicTacToe {
    constructor(board, display, logic, computer, prompts) {
        this.board = board;
        this.display = display;
        this.logic = logic;
        this.computer = computer;
        this.prompts = prompts;
    };

    /* run():String */
    run() {
        this.display.output(this.prompts.getWelcomePrompt());
        this.display.output(this.board.toString());
        while (!this.logic.getWinningToken()) {
            if (this.board.isFilledWithTokens()) { return this.display.output(this.prompts.getGameOverPrompt()) };
            this.display.output(this.prompts.getPlaceTokenPrompt());
            this.board.placeTokenInRandomPosition(this.computer);
            this.display.output(this.board.toString());
        };
        this.display.output(this.prompts.getGameOverPrompt());
        this.display.output(this.logic.getWinningToken());  
    };
};

const board = new Board();
const display = new Display();
const player1 = new Token('X');
const player2 = new Token('O');
const computer = new Computer(player1, player2);
const logic = new GameLogic(board, computer.player1, computer.player2);
const prompts = new UserPrompts();
const game = new TicTacToe(board, display, logic, computer, prompts);

game.run();