import { UserPrompts } from '../../lib/UserPrompts/userPrompts'

describe('Prompt()', () => {
    let prompts; 

    beforeEach(() => {
        prompts = new UserPrompts();
    });

    describe('welcomeMessage()', () => {
        test('will return a string that welcomes the user to the game', () => {
            const welcomeMsg = prompts.welcomeMessage()
            expect(welcomeMsg).toBe('Welcome to the classic game of Tic-Tac-Toe!');
        });    
    })
});