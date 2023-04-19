export class Board {
    constructor(rows = 3, columns = 3) {
        this.rowTotal = rows;
        this.columnTotal = columns;
        this.cells = new Array(this.rowTotal).fill('').map(() => new Array(this.columnTotal).fill(''));
    };

    getCells() {
        return this.cells;
    };
};


