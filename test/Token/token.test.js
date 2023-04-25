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
            null;
        });

        test('will return a false boolean if a token is NOT a string', () => {
            null;
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