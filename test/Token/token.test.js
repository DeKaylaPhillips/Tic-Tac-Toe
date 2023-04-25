import { Token } from '../../lib/Token/token';

describe('Token Class', () => {

    describe('Token constructor', () => {
        test('will accept a string to represent a player\'s token', () => {
            const token = new Token('X')
            const playerToken = token.player
            expect(playerToken).toBe('X')
        });  

        test('will accept a token that is a string', () => {

        }); 

        test('will accept a token that is a length of 1', () => {

        });

        test('will return a validated token', () => {

        });
    });
});

    