export class Computer {
    constructor(token1, token2) {
        this.player1 = token1,
        this.player2 = token2,
        this.currentPlayer = this.player1
    };

    // public getCurrentPlayerTokenObj(): Token
    getCurrentPlayerTokenObj() {
        return this.currentPlayer;   
    };

    // public alternatePlayers(): void
    alternatePlayers() {
        this.currentPlayer === this.player1 ? this.currentPlayer = this.player2 : this.currentPlayer = this.player1;
    };
};