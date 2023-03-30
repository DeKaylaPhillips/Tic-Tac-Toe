export class Game {
    constructor(rows=3) {
        this.rowTotal = rows
        this.row = "    |   |    "
        this.line = "- - - - - - -"
    }

    getRows(divider) {
        const lineSeparator = (divider === undefined) ? `${this.line}\n` : divider
        const arrayOfRows = new Array(this.rowTotal).fill(`${this.row}\n`)
        return arrayOfRows.join(lineSeparator)
    }
}

const game = new Game()
console.log(game.getRows(""))
