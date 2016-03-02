
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';


function getInput() {
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
   return (move || getInput());
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   return (move || randomPlay());
}


function getWinner(playerMove,computerMove) {
    var winner;
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
            winner = 'tie';
             console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
            console.log("It's a tie!");
        }
        else if (playerMove === "rock" && computerMove === "scissors") {
            winner = 'player';
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
            console.log("Player wins!");
        }
        else if (playerMove === "paper" && computerMove === "rock") {
            winner = 'player';
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
            console.log("Player wins!");
        }
        else if (playerMove === "scissors" && computerMove === "paper") {
            winner = 'player';
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
            console.log("Player wins!");
        }

        else if (computerMove === "rock" && playerMove === "scissors") {
           winner = 'computer';
           console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
            console.log("Computer wins!");
        }
        else if (computerMove === "paper" && playerMove === "rock") {
          winner = 'computer';
          console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
            console.log("Computer wins!");
        }
        else if (computerMove === "scissors" && playerMove === "paper") {
           winner = 'computer';
           console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
            console.log("Computer wins!");
        }
      
    
    return winner;
}

function playToFive() {
    alert("Let's play a game.");
    alert("Please choose either 'rock', 'paper', or 'scissors'. You may need to do this up to 10 times.");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
    while (playerWins < 5 && computerWins < 5) {
    // Gets the players and computers last move
        var playerMove;
        var computerMove;
        var winner = getWinner(playerMove, computerMove);

        if (winner === "player") {
        playerWins ++;
}       else if (winner === "computer") {
        computerWins ++;
}       else {
      winner = "tie";
}
    }
    // Final lines after the loop finishes
    console.log('Player won ' + playerWins + ' games, whilst Computer won ' + computerWins + ' games.');
    
    if (playerWins > computerWins) {
        console.log('Congratulations champ!');
    } else 
        console.log('Better luck next time rookie!');
}

// Initiates the game
playToFive();