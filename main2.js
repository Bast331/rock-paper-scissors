

//All Variable Declaration
    // Variable: Button on start site
    let startGameButton = document.querySelector(".StartGame_container");
    // Variable for Score and Cards for visibility
    let scoreVisibility = document.querySelector(".Score");
    let cardsVisibility = document.querySelector(".Cards");
    // Variable Choose wock, scissors or paper buttons
    let choseRockButton = document.querySelector(".Image_Rock");
    let choseScissorsButton = document.querySelector(".Image_Scissors");
    let chosePaperButton = document.querySelector(".Image_Paper");
    // Variable ResultRound ResultRound Yhoices
    let ResultRound = document.querySelector(".ResultRound_Text");
    let ResultRoundImages = document.querySelector(".ResultRound_Images");
    let ResultRoundImagePlayer = document.querySelector(".ResultRound_Player");
    let ResultRoundImageEnemy = document.querySelector(".ResultRound_Enemy");
    // Variable NextRound Button
    let NextRound_Button = document.querySelector(".Next_Round_Button"); 
    // Variable Score
    let PlayerScore = document.querySelector(".Score_You_Points");
    let ComputerScore = document.querySelector(".Score_PC_Points");
    //Variable GameEnd
    let VictoryImage = document.querySelector(".Champion_Container");
    let DefeatImage = document.querySelector(".Defeat_Container");
    //Variable Refresh Page
    let Refresh = document.querySelector(".AnotherGame");
    let RefreshDefeat = document.querySelector(".AnotherGame2");
    //  randomNumber for ComputerPlay
    let randomNumber = 0;
    //    console.log(randomNumber);
    //  computerAnswer for ComputerPlay
    let computerAnswer;
    //playerSelection declaration
    let playerSelection;
    // Übergangsweise: computerSelection festgelegt
    let computerSelection;
    // resultRound for playRound
    let resultRound;
    // 	computerPoints
    let computerPoints = 0;
    //   console.log(computerPoints);
    // 	playerPoints
    let playerPoints = 0;
    //    console.log(playerPoints);

    // playerPointsAnswer for playRound condition that gives answer depenedent on the point height
    let playerPointsAnswer;
    // computerPointsAnswer for playRound condition that gives answer depenedent on the point height
    let computerPointsAnswer;




    
//Start-Site
    // function that let Start Button transition to invisibilty
    function removeStartGameButton() {
        startGameButton.classList.add("StartGame_container_transitionHidden");
    }
    
    //Function that has EventListener for Start Button and calls the functions that make Start Button invisible
    const startGame = document.querySelector('.StartGame_container');
    startGame.addEventListener('click', () => {
    removeStartGameButton();
    });

    // function that has EventListener Start Button after invisibility doesn't affect site anymore: display none
    // with Timeout so transition can end
    const removeStartButton = document.querySelector('.StartGame_container');
    removeStartButton.addEventListener('click', () => {
        setTimeout(
        function displayStartGameButton() {
            
            startGameButton.classList.add("StartGame_container_hidden");
        }, 750);
    });

function displayCards() {
    setTimeout(
        function showCards() {
            cardsVisibility.classList.add("Cards_visible");
        }, 750
    )
    setTimeout(
        function positionCards() {
            cardsVisibility.classList.remove("Cards_noEffect");
        }, 750
    )
    setTimeout(
        function positionCardsStatic() {
            cardsVisibility.classList.add("Cards_rightPosition");
        }, 750
    )
}

// show Score and Cards after Start page
    // EventListener + Timout to show Score and Cards + function inside EventListener
    const showCardsAndScore = document.querySelector('.StartGame_container');
    showCardsAndScore.addEventListener('click', () => {
        setTimeout(
            function showScore() {
                scoreVisibility.classList.add("Score_visible");
            }, 750

        )
       
        displayCards();

        
    });



// playerSelection from images
    // function that checks players decision: to player Selection
    const choseRock = document.querySelector('.Image_Rock');
    choseRock.addEventListener('click', () => {
        playerSelection = "rock";
        //console.log(playerSelection);
        computerSelection = computerPlay();
    });

    const choseScissors = document.querySelector('.Image_Scissors');
    choseScissors.addEventListener('click', () => {
        playerSelection = "scissors";
        //console.log(playerSelection);
        computerSelection = computerPlay();
    });

    const chosePaper = document.querySelector('.Image_Paper');
    chosePaper.addEventListener('click', () => {
        playerSelection = "paper";
        //console.log(playerSelection);
        computerSelection = computerPlay();
    });


//computerPlay - before computerSelection
    // Function that returns the answer of computer
    function computerPlay() {
        // 	create a random number (between 1 & 3) and store it in a Int Variable
        randomNumber = Math.floor(Math.random() * 3 +1);
    //        console.log(randomNumber);
        // 	say which number is which answer in a condition 
        //		1 is rock
        if (randomNumber == 1) {
            computerAnswer = "rock";
          // console.log(computerAnswer);
            return computerAnswer;
        }

        // 		 2 is scissors
        else if (randomNumber == 2) {
            computerAnswer = "scissors";
           //console.log(computerAnswer);
            return computerAnswer;
        }

        // 		3 is paper
        else if (randomNumber == 3) {
            computerAnswer = "paper";
          //console.log(computerAnswer);
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
    

    //  condition that adds point per round
    // 	for result from the function that plays one round adds one point to player 
    if (resultRound == "You won this round.") {
                playerPoints = playerPoints +1;

                    // condition in condition that makes different answers for the points that changed this round (1-5 points + error)
                    if (playerPoints == 1) {
                        playerPointsAnswer = `Nice. You won your first round.`;
                        console.log(playerPointsAnswer);
                    }

                    else if (playerPoints == 2) {
                        playerPointsAnswer = `Very good. You are on the right track.`;
                        console.log(playerPointsAnswer);
                    }

                    else if (playerPoints == 3) {
                        playerPointsAnswer = `This round is also yours.`;
                        console.log(playerPointsAnswer);
                        
                    }

                    else if (playerPoints == 4) {
                        playerPointsAnswer = `You won. One more win and the victory is yours.`;
                        console.log(playerPointsAnswer);
                    }

                    else if (playerPoints == 5) {
                        playerPointsAnswer = `You are the champion.`;
                        console.log(playerPointsAnswer);
                    }

                    else {
                        console.log("There must have been an error!");
                    }
    }

    //  for result from the function that plays one round adds one point to computer
    else if (resultRound == "You lost this round.") {
                computerPoints = computerPoints +1;

                // condition in condition that makes different answers for the points that changed this round (1-5 points + error)
                if (computerPoints == 1) {
                    computerPointsAnswer = `Bad luck. Try again.`;
                    console.log(computerPointsAnswer);
                }

                else if (computerPoints == 2) {
                    computerPointsAnswer = `You lost this round.`;
                    console.log(computerPointsAnswer);
                }

                else if (computerPoints == 3) {
                    computerPointsAnswer = `You can do better.`;
                    console.log(computerPointsAnswer);
                }

                else if (computerPoints == 4) {
                    computerPointsAnswer = `Oops. Don't lose again.`;
                    console.log(computerPointsAnswer);
                }

                else if (computerPoints == 5) {
                    computerPointsAnswer = `Oh no. Your enemy is the champion.`;
                    console.log(computerPointsAnswer);
                }

                else {
                    console.log("There must have been an error!");
                }
    }

    //  if the condition who wins one round says error: error message
    else if (resultRound == "There was an error.") {
        console.log("There was a bad error. Please fix it.");
    }

    //  else it is a draw
    else {
        console.log(`It was a draw. ${computerSelection} ties ${playerSelection}`)
    
    }
    
}




    // function that if you press rock paper or scissors that then the computer generates answer
    // and cards disapear
    // result and next round button show

    function removeCards() {
        cardsVisibility.classList.remove("Cards_visible");
        cardsVisibility.classList.remove("Cards_rightPosition");
        setTimeout(
            function CardsNoEffect() {
                cardsVisibility.classList.add("Cards_noEffect"); 
            }, 750)
        }
    
    function showResultRound() {

        setTimeout(
        function showResultRoundBox() {
            ResultRound.classList.add("ResultRound_Text_show");
            ResultRound.classList.add("ResultRound_Text_transitionshow");
        }, 750);
        
        setTimeout(
            function showResultRoundText() {
                
                if(resultRound == "You won this round.") 
                {ResultRound.innerHTML = playerPointsAnswer;}
    
                else if(resultRound == "You lost this round.") 
                {ResultRound.innerHTML = computerPointsAnswer;}
    
                else
                ResultRound.innerHTML = `It was a draw.`;
            }, 750);
    }
    
    function showResultImagePlayer() {
        if(playerSelection == "rock") {
            ResultRoundImagePlayer.innerHTML = "<img src='images/Stein3.png'>"
        }
        else if(playerSelection == "paper") {
            ResultRoundImagePlayer.innerHTML = "<img src='images/Papier3.png'>"
        }
        else if (playerSelection == "scissors") {
            ResultRoundImagePlayer.innerHTML = "<img src='images/Schere3.png'>"
        }
        else
        return;
    }

    function showResultImageEnemey() {
        if(computerSelection == "rock") {
            ResultRoundImageEnemy.innerHTML = "<img src='images/Stein3.png'>"
        }
        else if(computerSelection == "paper") {
            ResultRoundImageEnemy.innerHTML = "<img src='images/Papier3.png'>"
        }
        else if(computerSelection == "scissors") {
            ResultRoundImageEnemy.innerHTML = "<img src='images/Schere3.png'>"
        }
        else
        return;
    }

    function showResultImages() {
        if ((computerPoints < 5) && (playerPoints <5)) {
        setTimeout(
            function showResultImageBox() {
                ResultRoundImages.classList.add("ResultRound_Images_show");
                ResultRoundImages.classList.add("ResultRound_Images_transitionshow")
            
            showResultImagePlayer();
            showResultImageEnemey();   
            }, 750);
        }
        else 
        return;
    }
       
    

    function showActualScore() {
        
        setTimeout (
        function showtheScore (){
        if(resultRound == "You won this round.") {
            PlayerScore.innerHTML = `${playerPoints}`;
        }
        else if(resultRound == "You lost this round.") {
            ComputerScore.innerHTML = `${computerPoints}`;
        }
        else
        return;}, 950)
    };


    function showNextRound() {
        setTimeout(
        function showNextRoundButton() {
            NextRound_Button.classList.add("Next_Round_Button_show");
            NextRound_Button.classList.add("Next_Round_Button_transitionshow");
        }, 750);
    }

    function showVictoryScreen () {
        setTimeout(
            function showVictory() {
                VictoryImage.classList.add("Champion_show");
                VictoryImage.classList.add("Champion_Transitionshow");
            }, 750);
    }

    function showDefeatScreen() {
        setTimeout(
            function showDefeat () {
                DefeatImage.classList.add("Defeat_show");
                DefeatImage.classList.add("Defeat_Transitionshow");
            }, 750);
    }

    const generateComputerAnswer = document.querySelectorAll('.Image');
    for (let i = 0;  i < generateComputerAnswer.length; i++) {
        generateComputerAnswer[i].addEventListener('click', () => {
            console.log(playerSelection);
            console.log(computerSelection);
            removeCards();
            
            
            playRound(playerSelection, computerSelection);
            showResultRound();
            showResultImages();
            showActualScore();
            
            if((computerPoints < 5) && (playerPoints <5)) {
            showNextRound();}
            else if (computerPoints == 5) {
                showDefeatScreen()
            }
            else if (playerPoints == 5) {
                showVictoryScreen();
            }
            
        })};

    
    function removeNextRoundButton() {
        NextRound_Button.classList.remove("Next_Round_Button_transitionshow");
        
        setTimeout (
        function NextRoundButtonPosition() {
            NextRound_Button.classList.remove("Next_Round_Button_show")}, 750)
    };

    function removeResultRound() {
        ResultRound.classList.remove("ResultRound_Text_transitionshow");

        setTimeout(
        function ResultRoundPosition() {
            ResultRound.classList.remove("ResultRound_Text_show")}, 750)
    };

    function removeRoundImages() {
        ResultRoundImages.classList.remove("ResultRound_Images_transitionshow");

        setTimeout (
        function RoundImagesPosition() {
            ResultRoundImages.classList.remove("ResultRound_Images_show")
        }, 750)
    };

    const AnimationAfterClickNextRound = document.querySelector('.Next_Round_Button');
    AnimationAfterClickNextRound.addEventListener('click', () => {
        displayCards()
        removeNextRoundButton();
        removeResultRound();
        removeRoundImages();
    });
  

    const StartNewGame = document.querySelector('.AnotherGame');
    StartNewGame.addEventListener('click', () => {
        window.location.reload();
    });

    const StartGameAfterDefeat = document.querySelector('.AnotherGame2');
    StartGameAfterDefeat.addEventListener('click', () => {
        window.location.reload();
    });