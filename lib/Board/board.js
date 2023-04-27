export class Board {
    constructor(rows = 3, columns = 3) {
        this.rowTotal = rows;
        this.columnTotal = columns;
        this.rowSeparator = ('- ').repeat(7);
        this.cells = new Array(this.rowTotal).fill('').map(() => new Array(this.columnTotal).fill(''));
    };

    // public toString(): String 
    toString() {
        return this.#assembleBoard();
    };

    // public getCells(): Array 
    getCells() {
        return this.cells;
    };

    // public getRow(): Number
    getRow(position) {
        return this.#findRow(position);
    };

    // public getColumn(): Number
    getColumn(position) {
        return this.#findColumn(position);
    };

    // public placeToken(token: String, position: Number): void 
    placeToken(token, position) {
        this.#validateCell(position) ? 
            this.cells[this.getRow(position)][this.getColumn(position)] = token
        : 
            this.cells = this.cells;
    };

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
    #validateCell(position) {
        const flatBoard = this.cells.flat(1);
        return flatBoard[position - 1] === '' ? true : false; 
    };

    // private findRow(position: Number): Number
    #findRow(position) { 
        const rowFinder = [
            {'positionMax': 3, 'rowIdx': 0}, 
            {'positionMax': 6, 'rowIdx': 1}, 
            {'positionMax': 9, 'rowIdx': 2}
        ]

        for (let row of rowFinder) {
            if (position <= row.positionMax) {
                return row.rowIdx;
            };
        }; 
    };

    // private findColumn(position: Number): Number
    #findColumn(position) {
        const colFinder = [
            {'row': 0, 'column': position - 1},
            {'row': 1, 'column': position - 4}, 
            {'row': 2, 'column': position - 7}
        ]  
        return colFinder[this.#findRow(position)].column;
    };
};