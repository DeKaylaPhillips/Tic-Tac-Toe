export class Token {
    constructor(token) {
        this.player = token;
    };

    validateString() {
        return typeof this.player === 'string';
    };

    validateLength() {
        null;
    };
};