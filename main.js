// Declare the variables
// 	computerPoints
let computerPoints = 0;
//   console.log(computerPoints);
// 	playerPoints
let playerPoints = 0;
//    console.log(playerPoints);
//  randomNumber for ComputerPlay
let randomNumber = 0;
//    console.log(randomNumber);
//  computerAnswer for ComputerPlay
let computerAnswer;
//  Übergangsweise: playerSelection festgelegt
let playerSelection;
// Übergangsweise: computerSelection festgelegt
let computerSelection;
// resultRound for playRound
let resultRound;
// playerPointsAnswer for playRound condition that gives answer depenedent on the point height
let playerPointsAnswer;
// computerPointsAnswer for playRound condition that gives answer depenedent on the point height
let computerPointsAnswer;
// Ende des Loops;
let victory = false;





// Function that returns the answer of computer
function computerPlay() {
    // 	create a random number (between 1 & 3) and store it in a Int Variable
    randomNumber = Math.floor(Math.random() * 3 +1);
//        console.log(randomNumber);
    // 	say which number is which answer in a condition 
    //		1 is rock
    if (randomNumber == 1) {
        computerAnswer = "rock";
//        console.log(computerAnswer);
        return computerAnswer;
    }

    // 		 2 is scissors
    else if (randomNumber == 2) {
        computerAnswer = "scissors";
//        console.log(computerAnswer);
        return computerAnswer;
    }

    // 		3 is paper
    else if (randomNumber == 3) {
        computerAnswer = "paper";
//        console.log(computerAnswer);
        return computerAnswer;
    }

    //      Exceptions
    else {
        computerAnswer = "There must have been a mistake!";
        console.log(computerAnswer);
        return computerAnswer;
    }  
}



// Function that plays one round of the game
function playRound(playerSelection, computerSelection) {

    // 		set the answer of the player in lower case
    playerSelection = playerSelection.toLowerCase();
//        console.log(playerSelection);

    // 	make a condition for three cases who wins in one round
    // 		when the answer from computer and player is the sameit is a tie
    if (playerSelection == computerSelection) {
        resultRound = "It is a tie."
//        console.log(resultRound);
        
    } 

    // 		when the answer from the computer beats the player
    else if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors")
            || (playerSelection == "scissors" && computerSelection == "rock")) {
    // 			the computer wins
                resultRound = "You lost this round.";
//                console.log(resultRound);
                
            }

    // 		when the answer from the player beats the computer
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock")
            || (playerSelection == "scissors" && computerSelection == "paper")) {
    // 			the player wins
                resultRound = "You won this round.";
//                console.log(resultRound);
                
            }

    // 		when something happens: 
    else {
    // 			error message
                resultRound = "There was an error.";
                console.log(resultRound);
                
    }
    

    // 		return: win from who - result
    // 	for result from the function that plays one round adds one point to player, computer or nooone
    if (resultRound == "You won this round.") {
                playerPoints = playerPoints +1;

                    // condition in condition that makes different answers if you lost or won and the points that changed this round
                    if (playerPoints == 1) {
                        playerPointsAnswer = `Nice. You won your first round. ${playerSelection} beats ${computerSelection}`;
                        console.log(playerPointsAnswer);
                    }

                    else if (playerPoints == 2) {
                        playerPointsAnswer = `Very good. You are on the right track. ${playerSelection} beats ${computerSelection}`;
                        console.log(playerPointsAnswer);
                    }

                    else if (playerPoints == 3) {
                        playerPointsAnswer = `This round is also yours. ${playerSelection} beats ${computerSelection}`;
                        console.log(playerPointsAnswer);
                        
                    }

                    else if (playerPoints == 4) {
                        playerPointsAnswer = `You won. One more win and the victory is yours. ${playerSelection} beats ${computerSelection}`;
                        console.log(playerPointsAnswer);
                    }

                    else if (playerPoints == 5) {
                        playerPointsAnswer = `You are the champion. Congratulations! ${playerSelection} beats ${computerSelection}`;
                        console.log(playerPointsAnswer);
                    }

                    else {
                        console.log("There must have been an error!");
                    }
    }
    else if (resultRound == "You lost this round.") {
                computerPoints = computerPoints +1;

                // condition in condition that makes different answers if you lost or won and the points that changed this round
                if (computerPoints == 1) {
                    computerPointsAnswer = `Bad luck. Try again. ${computerSelection} beats ${playerSelection}`;
                    console.log(computerPointsAnswer);
                }

                else if (computerPoints == 2) {
                    computerPointsAnswer = `You lost this round. ${computerSelection} beats ${playerSelection}`;
                    console.log(computerPointsAnswer);
                }

                else if (computerPoints == 3) {
                    computerPointsAnswer = `You can do better. ${computerSelection} beats ${playerSelection}`;
                    console.log(computerPointsAnswer);
                }

                else if (computerPoints == 4) {
                    computerPointsAnswer = `Oops. Don't lose again. ${computerSelection} beats ${playerSelection}`;
                    console.log(computerPointsAnswer);
                }

                else if (computerPoints == 5) {
                    computerPointsAnswer = `Oh no. Your enemy is the champion. ${computerSelection} beats ${playerSelection}. Play another game.`;
                    console.log(computerPointsAnswer);
                }

                else {
                    console.log("There must have been an error!");
                }
    }

    else if (resultRound == "There was an error.") {
        console.log("There was a bad error. Please fix it.");
    }

    else {
        console.log(`It was a draw. ${computerSelection} ties ${playerSelection}`)
    
    }
    
}

// Function that let the player play the game until one player reaches 5 points
function game() {

    // 	make a loop so there is a new round until one player has 5points
    do {
    // 	get every time the loop coninues a new answer from the computer (use the function)
    // 	and get the answer from the player
    playerSelection = prompt("Rock, paper or scissors?");
    computerSelection = computerPlay();
    // 	call the function that plays one round
    playRound(playerSelection, computerSelection);

    //  if playerPoints or computerPoints get to 5 they display following message --> game should end: set condition to true
        if (playerPointsAnswer == `You are the champion. Congratulations! ${playerSelection} beats ${computerSelection}` || 
            computerPointsAnswer == `Oh no. Your enemy is the champion. ${computerSelection} beats ${playerSelection}. Play another game.`) {
                victory = true;
            }

    // condition that loop runs: no victory yet: loop run; victory == true loop stops
    }while(victory == false);
}

// Call the game function
game();