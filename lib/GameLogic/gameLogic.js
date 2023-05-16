export class GameLogic {
    constructor(board, currentPlayerToken) {
        this.board = board;
        this.playerToken = currentPlayerToken;
    };
    
    // public getWinningToken(): String || null
    getWinningToken() {
        return this.containsWinningRow() ? this.playerToken : null;
    };

    // public containsWinningRow(): Boolean
    containsWinningRow() {
        return this.#findWinningRow().length === this.board.columnTotal;
    };

    // public containsWinningColumn(): Boolean
    containsWinningColumn() {
        return this.#findWinningColumn().length === this.board.rowTotal;
    };
    
    // public detectDiagonalWin(): Boolean
    detectDiagonalWin() {
        return this.#findDiagonalTokens().length === this.board.rowTotal;
    };

    // private #isWinner(tokenArr: Array): Boolean
    #isWinner(tokenArr) {
        return tokenArr.join('') === this.playerToken.repeat(this.board.columnTotal);
    }; 

    // private #findWinningRow(): Array
    #findWinningRow() {
        const winningRow = (rowArr) => this.#isWinner(rowArr)
        return this.board.cells.filter(winningRow).flat();
    };
    
    // private #findWinningColumn(): Array
    #findWinningColumn() {
        const winningColumn = () => this.#isWinner(this.#findColumns());
        return this.board.cells.filter(winningColumn);
    };

    // private #findColumns(): Array
    #findColumns() {
        let columnArr = [];
        for(let col = 0; col < this.board.columnTotal; col++) {  
            for(let row = 0; row < this.board.rowTotal; row++) { 
                columnArr.push(this.board.cells[row][col]);
            };      
        };
        return columnArr; 
    };   

    // private getDiagonalWinArr(diagonalCombinationArr: Array): Array || Boolean
    #findDiagonalWin(diagonalCombinationArr) {
        return diagonalCombinationArr.join('') === this.token.repeat(this.board.rowTotal) ? diagonalCombinationArr : false;
    };

    // private #findDiagonalTokens(): Array
    #findDiagonalTokens() {
        const mainDiagonalTokens = [];
        const counterDiagonalTokens = [];
        this.board.cells.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => {
                this.#mainDiagonalIndex(rowIdx, colIdx) ? mainDiagonalTokens.push(row[colIdx]) : '';
                this.#counterDiagonalIndex(rowIdx, colIdx) ? counterDiagonalTokens.push(row[colIdx]) : '';
            });
        });
        return this.#findDiagonalWin(mainDiagonalTokens) || this.#findDiagonalWin(counterDiagonalTokens);
    };

    // private mainDiagonalTokenSearch(rowIndex: Number, columnIndex: Number): Boolean
    #mainDiagonalIndex(rowIndex, columnIndex) {
        return columnIndex === rowIndex;
    };

    // private counterDiagonalTokenSearch(rowIndex: Number, columnIndex: Number): Boolean
    #counterDiagonalIndex(rowIndex, columnIndex) {
        return columnIndex === this.#calculateCounterDiagonalIndices(rowIndex);
    };

    // private calculateCounterDiagonalIndices(rowIndex: Number): Number
    #calculateCounterDiagonalIndices(rowIndex) {
        return Math.abs(rowIndex - (this.board.columnTotal - 1));
    };
};
