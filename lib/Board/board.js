export class Board {
    constructor(rows = 3, columns = 3) {
        this.rowTotal = rows;
        this.columnTotal = columns;
        this.cells = new Array(this.rowTotal).fill('').map(() => new Array(this.columnTotal).fill(''));
    }

    getCells() {
        return this.cells;
    };

};

export class Display {
    constructor(board) {
        this.board = board;
        this.boardDisplay = '';
        this.rowSeparator = ('- ').repeat(7);
        this.assembleBoard()
    };

    assembleBoard() {

        let board = []; 

        for (let row = 0; row < this.board.cells.length; row++) {
            let rows = [];

            for (let col = 0; col < this.board.columnTotal; col++) {
                rows.push(this.formatCells(this.board.getCells()[row][col], col));
            };

            board.push(rows.join(' '));
            row < this.board.cells.length - 1 ? board.push(this.rowSeperator) : '';
        };
        this.boardDisplay = board.join('\n');
    };

    formatCells(cell, col) {

        const format1 = `${cell} |`;
        const format2 = `${cell} `;

        return col < this.board.columnTotal - 1 ? format1.padStart(4) : format2;
    };

    getBoard() {
        return this.boardDisplay;
    };
};





