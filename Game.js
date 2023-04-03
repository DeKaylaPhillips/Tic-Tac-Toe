export class Board {
    constructor(rows=3) {
        this.rowTotal = rows
        this.row = "    |   |    "
        this.line = "- - - - - - -"
        this.cells = new Array(9).fill('')
    };

    getRows(divider) { // business logic
        const lineSeparator = (divider === undefined) ? `${this.line}\n` : divider
        const arrayOfRows = new Array(this.rowTotal).fill(`${this.row}\n`)
        return arrayOfRows.join(lineSeparator)
    };

    printBoard() { // printing logic
       return `  ${this.cells[0]}  |  ${this.cells[1]}  |  ${this.cells[2]}  \n${this.line}\n  ${this.cells[3]}  |  ${this.cells[4]}  |  ${this.cells[5]}  \n${this.line}\n  ${this.cells[6]}  |  ${this.cells[7]}  |  ${this.cells[8]}  `
    };
};
