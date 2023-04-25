export class Token {
    constructor(token) {
        this.playerToken = this.#validateToken(token) ? token : null;
    };
    
    getToken() {
        return this.playerToken;
    };

    #validateToken(token) {
        return this.#isString(token) && this.#isValidLength(token);
    };

    #isString(token) {
        return typeof token === 'string';
    };

    #isValidLength(token) {
        return token.length === 1;
    };
};