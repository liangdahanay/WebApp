var color = ["blue", "cyan","gold","gray","green","magenta","orange","red","white","yellow"];
var length = color.length;
var guess;
var target;
var count;

function colorGuessGame(){
  var target_index = Math.floor(Math.random()*length);
  target = color[target_index];
  alert(target);
  var finish = false;
  count = 0;
  while(!finish){
    guess=prompt( "I am thinking one of these colors:\n\n"
                  + color.join(", ") +"\n\n"
                  + "What color am I thinking of?"
                );
    count++;
    finish = checkGuess();
  }
}
function checkGuess(){
  if(color.indexOf(guess)<0){
    alert("Sorry, I don't recognize your color.\n\n"
          + "Please try again."
    );
    return false;
  }
  if(guess<target){
    alert("Sorry, your guess is not correct!\n\n"
          +"Hint: your color is alphabetically smaller than mine.\n\n"
          +"Please try again."
    );
    return false;
  }
  if(guess>target){
    alert("Sorry, your guess is not correct!\n\n"
          +"Hint: your color is alphabetically higher than mine.\n\n"
          +"Please try again."
    );
    return false;
  }
  myBody=document.getElementsByTagName("body")[0];
  myBody.style.background=target;
  alert("Congratulations! You have guessed the color!\n\n"
        +"It took you "+ count+ " guesses to finish the game!\n\n"
        +"You can see the colour in the background."
  );

  return true;
}
