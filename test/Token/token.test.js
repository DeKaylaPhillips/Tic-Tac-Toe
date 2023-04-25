import { Token } from '../../lib/Token/token';

describe('Token Class', () => {

    describe('Token constructor', () => {
        test('will accept a token that is a string', () => {
            const token = new Token('X')
            const tokenValue = token.player
            expect(typeof tokenValue).toBe('string')
        });  

        test('will accept a token that is a length of 1', () => {
            // test that the token has a length of 1
        });

        test('will return a validated token', () => {
            // test that the proper token value is returned if return
        });
    });
});

    