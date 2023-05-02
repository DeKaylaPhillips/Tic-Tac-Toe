import { GameLogic } from "../../lib/GameLogic/gameLogic";
import { Board } from "../../lib/Board/board";
import { Token } from "../../lib/Token/token";

describe('GameLogic', () => {

    let board;
    let playerToken;
    let game;

    beforeEach(() => {
        board = new Board();
        playerToken = new Token('X').getToken();
        game = new GameLogic(board, playerToken);
    });

    describe('isWin()', () => {
        test('will return a true boolean value when a row filled with the same token is detected', () => {
            board.placeToken(playerToken, 1);
            board.placeToken(playerToken, 2);
            board.placeToken(playerToken, 3);

            const gameWinDetected = game.detectRowWin();
            expect(gameWinDetected).toBeTruthy();
        });

        test('will return a false boolean value when a row filled with the same token is not detected', () => {
            board.placeToken(playerToken, 1);
            board.placeToken(playerToken, 2);
            board.placeToken(playerToken='O', 3);

            const gameWinDetected = game.detectRowWin();
            expect(gameWinDetected).toBeFalsy(); 
        });
    });
});