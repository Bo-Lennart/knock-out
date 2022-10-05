//Variabler för att representera nuvarande knock-out-number samt Score
var pickedKON = null; 
var score = 0;

//De fyra möjliga nock-out siffrorna som spelaren kan välja
var button6 = document.getElementById('button6');

var button7 = document.getElementById('button7');

var button8 = document.getElementById('button8');

var button9 = document.getElementById("button9");


//Knapp för att trigga "slå tärningarna och generera två stycken slumpvalda tal mellan 1-6"
var rollDiceButton = document.getElementById('rollDice');

//Här lyssnar vi efter ett klick för varje knapp och skickar in i funktionen pickKnockOutNumber, färglgga den röd och göra de andra "disabled"
button6.addEventListener('click', () => pickKnockOutNumber(6));
button7.addEventListener('click', () => pickKnockOutNumber(7));
button8.addEventListener('click', () => pickKnockOutNumber(8));
button9.addEventListener('click', () => pickKnockOutNumber(9));
rollDiceButton.addEventListener('click', rollDice);

//Funktionen som gör alla knappar disabled, färglägger knockout-numret samt gör "roll dice" klickbar.
function pickKnockOutNumber(knockOutNumber) {
  button6.disabled = true;
  button7.disabled = true;
  button8.disabled = true;
  button9.disabled = true;

  document.getElementById('button'+knockOutNumber).style.backgroundColor = "red";
  document.getElementById('rollDice').disabled = false;
  //säger att pickedKON är lika med KnockOutNumber
  pickedKON = knockOutNumber;
}

//funktionen som slår tärningarna 1 och 2
function rollDice() {
  var randomNumber1 = getRandomNumber(1,6);
  document.getElementById('dice_1').innerHTML = randomNumber1;
  var randomNumber2 = getRandomNumber(1,6);
  document.getElementById('dice_2').innerHTML = randomNumber2;
  var sum = sumOfDices(randomNumber1, randomNumber2);

  console.log(sum === pickedKON)
  if (sum === pickedKON) {
    //skapar alert med scoren som spelaren fick och gömmer allt från sidan
    alert(`Din Score: ${score}`);
    document.getElementById('gamePage').style.display = 'none';
    
    //skapar knapp för att börja om (refresh sida)
    var newGame = document.createElement("button");
    newGame.innerHTML = "Play again!";
    var body = document.getElementById('body');
    body.appendChild(newGame);
    newGame.addEventListener('click', refreshPage);
    function refreshPage(){
      window.location.reload();
    }

    //lägger på siffror som slås med tärningarna på scoren
  } else {
    score = score + sum;
    document.getElementById('score').innerHTML = score;
  }
}


//summerar tärningsvärderna
function sumOfDices(dice1, dice2) {
  var sum =  dice1 + dice2;
  document.getElementById('dices_sum').innerHTML = sum;
  return sum;
}

//Hitta slumpmässigt nummer mellan 1-6
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}





