var keyBoard = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
console.log();

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessed = [];
var toGuess = null;

var computerGuess = keyBoard[Math.floor(Math.random() *keyBoard.length)];

var updateGuessesLeft = function() {
  
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};
console.log()

var updatetoGuess = function() {
  this.toGuess = this.keyBoard[Math.floor(Math.random() * this.keyBoard.length)];
};
var updateGuessesSoFar = function() {
  
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessed.join(', ');
};
console.log()

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessed = [];

  updateGuessesLeft();
  updateGuessesSoFar();
}
console.log()

updateGuessesLeft();
console.log()

document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessed.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

    if (guessesLeft > 0){
        if (userGuess == toGuess){
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("You are psychic!");
            reset();
        }
        }else if(guessesLeft == 0){ 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("You are not psychic, try again?");
       
            reset();
        }
};  
console.log()
