import { Token } from '../../lib/Token/token';

describe('Token Class', () => {

    describe('Token constructor', () => {
        test('will accept a string to represent a player\'s token', () => {
            const token = new Token('X')
            const playerToken = token.player
            expect(playerToken).toBe('X')
        });    
    });

    describe('validateString()', () => {
        test('will return a true boolean if a token is a string', () => {
            const token1 = new Token('X')
            const token2 = new Token('/.ABC')

            const validation1 = token1.validateString()
            const validation2 = token2.validateString()

            expect(validation1).toBeTruthy()
            expect(validation2).toBeTruthy()
        });

        test('will return a false boolean if a token is NOT a string', () => {
            const token1 = new Token(1)
            const token2 = new Token([])

            const validation1 = token1.validateString()
            const validation2 = token2.validateString()

            expect(validation1).toBeFalsy()
            expect(validation2).toBeFalsy()
        });  
    });
    
    describe('validateLength()', () => {
        test('will return a true boolean if a token\'s length is equal to 1', () => {
            null;
        });
        
        test('will return a false boolean if a token\'s length is NOT equal to 1', () => {
            null;
        });
    });
});