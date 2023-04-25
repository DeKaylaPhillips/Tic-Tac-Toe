import { Token } from '../../lib/Token/token';

describe('Token', () => {

    let token;

    beforeEach(() => {
        token = new Token('X')
    });

    test('will accept a single character string to represent a player\'s token', () => {
        const playerToken = token.player
        expect(playerToken).toBe('X')
    });
});