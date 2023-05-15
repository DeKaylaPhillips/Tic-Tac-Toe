import { GameLogic } from "../../lib/GameLogic/gameLogic";
import { Board } from "../../lib/Board/board";
import { Token } from "../../lib/Token/token";

describe('GameLogic', () => {
    const playerToken = new Token('X').getToken();  
    
    describe('detectRowWin()', () => { 
        test('will return a true boolean value when a row filled with the same token is detected', () => {
            const positions = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
            const placeTokenFunc = (cell, board) => board.placeToken(playerToken, cell);
            positions.forEach((row) => { 
                const board = new Board();
                const game = new GameLogic(board, playerToken);
                row.forEach((col) => placeTokenFunc(col, board));
                const winDetected = game.detectRowWin();
                expect(winDetected).toEqual(true);
            });
        });

        test('will return a false boolean value when a row filled with the same token is not detected', () => {
            const board = new Board();
            const game = new GameLogic(board, playerToken);
            const positions = [1, 2, 3];
            positions.forEach((cell) => !positions[positions.length - 1] ? 
                board.placeToken(playerToken, cell) : board.placeToken(new Token('O').getToken(), cell));    
            const winDetected = game.detectRowWin();
            expect(winDetected).toEqual(false);
        });
    });

    describe('getWinningToken()', () => {
        let board;
        let game;
        const positions = [1, 2, 3];

        beforeEach(() => {
            board = new Board();
            game = new GameLogic(board, playerToken);
        });
        
        test('will return a string representation of the winning player\'s token', () => { 
            const placeTokenFunc = (cell) => board.placeToken(playerToken, cell);
            positions.forEach(placeTokenFunc);
            const winner = game.getWinningToken();
            expect(winner).toEqual('X');
        });

        test('will return a null value if no winning player is found', () => {
            positions.forEach((cell) => !positions[positions.length - 1] ? 
                board.placeToken(playerToken, cell) : board.placeToken(new Token('O').getToken(), cell));
            const winner = game.getWinningToken();
            expect(winner).toEqual(null);
        });
    });

    describe('detectColumnWin()', () => {
        test('will return a true boolean value when a column filled with the same token is detected', () => {
            const positions = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
            const placeTokenFunc = (cell, board) => board.placeToken(playerToken, cell);
            positions.forEach((row) => { 
                const board = new Board();
                const game = new GameLogic(board, playerToken);
                row.forEach((col) => placeTokenFunc(col, board));
                const winDetected = game.detectColumnWin();
                expect(winDetected).toEqual(true);
            });
        });

        test('will return a false boolean value when a column filled with the same token is not detected', () => {
            const board = new Board();
            const game = new GameLogic(board, playerToken);
            const positions = [1, 4, 7];
            positions.forEach((cell) => positions[positions.length - 1] == cell ? 
                board.placeToken(playerToken, cell) : board.placeToken(new Token('O').getToken(), cell));    
            const winDetected = game.detectColumnWin();
            expect(winDetected).toEqual(false);
        });
    });
});