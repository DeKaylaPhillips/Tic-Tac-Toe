import { GameLogic } from "../../lib/GameLogic/gameLogic";
import { Board } from "../../lib/Board/board";
import { Token } from "../../lib/Token/token";

describe('getWinningToken()', () => {
    const playerToken = new Token('X').getToken();

    describe('detects winning column combination', () => {
        test('will return a true boolean value when a column filled with the same token is detected', () => {
            const positions = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
            const placeTokenFunc = (cell, board) => board.placeToken(playerToken, cell);
            positions.forEach((row) => {
                const board = new Board();
                const game = new GameLogic(board, playerToken);
                row.forEach((col) => placeTokenFunc(col, board));
                const winDetected = game.getWinningToken() != null;
                expect(winDetected).toEqual(true);
            });
        });

        test('will return a false boolean value when a column filled with the same token is not detected', () => {
            const board = new Board();
            const game = new GameLogic(board, playerToken);
            const placeTokenFunc = (cell) => board.placeToken(playerToken, cell);
            const positions = [1, 4];
            positions.forEach(placeTokenFunc)
            const winDetected = game.getWinningToken() != null;
            expect(winDetected).toEqual(false);
        });
    });

    describe('detects winning row combination', () => { 
        test('will return a true boolean value when a row filled with the same token is detected', () => {
            const positions = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
            const placeTokenFunc = (cell, board) => board.placeToken(playerToken, cell);
            positions.forEach((row) => { 
                const board = new Board();
                const game = new GameLogic(board, playerToken);
                row.forEach((col) => placeTokenFunc(col, board));
                const winDetected = game.getWinningToken() != null;
                expect(winDetected).toEqual(true);
            });
        });

        test('will return a false boolean value when a row filled with the same token is not detected', () => {
            const board = new Board();
            const game = new GameLogic(board, playerToken);
            const positions = [1, 2, 3];
            positions.forEach((cell) => !positions[positions.length - 1] ? 
                board.placeToken(playerToken, cell) : board.placeToken(new Token('O').getToken(), cell));    
            const winDetected = game.getWinningToken() != null;
            expect(winDetected).toEqual(false);
        });
    });

    describe('detects winning main diagonal combination', () => {
        let board;
        let game;
        const placeTokenFn = (cell) => board.placeToken(playerToken, cell)
        
        beforeEach(() => {
            board = new Board();
            game = new GameLogic(board, playerToken);
        });
        
        test('will return a true boolean value when a main diagonal win (top-left to bottom-right) is detected', () => {
            const positions = [1, 5, 9];
            const placeTokenFn = (cell) => board.placeToken(playerToken, cell)
            positions.forEach(placeTokenFn);
            const winDetected = game.getWinningToken() != null;
            expect(winDetected).toBe(true);
        });

        test('will return a false boolean value when a main diagonal win is not detected in the board', () => {
            const positions = [1, 5]
            positions.forEach(placeTokenFn); 
            const winDetected = game.getWinningToken() != null;
            expect(winDetected).toEqual(false);
        });
    });

    describe('detects winning counter diagonal combination', () => {
        let board;
        let game;
        const placeTokenFn = (cell) => board.placeToken(playerToken, cell)
        
        beforeEach(() => {
            board = new Board();
            game = new GameLogic(board, playerToken);
        });

        test('will return a true boolean value when a counter diagonal win (top-right to bottom-left) is detected', () => {
            const positions = [3, 5, 7]; 
            positions.forEach(placeTokenFn);
            const winDetected = game.getWinningToken() != null;
            expect(winDetected).toBe(true);
        });

        test('will return a false boolean value when a counter diagonal win is not detected in the board', () => {
            const positions = [3, 5];
            positions.forEach(placeTokenFn);
            const winDetected = game.getWinningToken() != null;
            expect(winDetected).toEqual(false);
        });
    });
});