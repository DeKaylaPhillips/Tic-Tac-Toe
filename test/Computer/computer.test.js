import { Computer } from '../../lib/Computer/computer'
import { Token } from '../../lib/Token/token';
import { Board } from '../../lib/Board/board';

describe('Computer', () => {
    const player1 = new Token('X');
    const player2 = new Token('O');
    const computer = new Computer(player1, player2);

    test('will return the current player\'s token object', () => {
        const firstMove = computer.getCurrentPlayerTokenObj();
        expect(firstMove).toEqual({"playerToken": "X"})
    });

    test('will return the opponent player\'s token object after the players are alternated', () => {
        const firstMove = computer.getCurrentPlayerTokenObj();
        computer.alternatePlayers()
        const secondMove = computer.getCurrentPlayerTokenObj();
        expect(firstMove).toEqual({"playerToken": "X"});
        expect(secondMove).toEqual({"playerToken": "O"});
    });
});