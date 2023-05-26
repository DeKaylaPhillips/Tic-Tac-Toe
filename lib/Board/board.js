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

    // public getColumnCells(): Array
    getColumnCells() {
        const columnArr = [];
        this.cells.forEach((col, colIdx) => {
            columnArr[colIdx] = [];
            col.forEach((row, rowIdx) => {
                columnArr[colIdx].push(this.cells[rowIdx][colIdx]);
            });
        });
        return columnArr;
    };

    // public getMainDiagonalCells(): Array
    getMainDiagonalCells() {
        const mainDiagonalTokens = [];
        this.cells.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => {
                this.#isMainDiagonalIndex(rowIdx, colIdx)
                    ? mainDiagonalTokens.push(row[colIdx])
                    : '';
            });
        });
        return mainDiagonalTokens;
    };

    // public getCounterDiagonalCells(): Array
    getCounterDiagonalCells() {
        const counterDiagonalTokens = [];
        this.cells.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => {
                this.#isCounterDiagonalIndex(rowIdx, colIdx)
                    ? counterDiagonalTokens.push(row[colIdx])
                    : '';
            });
        });
        return counterDiagonalTokens;
    };

    // public placeToken(token: Token, position: Number): void 
    placeToken(token, position) {
        this.#isValidCell(position)
            ? this.cells[this.#getRow(position)][this.#getColumn(position)] = token.getToken()
            : this.cells = this.cells;
    };

    // public isFilledWithTokens(): Boolean
    isFilledWithTokens() {
        let hasEmptyCells = false;
        const isEmptyCell = (row, col) => row[col] === ('');
        this.cells.forEach((row, col) => { isEmptyCell(row, col)
            ? hasEmptyCells = true
            : '';
        });
        return !hasEmptyCells;
    };

    // private #getRow(position: Number): Number
    #getRow(position) {
        return this.#getRowByPosition(position);
    };

    // private #getColumn(position: Number): Number
    #getColumn(position) {
        return this.#getColumnByPosition(position);
    };

    // private #assembleBoard(divider: String | undefined): String
    #assembleBoard(divider) {
        const line = (divider === undefined) ? `\n${this.rowSeparator}\n` : `\n`;
        return this.getCells().map((rows) => (
            rows.map((cell, col) => this.#formatCells(cell, col)).join(' '))
        ).join(`${line}`);
    };

    // private #formatCells(cell: String, col: Number): String 
    #formatCells(cell, col) {
        const format1 = `${cell} |`;
        const format2 = `${cell} `;
        return col < this.columnTotal - 1 ? format1.padStart(4) : format2;
    };

    // private #isValidCell(position: Number): Boolean
    #isValidCell(position) {
        const flatBoard = this.cells.flat(1);
        return flatBoard[position - 1] === '';
    };

    // private #getRowByPosition(position: Number): Number
    #getRowByPosition(position) {
        const rowFinder = [
            { 'positionMax': 3, 'rowIdx': 0 },
            { 'positionMax': 6, 'rowIdx': 1 },
            { 'positionMax': 9, 'rowIdx': 2 }
        ]

        for (let row of rowFinder) {
            if (position <= row.positionMax) {
                return row.rowIdx;
            };
        };
    };

    // private getColumnByPosition(position: Number): Number
    #getColumnByPosition(position) {
        const colFinder = [
            { 'row': 0, 'column': position - 1 },
            { 'row': 1, 'column': position - 4 },
            { 'row': 2, 'column': position - 7 }
        ];
        return colFinder[this.#getRowByPosition(position)].column;
    };

    // private mainDiagonalTokenSearch(rowIndex: Number, columnIndex: Number): Boolean
    #isMainDiagonalIndex(rowIndex, columnIndex) {
        return columnIndex === rowIndex;
    };

    // private counterDiagonalTokenSearch(rowIndex: Number, columnIndex: Number): Boolean
    #isCounterDiagonalIndex(rowIndex, columnIndex) {
        return columnIndex === this.#calculateCounterDiagonalIndices(rowIndex);
    };

    // private calculateCounterDiagonalIndices(rowIndex: Number): Number
    #calculateCounterDiagonalIndices(rowIndex) {
        return Math.abs(rowIndex - (this.columnTotal - 1));
    };
};