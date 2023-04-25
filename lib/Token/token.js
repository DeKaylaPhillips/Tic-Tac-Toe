export class Token {
    constructor(token) {
        this.player = token;
    };

    isString() {
        return typeof this.player === 'string';
    };

    isValidLength() {
        null;
    };
};