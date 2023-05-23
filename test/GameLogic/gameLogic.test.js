import { GameLogic } from "../../lib/GameLogic/gameLogic";
import { Board } from "../../lib/Board/board";
import { Token } from "../../lib/Token/token";

describe('GameLogic', () => {
    const playerToken = new Token('X').getToken();

    describe('getWinningToken()', () => {
        let board;
        let game;
        const placeTokenFunc = (cell) => board.placeToken(playerToken, cell);

        beforeEach(() => {
            board = new Board();
            game = new GameLogic(board, playerToken);
        });

        test('will return a string representation of the winning player\'s token', () => {
            let positions = [1, 2, 3];
            positions.forEach(placeTokenFunc);
            console.log(game.board.toString())
            const winner = game.getWinningToken();
            console.log(winner)
            expect(winner).toEqual('X');
        });

        test('will return a null value if no winning player is found', () => {
            let positions = [1, 2];
            positions.forEach(placeTokenFunc);
            console.log(game.board.toString())
            const winner = game.getWinningToken();
            expect(winner).toEqual(null);
        });
    });

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
            const placeTokenFunc = (cell) => board.placeToken(playerToken, cell)
            const positions = [1, 2];
            positions.forEach(placeTokenFunc)
            const winDetected = game.containsWinningRow();
            expect(winDetected).toEqual(false);
        });
    });

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
            const placeTokenFunc = (cell) => board.placeToken(playerToken, cell);
            const positions = [1, 4];
            positions.forEach(placeTokenFunc)
            const winDetected = game.containsWinningColumn();
            expect(winDetected).toEqual(false);
        });
    });

    describe('containsWinningMainDiagonal()', () => {
        let board;
        let game;
        const placeTokenFn = (cell) => board.placeToken(playerToken, cell)

        beforeEach(() => {
            board = new Board();
            game = new GameLogic(board, playerToken);
        });

        test('will return a true boolean value when a main diagonal win (top-left to bottom-right) is detected', () => {
            const positions = [1, 5, 9];
            positions.forEach(placeTokenFn);
            const winDetected = game.containsWinningMainDiagonal();
            expect(winDetected).toBe(true);
        });

        test('will return a false boolean value when a main diagonal win is not detected in the board', () => {
            const positions = [1, 5]
            positions.forEach(placeTokenFn);
            const winDetected = game.containsWinningMainDiagonal();
            expect(winDetected).toEqual(false);
        });
    });

    describe('containsWinningCounterDiagonal()', () => {
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
            const winDetected = game.containsWinningCounterDiagonal();
            expect(winDetected).toBe(true);
        });

        test('will return a false boolean value when a counter diagonal win is not detected in the board', () => {
            const positions = [3, 5];
            positions.forEach(placeTokenFn);
            const winDetected = game.containsWinningCounterDiagonal();
            expect(winDetected).toEqual(false);
        });
    });
});