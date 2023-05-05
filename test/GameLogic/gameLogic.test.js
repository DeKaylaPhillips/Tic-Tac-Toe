import { GameLogic } from "../../lib/GameLogic/gameLogic";
import { Board } from "../../lib/Board/board";
import { Token } from "../../lib/Token/token";

describe('GameLogic', () => {

    let playerToken;
    let board;
    let game;

    beforeEach(() => {
        board = new Board();
        playerToken = new Token('X').getToken();
        game = new GameLogic(board, playerToken);  
    });

    describe('detectRowWin()', () => {
        test('will return a true boolean value when a row filled with the same token is detected', () => {
            let positions = [1, 2, 3]
            positions.map((cell) => board.placeToken(playerToken, cell))
            const gameWinDetected = game.detectRowWin();
            expect(gameWinDetected).toBeTruthy();
        });

        test('will return a true boolean value when a row filled with the same token is detected', () => {
            let positions = [4, 5, 6]
            positions.map((cell) => board.placeToken(playerToken, cell))
            const gameWinDetected = game.detectRowWin();
            expect(gameWinDetected).toBeTruthy();
        });
        
        test('will return a true boolean value when a row filled with the same token is detected', () => {
            let positions = [7, 8, 9]
            positions.map((cell) => board.placeToken(playerToken, cell))
            const gameWinDetected = game.detectRowWin()
            expect(gameWinDetected).toBeTruthy();
        });

        test('will return a false boolean value when a row filled with the same token is not detected', () => {
            let positions = [1, 2, 3]
            positions.map((cell, index) => (index + 1 !== positions[positions.length - 1]) ? 
                board.placeToken(new Token('X').getToken(), cell) 
                : board.placeToken(new Token('O').getToken(), cell));
            const gameWinDetected = game.detectRowWin();
            expect(gameWinDetected).toBeFalsy(); 
        });
    });
});