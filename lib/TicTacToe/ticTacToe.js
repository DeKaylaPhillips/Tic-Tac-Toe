import { Board } from '../Board/board.js'
import { Display } from '../Display/display.js'
import { UserPrompts } from '../UserPrompts/userPrompts.js';

export class TicTacToe {
    constructor(display) {
        this.display = display;
    };

    /* run():String */
    run() {
        this.display.output(new Board().toString())
    };
};


const display = new Display(new Board());
const game = new TicTacToe(display);

display.output(new UserPrompts().getWelcomePrompt());
game.run();