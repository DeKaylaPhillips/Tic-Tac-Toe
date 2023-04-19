export class Display {
    constructor(board) {
        this.board = board;
        this.boardDisplay = '';
        this.rowSeparator = ('- ').repeat(7);
        this.assembleBoard();
    };

    assembleBoard(divider) { 
        const line = (divider === undefined) ? `\n${this.rowSeparator}\n` : `\n`
        const formattedBoard = this.board.getCells().map((rows) => (
            rows.map((cell, col) => this.formatCells(cell, col)).join(' '))
        );
        this.boardDisplay = formattedBoard.join(`${line}`);
    };

    formatCells(cell, col) {
        const format1 = `${cell} |`;
        const format2 = `${cell} `;

        return col < this.board.columnTotal - 1 ? format1.padStart(4) : format2;
    };

    printBoard() {
        return this.boardDisplay;
    };
};