import { Token } from '../../lib/Token/token';

describe('Token Class', () => {

    describe('Token constructor', () => {
        test('will accept a string to represent a player\'s token', () => {
            const token = new Token('X')
            const playerToken = token.player
            expect(playerToken).toBe('X')
        });    
    });

    describe('isString()', () => {
        test('will return a true boolean if a token is a string', () => {
            const token1 = new Token('X')
            const token2 = new Token('/.ABC')

            const stringValidator1 = token1.isString()
            const stringValidator2 = token2.isString()

            expect(stringValidator1).toBeTruthy()
            expect(stringValidator2).toBeTruthy()
        });

        test('will return a false boolean if a token is NOT a string', () => {
            const token1 = new Token(1)
            const token2 = new Token([])

            const stringValidator1 = token1.isString()
            const stringValidator2 = token2.isString()

            expect(stringValidator1).toBeFalsy()
            expect(stringValidator2).toBeFalsy()
        });  
    });
    
    describe('isValidLength()', () => {
        test('will return a true boolean if a token\'s length is equal to 1', () => {
            const token1 = new Token('X');
            const token2 = new Token('O');

            const lengthValidator1 = token1.isValidLength();
            const lengthValidator2 = token2.isValidLength();

            expect(lengthValidator1).toBeTruthy();
            expect(lengthValidator2).toBeTruthy();
        });
        
        test('will return a false boolean if a token\'s length is NOT equal to 1', () => {
            const token1 = new Token('XOX');
            const token2 = new Token('ABC'); 
            
            const lengthValidator1 = token1.isValidLength();
            const lengthValidator2 = token2.isValidLength();

            expect(lengthValidator1).toBeFalsy();
            expect(lengthValidator2).toBeFalsy();
        });
    });
});