import { UserPrompts } from '../../lib/UserPrompts/userPrompts'

describe('UserPrompts()', () => {
    let prompts; 

    beforeEach(() => {
        prompts = new UserPrompts();
    });

    describe('getWelcomePrompt()', () => {
        test('will return a string that welcomes the user to the game', () => {
            const prompt = prompts.getWelcomePrompt()
            expect(prompt).toBe('\nWelcome to the classic game of Tic-Tac-Toe!\n');
        }); 
    }); 

    describe('getGameOverPrompt()', () => {
        test('will return a string informing the user the game is over', () => {
            const prompt = prompts.getGameOverPrompt()
            expect(prompt).toBe('\n|| --- GAME OVER! --- ||\n');
        }); 
    }); 
    
    describe('getPlaceTokenPrompt()', () => {
        test('will return a string informing the user to place a token on the board', () => {
            const prompt = prompts.getPlaceTokenPrompt()
            expect(prompt).toBe('\nPlease place a token on the board.\n');
        }); 
    });
});