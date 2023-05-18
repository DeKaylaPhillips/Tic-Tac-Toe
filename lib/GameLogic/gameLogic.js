export class GameLogic {
    constructor(board, currentPlayerToken) {
        this.board = board;
        this.playerToken = currentPlayerToken;
    };
    
    // public getWinningToken(): String || null
    getWinningToken() {
        return this.containsWinningRow() ? this.playerToken : null;
    };
    
    // public containsWinningRow: Boolean
    containsWinningRow() {
        return this.#findWinningRow().length === this.board.rowTotal;
    };

    // public containsWinningColumn(): Boolean
    containsWinningColumn() {
        return this.#findWinningColumn().length === this.board.rowTotal;
    };
    
    // public containsWinningMainDiagonal(): Boolean
    containsWinningMainDiagonal() {
        return this.#findWinningMainDiagonal().length === this.board.rowTotal;
    };

    // public containsWinningCounterDiagonal(): Boolean
    containsWinningCounterDiagonal() {
        return this.#findWinningCounterDiagonal().length === this.board.rowTotal;
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

    // private findWinningMainDiagonal(): Array || Boolean
    #findWinningMainDiagonal() { 
        const mainDiagonalArr = () => this.#isWinner(this.#findMainDiagonal()); 
        return mainDiagonalArr ? this.#findMainDiagonal() : [];
    };
    
    // private findWinningCounterDiagonal(): Array || Boolean
    #findWinningCounterDiagonal() {
        const counterDiagonalArr = () => this.#isWinner(this.#findCounterDiagonal());
        return counterDiagonalArr() ? this.#findCounterDiagonal() : [];
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

    #findMainDiagonal() {
        const mainDiagonalTokens = [];
        this.board.cells.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => {
                if (this.#mainDiagonalIndex(rowIdx, colIdx)) { mainDiagonalTokens.push(row[colIdx]) };
            });
        });
        return mainDiagonalTokens;
    };

    #findCounterDiagonal() {
        const counterDiagonalTokens = [];
        this.board.cells.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => {
                if (this.#counterDiagonalIndex(rowIdx, colIdx)) { counterDiagonalTokens.push(row[colIdx]) };
            });
        });
        return counterDiagonalTokens;
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
