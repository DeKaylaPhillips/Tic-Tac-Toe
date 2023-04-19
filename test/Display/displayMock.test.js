import { Display } from '../../lib/Display/display'
import { Board } from '../../lib/Board/board'

describe('Display', () => {

    let board;
    let display;

    beforeEach(() => {
        board = new Board();
        display = new Display(board);
    });

    describe('assembleBoard', () => {
        test('will call the formatCells() method based on the total amount of cells to be formatted', () => {
            const totalCells = board.rowTotal * board.columnTotal;
            const mockCellFormatter = jest.spyOn(display, 'formatCells');

            display.assembleBoard();

            expect(mockCellFormatter).toHaveBeenCalledTimes(totalCells);
        });
    });
});