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
        
        board.placeToken(playerToken, 1);
        board.placeToken(playerToken, 2);
    });

    describe('detectRowWin()', () => {
        test('will return a true boolean value when a row filled with the same token is detected', () => {
            board.placeToken(playerToken, 3); // 'X' | 'X' | 'X' 
            const gameWinDetected = game.detectRowWin();
            expect(gameWinDetected).toBeTruthy();
        });

        test('will return a false boolean value when a row filled with the same token is not detected', () => {
            board.placeToken(playerToken='O', 3); // 'X' | 'X' | 'O'
            const gameWinDetected = game.detectRowWin();
            expect(gameWinDetected).toBeFalsy(); 
        });
    });
});