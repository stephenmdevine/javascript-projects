const whoWon = require('../RPS.js');

describe("whoWon", function() {
    
    test("returns 'TIE!' if P1 and P2 both select 'rock'", function() {
        let output = whoWon.whoWon('rock', 'rock');
        expect(output).toBe('TIE!');
    });
    
    test("returns 'Player 2 wins!' if P1  selects 'rock' and P2 selects 'paper'", function() {
        let output = whoWon.whoWon('rock', 'paper');
        expect(output).toBe('Player 2 wins!');
    });
    
    test("returns 'Player 2 wins!' if P1  selects 'paper' and P2 selects 'scissors'", function() {
        let output = whoWon.whoWon('paper', 'scissors');
        expect(output).toBe('Player 2 wins!');
    });
    
    test("returns 'Player 2 wins!' if P1  selects 'scissors' and P2 selects 'rock'", function() {
        let output = whoWon.whoWon('scissors', 'rock');
        expect(output).toBe('Player 2 wins!');
    });
    
    test("returns 'Player 1 wins!' if P1  selects 'paper' and P2 selects 'rock'", function() {
        let output = whoWon.whoWon('paper', 'rock');
        expect(output).toBe('Player 1 wins!');
    });
    
    test("returns 'Player 1 wins!' if P1  selects 'rock' and P2 selects 'scissors'", function() {
        let output = whoWon.whoWon('rock', 'scissors');
        expect(output).toBe('Player 1 wins!');
    });
    
    test("returns 'Player 1 wins!' if P1  selects 'scissors' and P2 selects 'paper'", function() {
        let output = whoWon.whoWon('scissors', 'paper');
        expect(output).toBe('Player 1 wins!');
    });
});