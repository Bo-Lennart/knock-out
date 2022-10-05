/**
 * Declare variable for start score and number
 */
var pickedKON = null; 
var score = 0;

/**
 * Declare variables for each button/dice
 */
var button6 = document.getElementById('button6');

var button7 = document.getElementById('button7');

var button8 = document.getElementById('button8');

var button9 = document.getElementById("button9");

/**
 * Button så roll two random numbers between 1-6
 */
var rollDiceButton = document.getElementById('rollDice');

/**
 * Add eventlistener to trigger pickKnockOutNumber function
 */
button6.addEventListener('click', () => pickKnockOutNumber(6));
button7.addEventListener('click', () => pickKnockOutNumber(7));
button8.addEventListener('click', () => pickKnockOutNumber(8));
button9.addEventListener('click', () => pickKnockOutNumber(9));
rollDiceButton.addEventListener('click', rollDice);

/**
 * Function to disable all buttons, set color for knock-out nr and make "roll" button klickable
 */
function pickKnockOutNumber(knockOutNumber) {
  button6.disabled = true;
  button7.disabled = true;
  button8.disabled = true;
  button9.disabled = true;

  document.getElementById('button'+knockOutNumber).style.backgroundColor = "red";
  document.getElementById('rollDice').disabled = false;

  pickedKON = knockOutNumber;
}

/**
 * Function to role random number for each roll number
 */
function rollDice() {
  var randomNumber1 = getRandomNumber(1,6);
  document.getElementById('dice_1').innerHTML = randomNumber1;
  var randomNumber2 = getRandomNumber(1,6);
  document.getElementById('dice_2').innerHTML = randomNumber2;
  var sum = sumOfDices(randomNumber1, randomNumber2);

  console.log(sum === pickedKON)
  if (sum === pickedKON) {
    /**
     * Trigger end game alert
     */
    alert(`GAME OVER: Your Score: ${score}`);
    document.getElementById('gamePage').style.display = 'none';
    
    /**
     * Create button to start over and play again
     */
    var newGame = document.createElement("button");
    newGame.innerHTML = "Play again!";
    var body = document.getElementById('body');
    body.appendChild(newGame);
    newGame.addEventListener('click', refreshPage);
    function refreshPage(){
      window.location.reload();
    }

/**
 * add score to current score nr
 */
  } else {
    score = score + sum;
    document.getElementById('score').innerHTML = score;
  }
}

/**
 * calculate the sum of dices into score
 */
//summerar tärningsvärderna
function sumOfDices(dice1, dice2) {
  var sum =  dice1 + dice2;
  document.getElementById('dices_sum').innerHTML = sum;
  return sum;
}

/**
 * Generate random number between 1-6
 */
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}





