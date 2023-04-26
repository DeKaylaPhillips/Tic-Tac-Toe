export class Board {
    constructor(rows = 3, columns = 3) {
        this.rowTotal = rows;
        this.columnTotal = columns;
        this.rowSeparator = ('- ').repeat(7);
        this.cells = new Array(this.rowTotal).fill('').map(() => new Array(this.columnTotal).fill(''));
        this.token = '';
        this.position = '';
    };

    /* getCells():Array */
    getCells() {
        return this.cells;
    };

    getCellValue(position) {
        // let cellVal;

        // position < 0 || position > 9 ? null : '';
        // position <= 9 ? cellVal = this.cells[0][position - 7] : '';
        // position <= 6 ? cellVal = this.cells[0][position - 4] : '';
        // position <= 3 ? cellVal = this.cells[0][position - 1] : '';
       
        // return cellVal
    };

    placeToken(token, position) {
        this.token = token
        this.position = position
    };

    /* toString():String */
    toString() {
        return this.assembleBoard();
    };

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


