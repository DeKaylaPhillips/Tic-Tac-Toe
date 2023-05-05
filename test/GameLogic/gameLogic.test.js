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

    describe('detectRowWin()', () => {
        test('will return a true boolean value when a row filled with the same token is detected', () => {
            // X | X  | X 
            // ''| '' | ''
            // ''| '' | ''
            board.placeToken(playerToken, 1);
            board.placeToken(playerToken, 2);
            board.placeToken(playerToken, 3);
            const gameWinDetected = game.detectRowWin();
            expect(gameWinDetected).toBeTruthy();
        });

        test('will return a true boolean value when a row filled with the same token is detected', () => {
            // '' | '' | ''
            // X  | X  | X
            // '' | '' | ''
            board.placeToken(playerToken, 4);
            board.placeToken(playerToken, 5);
            board.placeToken(playerToken, 6); 
            const gameWinDetected = game.detectRowWin();
            expect(gameWinDetected).toBeTruthy();
        });
        
        test('will return a true boolean value when a row filled with the same token is detected', () => {
            // '' | '' | ''
            // '' | '' | ''
            // X  | X  | X
            board.placeToken(playerToken, 7);
            board.placeToken(playerToken, 8);
            board.placeToken(playerToken, 9); 
            const gameWinDetected = game.detectRowWin();
            expect(gameWinDetected).toBeTruthy();
        });

        test('will return a false boolean value when a row filled with the same token is not detected', () => {
            // X  | X  | O
            // '' | '' | ''
            // '' | '' | ''
            board.placeToken(playerToken, 1);
            board.placeToken(playerToken, 2);
            board.placeToken(playerToken = 'O', 3); // 'X' | 'X' | 'O'
            const gameWinDetected = game.detectRowWin();
            expect(gameWinDetected).toBeFalsy(); 
        });
    });
});