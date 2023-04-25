import { Token } from '../../lib/Token/token';

describe('Token Class', () => {

    describe('Token constructor', () => {
        test('will accept a token that is a string', () => {
            const token1 = new Token('X')
            const token2 = new Token(1)

            const tokenValue1 = token1.player
            const tokenValue2 = token2.player

            expect(typeof tokenValue1).toBe('string')
            expect(typeof tokenValue2).not.toBe('string')
        });  

        test('will accept a token that is a length of 1', () => {
                // test that the token has a length of 1
        });

        test('will return a validated token', () => {
            // test that the proper token value is returned if return
        });
    });
});

    