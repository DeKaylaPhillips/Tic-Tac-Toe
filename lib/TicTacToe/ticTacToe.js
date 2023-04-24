import { Board } from '../Board/board.js'
import { Display } from '../Display/display.js'

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
game.run();