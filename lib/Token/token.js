export class Token {
    constructor(token) {
        this.playerToken = this.#validateToken(token) ? token : null;
    };
    
    // public getToken(): string
    getToken() {
        return this.playerToken;
    };

    // private validateToken(token: string): boolean
    #validateToken(token) {
        return this.#isString(token) && this.#isValidLength(token);
    };
    // private isString(token: string): boolean
    #isString(token) {
        return typeof token === 'string';
    };

    // private isValidLength(token: string): boolean
    #isValidLength(token) {
        return token.length === 1;
    };
};