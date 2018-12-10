

  var show = ["monica", "joey", "chandler", "pheobe", "rachel", "ross"];
  

  var chosenWord = "";
  var lettersInChosenWord = [];
  var blanks = 0;
  var blanksAndSucceses =[];
  var wrongGuesses= [];

  var letterGuessed = "";

  var wins= 0;
  var losses = 0;
  var guessLeft = 9;

  

  
 
 
  
  

 
 function startGame(){

 guessLeft = 9;
  
chosenWord = show[Math.floor(Math.random() * show.length)];                       
lettersInChosenWord = chosenWord.split("");
 blanks = lettersInChosenWord.length;
 console.log(chosenWord);
 blanksAndSucceses= [];
 wrongGuesses= [];

 for (var i = 0; i < blanks; i++) {
  blanksAndSucceses.push("_");

 
  }

  console.log(blanksAndSucceses);

  document.getElementById("guesses").textContent = guessLeft;
  document.getElementById("wrongGuess").innerHTML = wrongGuesses.join("");
  document.getElementById("wordPicked").textContent = blanksAndSucceses.join(" ");


}

function checkLetters(letter){

  var LetterInWord = false;

  for (var i = 0; i < blanks; i++) {
    if (chosenWord[i]=== letter){
      LetterInWord = true;
    }

}

if (LetterInWord) {
  for (var j = 0; j < blanks; j++) {
    if (chosenWord[j]=== letter){
      blanksAndSucceses[j] = letter;
    }
  }
  console.log(blanksAndSucceses);
}

else {
  wrongGuesses.push(letter);
  guessLeft--;

}
}

function rounddone(){

  console.log("wins: " + wins + "| Losses: " + losses + "|guesses: " + guessLeft);

  document.getElementById("guesses").innerHTML = guessLeft;
  document.getElementById("wordPicked").innerHTML = blanksAndSucceses.join(" ");
  document.getElementById("wrongGuess").innerHTML = wrongGuesses.join(" ");

  if (lettersInChosenWord.toString()=== blanksAndSucceses.toString()){

    wins++;

    alert("YOU WIN!");

    document.getElementById("wins-text").innerHTML = wins;

    startGame();
  }


else if (guessLeft === 0){
        
   losses++;

   alert("YOU LOSE!");

   document.getElementById("loss-text").innerHTML= losses;

   startGame();
}

}


startGame();

document.onkeyup = function(event) {

  letterGuessed = event.key.toLowerCase();

  checkLetters(letterGuessed);

  rounddone();
};
