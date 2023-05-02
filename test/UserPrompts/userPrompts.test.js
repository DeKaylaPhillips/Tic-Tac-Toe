import { UserPrompts } from '../../lib/UserPrompts/userPrompts'

describe('UserPrompts()', () => {
    let prompts; 

    beforeEach(() => {
        prompts = new UserPrompts();
    });

    describe('getWelcomeMessage()', () => {
        test('will return a string that welcomes the user to the game', () => {
            const prompt = prompts.getWelcomeMessage()
            expect(prompt).toBe('\nWelcome to the classic game of Tic-Tac-Toe!\n');
        }); 
    }); 
});