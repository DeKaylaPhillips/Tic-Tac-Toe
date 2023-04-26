export class Board {
    constructor(rows = 3, columns = 3) {
        this.rowTotal = rows;
        this.columnTotal = columns;
        this.rowSeparator = ('- ').repeat(7);
        this.cells = new Array(this.rowTotal).fill('').map(() => new Array(this.columnTotal).fill(''));
        this.token = '';
        this.position = '';
    };

    // getCells(): Array 
    getCells() {
        return this.cells;
    };
    
    // toString(): String 
    toString() {
        return this.#assembleBoard();
    };

    // getCellValue(position) { // no longer useful for getting cell value - use logic to update instead and vlidate above
    //     // let cellVal;

    //     // position <= 9 ? cellVal = this.cells[0][position - 7] : '';
    //     // position <= 6 ? cellVal = this.cells[1][position - 4] : '';
    //     // position <= 3 ? cellVal = this.cells[2][position - 1] : '';
       
    //     // return cellVal
    // };

    // private assembleBoard(divider: String | undefined): String
    #assembleBoard(divider) { 
        const line = (divider === undefined) ? `\n${this.rowSeparator}\n` : `\n`;
        return this.getCells().map((rows) => (
            rows.map((cell, col) => this.#formatCells(cell, col)).join(' '))
        ).join(`${line}`);
    };

    // private formatCells(cell: String, col: Number): String 
    #formatCells(cell, col) {
        const format1 = `${cell} |`;
        const format2 = `${cell} `;

        return col < this.columnTotal - 1 ? format1.padStart(4) : format2;
    };

    // private validateCells(position: Number): Boolean
    #validateCells(position) {
        const flatBoard = this.cells.flat(1);
        return flatBoard[position - 1] === '' ? true : false; 
    };
};

