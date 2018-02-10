var keyBoard = ["a","z","s","d","f","g","h","j","k","l","q","w","e","r","t","y","u","i","o","p","x","c","v","b","n","m"]
		console.log();

		// var blanks = [];
		
		var wins = 0;
		var losses = 0;
		var guesses = 3;
		var guessesLeft = 3;
		var guessedLetters = [];
		
		var left =function(){
			document.querySelector("#guessesLeft").innerHTML = "Guesses Left" + guessesLeft;
		};
		console.log();

		var toGuess = function(){
			letterToGuess =.keyBoard[Math.floor(Math.random() *keyBoard.length];
		};
		console.log();

		var guessed = function(){
			document.querySelector('#picked').innerHTML = "Your Guesses: " + guessed.join(', ');
		};
		console.log();

		function reset() {
			var reset = function() {
			  totalGuesses =3;
			  guessesLeft = 3;
			  guessedLetters = [];

			  updateLetterToGuess();
			  updateGuessesLeft();
			  updateGuessesSoFar();
			}

			updateLetterToGuess();
			updateGuessesLeft();
		}
		console.log();

		// function startGame(){

		// 	word = keyBoard[Math.floor(Math.random() *keyBoard.length)];
		// 	console.log(word);

			
		// 	wordlength = letersinword.length;
		// 	console.log(wordlength);

		// 	for(var i =0; i<wordlength;i++){
		// 	blanks.push("_");
		// 	}
		// }
		// console.log(blanks);
	
		document.onkeyup = function(event) {
		    guessesLeft--;
		  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		  guessedLetters.push(userGuess);

		  updateGuessesLeft();
		  updateGuessesSoFar();

	        if (guessesLeft > 0){
	            if (userGuess == letterToGuess){
	                wins++;
	                document.querySelector('#wins').innerHTML = "Wins: " + wins;
	                alert("You are psychic!");
	                reset();
	            }
	        }else if(guessesLeft == 0){
	            losses++;
	            document.querySelector('#losses').innerHTML = "Losses: " + losses;
	            alert("You're not psychic, maybe try again?");
	            reset();
	        }
         };   
