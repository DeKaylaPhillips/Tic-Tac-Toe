export class Token {
    constructor(token) {
        this.playerToken = this.#validateToken(token) ? token : null;
    };
    
    // public getToken(): String
    getToken() {
        return this.playerToken;
    };

    // private validateToken(token: String): Boolean
    #validateToken(token) {
        return this.#isString(token) && this.#isValidLength(token);
    };
    // private isString(token: String): Boolean
    #isString(token) {
        return typeof token === 'string';
    };

    // private isValidLength(token: String): Boolean
    #isValidLength(token) {
        return token.length === 1;
    };
};