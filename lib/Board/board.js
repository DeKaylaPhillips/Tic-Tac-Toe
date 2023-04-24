export class Board {
    constructor(rows = 3, columns = 3) {
        this.rowTotal = rows;
        this.columnTotal = columns;
        this.rowSeparator = ('- ').repeat(7);
        this.cells = new Array(this.rowTotal).fill('').map(() => new Array(this.columnTotal).fill(''));
    };

    /* getCells():Array */
    getCells() {
        return this.cells;
    };

    /* toString():String */
    toString() {
        return this.assembleBoard();
    };

private 

    /* assembleBoard(divider:String | undefined):String */
    assembleBoard(divider) { 
        const line = (divider === undefined) ? `\n${this.rowSeparator}\n` : `\n`;
        return this.getCells().map((rows) => (
            rows.map((cell, col) => this.formatCells(cell, col)).join(' '))
        ).join(`${line}`);
    };

    /* formatCells(cell:String, col:Number):String */
    formatCells(cell, col) {
        const format1 = `${cell} |`;
        const format2 = `${cell} `;

        return col < this.columnTotal - 1 ? format1.padStart(4) : format2;
    };
};


