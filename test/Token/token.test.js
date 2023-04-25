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

    describe('validateToken()', () => {
        test('will return true if a token is a string with a length of 1 character', () => {
            token = new Token('ABC')

            const error = token.validateToken(token)
        
            expect(error).toBe('Error: Invalid player token.')
        });
    });
    
});