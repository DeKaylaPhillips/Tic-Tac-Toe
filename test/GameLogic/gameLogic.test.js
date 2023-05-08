import { GameLogic } from "../../lib/GameLogic/gameLogic";
import { Board } from "../../lib/Board/board";
import { Token } from "../../lib/Token/token";

describe('GameLogic', () => {

    describe('detectRowWin()', () => {
        const playerToken = new Token('X').getToken();
        const placeTokenFunc = (cell, board) => board.placeToken(playerToken, cell);
        
        test('will return a true boolean value when a row filled with the same token is detected', () => {
            let positions = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
            
            positions.map((row) => { 
                let board = new Board();
                let game = new GameLogic(board, playerToken);
                row.map((col) => {
                    placeTokenFunc(col, board); 
                });

                const gameWinDetected = game.detectRowWin();
                expect(gameWinDetected).toEqual(true);
            });
        });

        test('will return a false boolean value when a row filled with the same token is not detected', () => {
            let board = new Board()
            let game = new GameLogic(board, playerToken);
            let positions = [1, 2, 3];
            positions.map((cell, index) => (index + 1 !== positions[positions.length - 1]) ?
                board.placeToken(playerToken, cell)
                : board.placeToken(new Token('O').getToken(), cell));
            
            const gameWinDetected = game.detectRowWin();
            expect(gameWinDetected).toEqual(false);
        });
    });
});