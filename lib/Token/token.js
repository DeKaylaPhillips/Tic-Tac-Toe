export class Token {
    constructor(token) {
        this.player = this.#validateToken(token) ? token : null;
    };

    #validateToken(token) {
        return this.#isString(token) && this.#isValidLength(token)
    };

    #isString(token) {
        return typeof token === 'string';
    };

    #isValidLength(token) {
        return token.length === 1;
    };
};