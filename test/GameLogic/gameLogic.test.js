import { GameLogic } from "../../lib/GameLogic/gameLogic";
import { Board } from "../../lib/Board/board";
import { Token } from "../../lib/Token/token";

describe('GameLogic', () => {
    const playerToken = new Token('X').getToken();  
    
    describe('containsWinningRow()', () => { 
        test('will return a true boolean value when a row filled with the same token is detected', () => {
            const positions = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
            const placeTokenFunc = (cell, board) => board.placeToken(playerToken, cell);
            positions.forEach((row) => { 
                const board = new Board();
                const game = new GameLogic(board, playerToken);
                row.forEach((col) => placeTokenFunc(col, board));
                const winDetected = game.containsWinningRow();
                expect(winDetected).toEqual(true);
            });
        });

        test('will return a false boolean value when a row filled with the same token is not detected', () => {
            const board = new Board();
            const game = new GameLogic(board, playerToken);
            const positions = [1, 2, 3];
            positions.forEach((cell) => !positions[positions.length - 1] ? 
                board.placeToken(playerToken, cell) : board.placeToken(new Token('O').getToken(), cell));    
            const winDetected = game.containsWinningRow();
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

<<<<<<< HEAD
    describe('containsWinningColumn()', () => {
        test('will return a true boolean value when a column filled with the same token is detected', () => {
            const positions = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
            const placeTokenFunc = (cell, board) => board.placeToken(playerToken, cell);
            positions.forEach((row) => { 
                const board = new Board();
                const game = new GameLogic(board, playerToken);
                row.forEach((col) => placeTokenFunc(col, board));
                const winDetected = game.containsWinningColumn();
                expect(winDetected).toEqual(true);
            });
        });

        test('will return a false boolean value when a column filled with the same token is not detected', () => {
            const board = new Board();
            const game = new GameLogic(board, playerToken);
            const positions = [1, 4, 7];
            positions.forEach((cell) => positions[positions.length - 1] == cell ? 
                board.placeToken(playerToken, cell) : board.placeToken(new Token('O').getToken(), cell));    
            const winDetected = game.containsWinningColumn();
            expect(winDetected).toEqual(false);
        });
    });
=======
    describe('detectDiagonalWin()', () => {
        test('will return a true boolean value when a diagonal win is detected', () => {
            const positions = [[1, 5, 9], [3, 5, 7]]; 
            // positions[0] = main diagonal positions    (top-left  -> bottom-right) 
            // positions[1] = counter diagonal positions (top-right -> bottom-left)
            const placeTokenFunc = (cell, board) => board.placeToken(playerToken, cell)
            positions.forEach((row) => {
                const board = new Board();
                const game = new GameLogic(board, playerToken);
                row.forEach((col) => placeTokenFunc(col, board));
                const winDetected = game.containsWinningMainDiagonal();
                expect(winDetected).toBe(true);
            });
        });

        test('will return a false boolean value when a diagonal win is not detected in the board', () => {
            const board = new Board();
            const game = new GameLogic(board, playerToken);
            const positions = [1, 5, 9];
            positions.forEach((cell) => !positions[positions.length - 1] ? 
                board.placeToken(playerToken, cell) : board.placeToken(new Token('O').getToken(), cell));    
            const winDetected = game.containsWinningCounterDiagonal();
            expect(winDetected).toEqual(false);
        });
    });
});