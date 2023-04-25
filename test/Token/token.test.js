import { Token } from '../../lib/Token/token';

describe('Token Class', () => {
    let token;
    
    beforeEach(() => {
        token = new Token('X')
    });

    describe('Token constructor', () => {
        test('will return a validated token', () => {
            const playerToken = token.player
            expect(playerToken).toBe('X')
        });
        
        test('will return null when a token is invalid', () => {
            const token = new Token('XO')
            const playerToken = token.player
            expect(playerToken).toBe(null)
        });

        test('will accept a token that is a string', () => {
            const tokenType = typeof token.player
            expect(tokenType).toBe('string')
        });  

        test('will accept a token that is a length of 1', () => {
            const tokenLength = token.player.length
            expect(tokenLength).toEqual(1)
        });   
    });
});