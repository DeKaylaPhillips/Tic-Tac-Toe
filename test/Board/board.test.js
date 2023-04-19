import { Board } from '../../lib/Board/board'

describe('Board', () => {
    let board;
    
    beforeEach(() => {
        board = new Board();
    });

    describe('getCells()', () => {
        test('will return a structure storing each individual cell in the board', () => {
            const cellStructure = board.getCells()
            expect(cellStructure).toBe(board.cells)
        });    
    });
});

