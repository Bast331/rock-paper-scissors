# rock-paper-scissors

project for "The Odin Project"

Learning javascript - 
	function and function scope
	conditions and loops
	working step for step

my working plan:

Declare the variables
	computerPoints
	playerPoints
	randomNumber for ComputerPlay
	computerAnswer for ComputerPlay
	playerSelection 
	computerSelection
	resultRound for playRound
	playerPointsAnswer for playRound condition that gives answer depenedent on the point 	height
	computerPointsAnswer for playRound condition that gives answer depenedent on the 		point height
	end of Loop


Function that returns the answer of computer

	create a random number (between 1 & 3) and store it in a Int Variable
    	
    	say which number is which answer in a condition 
		1 is rock
		
		2 is scissors
		
 		3 is paper
 		
		Exceptions


Function that plays one round of the game

	set the answer of the player in lower case

	make a condition for three cases who wins in one round
		when the answer from computer and player is the same it is a tie
		
		when the answer from the computer beats the player

			the computer wins
     
		when the answer from the player beats the computer

			the player wins

		when something happens: 
		
  			error message
 
	condition that adds point per round
	for result from the function that plays one round adds one point to player 
 
		condition in condition that makes different answers for 				the points that changed this round (1-5 points + error)
                    
   	for result from the function that plays one round adds one point to computer
   	
		 condition in condition that makes different answers for 				the points that changed this round (1-5 points + error)
	
	if the condition who wins one round says error: error message

   	else it is a draw
}

Function that let the player play the game until one player reaches 5 points

	make a do while loop so there is a new round until one player has 5points
	
	do
 		get every time the loop coninues a new answer from the computer (use the 			function)

		and get the answer/ input from the player

		call the function that plays one round


	if playerPoints or computerPoints get to 5 they display a message --> game 			should end: set condition (victory) to true
       
	while
		condition that loop runs: no victory yet: loop run; victory == true loop stops
 
}

Call the game function

