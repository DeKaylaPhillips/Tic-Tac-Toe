export class UserPrompts {
    constructor() {}

    // public getWelcomePrompt(): String
    getWelcomePrompt() {
        return '\nWelcome to the classic game of Tic-Tac-Toe!\n'
    };

    // public getPlaceTokenPrompt(): String
    getPlaceTokenPrompt() {
        return '\nPlease place a token on the board (must be between 1-9).\n'
    };

    // public getGameOverPrompt(): String
    getGameOverPrompt() {
        return '\n|| --- GAME OVER! --- ||\n'
    };
};