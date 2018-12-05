

/* words to pick from
  chosen word space
  letters picked space
   wrong letters space
   count the wins
   count the guesses left
*/

// Globals

  var shows = ["friends", "fresh prince", "saved by the bell", "boy meets world", "full house", "home improvement", "the nanny"];
  

  var chosenWord = [];
  var blanksAndLetter = [];
  var guessedLetters =[];

  var wins= 0;
  var guessLeft = 9;

  

  
 
 
  var winsText = document.getElementById("win-text");
  var guessesremaining = document.getElementById("guesses");
  var onscreen = document.getElementById("BlanksLetter");

  /*
   have a function where user picks a letter key
   have the computer generate a word out of the array
   show blanks on screen for word randomly picked
   show letters picked on screen
   show wrong letters
   update wins
   reset and show new blanks for new word chosen
 */
 document.getElementById("mainImg").addEventListener("click",function(){
  
var WordChose = shows[Math.floor(Math.random() * shows.length)];                       
var Letter = WordChose.split("");
//console log for wordpicked

 console.log(Letter);

 // Functions
 var blanks = Letter.length;
 
 for (var j = 0; j < blanks; j++) {
  chosenWord.push("_");
 
  console.log(Letter[j]);
 }

 document.getElementById ("wordPicked").innerHTML= chosenWord.join(" ");

 


 

  
 


function reset(){
    guessLeft = 9;
    guessedLetters = [];
        updateGuesses();
         newWordToGuess();
      
      }





     
 
 document.onkeyup = function(event) {
         var userguess = event.key.toLowerCase();

       
  
         //console log for userguess

          console.log(userguess);


      
            
          
    
              
                if (WordChose.indexOf(userguess) !== -1){
                        
                  guessLeft--;
                  alert("yes!");
                  onscreen.textContent =  blanksAndLetter.concat("_") + blanksAndLetter.push(userguess);
                }
                

                
               else {
                   guessLeft--;
                 alert("Wrong!");
                 document.getElementById("wrongGuess").innerHTML = "Your Guesses: " + guessedLetters.join(', ') + guessedLetters.push(userguess);

                 }
                
      

          

              if (guessLeft === 0) {
                alert("You lost!");
                reset();
      
              }

              


              guessesremaining.textContent = guessLeft;

              
   
            }   
 });

  
// execution of functions

     