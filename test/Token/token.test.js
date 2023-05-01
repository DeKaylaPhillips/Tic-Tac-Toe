import { Token } from '../../lib/Token/token';

describe('Token Class', () => {
    let token;
    
    beforeEach(() => {
        token = new Token('X')
    });
    
    describe('Token constructor', () => {

        test('will accept and assign the player\'s value to a validated token value', () => {
            const playerToken = token.playerToken
            expect(playerToken).toBe('X')
        });
        
        test('will assign the player a null value when a token is invalid', () => {
            const token = new Token('XO')
            const playerToken = token.playerToken
            expect(playerToken).toBe(null)
        }); 
    });

    describe('getToken()', () => {

        test('will return a string token with a length of 1', () => {
            const playerToken = token.getToken()
            expect(playerToken).toBe('X')
        });
        
    });
});