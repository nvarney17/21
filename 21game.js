var player = 0;
var comp = 0;
var total = 0;

alert("You have to add 1, 2, or 3 to the total, starting at 0. If you are the person to say 21 then you lose.");

do{
	do{
		player = prompt("Please enter 1, 2, or 3 to start the game.");
		if (player == 1){
			total = total + 1;
			alert("You added "+player+" the total is now "+total);
			total = total + 3
			alert("The computer added 3 the total is now "+total);
		}
		else if (player == 2){
			total = total + 2;
			alert("You added "+player+" the total is now "+total);
			total = total + 2
			alert("The computer added 2 the total is now "+total);
		}
		else if (player == 3){
			total = total + 3;
			alert("You added "+player+" the total is now "+total);
			total = total + 1
			alert("The computer added 1 the total is now "+total);
		}
	}
	while(total < 20);
	
	playAgain = prompt("Sorry you lost your only other option would be for you to say 21. Do you want to play again press y for yes or n for no.");
}
while(playAgain == "y");