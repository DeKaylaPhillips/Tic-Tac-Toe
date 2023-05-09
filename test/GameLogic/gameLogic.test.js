import { GameLogic } from "../../lib/GameLogic/gameLogic";
import { Board } from "../../lib/Board/board";
import { Token } from "../../lib/Token/token";

describe('GameLogic', () => {
    describe('detectRowWin()', () => {
        const board = new Board();
        const playerToken = new Token('X').getToken();
        const game = new GameLogic(board, playerToken); 
        const placeTokenFunc = (cell, board) => board.placeToken(playerToken, cell);
        
        test('will return a true boolean value when a row filled with the same token is detected', () => {
            const positions = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
            positions.map((row) => { 
                const board = new Board();
                const game = new GameLogic(board, playerToken);
                row.map((col) => placeTokenFunc(col, board));
                const winDetected = game.detectRowWin();
                expect(winDetected).toEqual(true);
            });
        });

        test('will return a false boolean value when a row filled with the same token is not detected', () => {
            const positions = [1, 2, 3];
            positions.map((cell) => !positions[positions.length - 1] ? 
                board.placeToken(playerToken, cell) : board.placeToken(new Token('O').getToken(), cell));    
            const winDetected = game.detectRowWin();
            expect(winDetected).toEqual(false);
        });
    });

    describe('getWinningToken()', () => {
        const board = new Board();
        const playerToken = new Token('X').getToken();
        const game = new GameLogic(board, playerToken);
        const placeTokenFunc = (cell) => board.placeToken(playerToken, cell);
        const positions = [1, 2, 3];

        test('will return a string representation of the winning player\'s token', () => { 
            positions.map(placeTokenFunc);
            const winner = game.getWinningToken();
            expect(winner).toEqual('X');
        });

        test('will return a null value if no winning player is found', () => {
            positions.map((cell) => !positions[positions.length - 1] ? 
                board.placeToken(playerToken, cell) : board.placeToken(playerToken, cell));
            const winner = game.getWinningToken();
            expect(winner).toEqual('X');
        });
    });
});