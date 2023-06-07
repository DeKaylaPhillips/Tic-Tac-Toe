import { GameLogic } from "../../lib/GameLogic/gameLogic";
import { Board } from "../../lib/Board/board";
import { Token } from "../../lib/Token/token";

describe('getWinningToken()', () => {

    const player1 = new Token('X');
    const player2 = new Token('O')

    describe('detects winning row combination', () => {
        test('will return a true boolean value when a row win is detected', () => {
            const positions = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
            const placeTokenFunc = (col, board) => board.placeToken(player1, col);
            positions.forEach((row) => {
                const board = new Board();
                const game = new GameLogic(board, player1, player2);
                row.forEach((col) => placeTokenFunc(col, board));
                const winDetected = game.getWinningToken() != null;
                expect(winDetected).toEqual(true);
            });
        });

        test('will return a false boolean value when a row win is not detected', () => {
            const positions = [1, 2, 3];
            const board = new Board();
            const game = new GameLogic(board, player1, player2);
            const placeTokenFunc = (col) => col != positions[positions.length - 1] ? board.placeToken(player1, col) : board.placeToken(player2, col);
            positions.forEach((col) => placeTokenFunc(col));
            const winDetected = game.getWinningToken() != null;
            expect(winDetected).toEqual(false);
        });
    });

    describe('detects winning column combination', () => {
        test('will return a true boolean value when a column win is detected', () => {
            const positions = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
            const placeTokenFunc = (cell, board) => board.placeToken(player1, cell);
            positions.forEach((row) => {
                const board = new Board();
                const game = new GameLogic(board, player1, player2);
                row.forEach((col) => placeTokenFunc(col, board));
                const winDetected = game.getWinningToken() != null;
                expect(winDetected).toEqual(true);
            });
        });

        test('will return a false boolean value when a column win is not detected', () => {
            const positions = [1, 4, 7];
            const board = new Board();
            const game = new GameLogic(board, player1, player2);
            const placeTokenFunc = (col) => col != positions[positions.length - 1] ? board.placeToken(player1, col) : board.placeToken(player2, col);
            positions.forEach(placeTokenFunc);
            const winDetected = game.getWinningToken() != null;
            expect(winDetected).toEqual(false);
        });
    });

    describe('detects winning main diagonal combination', () => {
        let board;
        let game;
        
        beforeEach(() => {
            board = new Board();
            game = new GameLogic(board, player1, player2);
        });

        test('will return a true boolean value when a main diagonal win (top-left to bottom-right) is detected', () => {
            const positions = [1, 5, 9];
            const placeTokenFunc = (cell) => board.placeToken(player1, cell);
            positions.forEach(placeTokenFunc);
            const winDetected = game.getWinningToken() != null;
            expect(winDetected).toBe(true);
        });

        test('will return a false boolean value when a main diagonal win (top-left to bottom-right) is not detected', () => {
            const positions = [1, 5, 9];
            const placeTokenFunc = (col) => col != positions[positions.length - 1] ? board.placeToken(player1, col) : board.placeToken(player2, col);
            positions.forEach(placeTokenFunc);
            const winDetected = game.getWinningToken() != null;
            expect(winDetected).toEqual(false);
        });
    });

    describe('detects winning counter diagonal combination', () => {
        let board;
        let game;

        beforeEach(() => {
            board = new Board();
            game = new GameLogic(board, player1, player2);
        });

        test('will return a true boolean value when a counter diagonal win (top-right to bottom-left) is detected', () => {
            const positions = [3, 5, 7];
            const placeTokenFunc = (cell) => board.placeToken(player1, cell)
            positions.forEach(placeTokenFunc);
            const winDetected = game.getWinningToken() != null;
            expect(winDetected).toBe(true);
        });
        
        test('will return a false boolean value when a counter diagonal win (top-right to bottom-left) is not detected', () => {
            const positions = [3, 5];
            const playerToken2 = new Token('O')
            const placeTokenFunc = (col) => col != positions[positions.length - 1] ? board.placeToken(player1, col) : board.placeToken(player2, col);
            positions.forEach(placeTokenFunc);
            const winDetected = game.getWinningToken() != null;
            expect(winDetected).toEqual(false);
        });
    });
});