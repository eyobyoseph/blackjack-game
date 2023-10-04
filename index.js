let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let isAlive = false;
let hasBlackJack = false;
let messageEl = document.getElementById("message");
let cardEl = document.getElementById("card");
let sumEl = document.getElementById("sum");
let cards = [firstCard,secondCard];


function startGame() {
  renderGame();
  isAlive = true;
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random()*13)+1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function renderGame() {
  if (sum === 21) {
    messageEl.textContent = "You have got blackJack";
    hasBlackJack = true;
  } else if (sum < 21) {
    messageEl.textContent = "You are in the game";
  } else {
    messageEl.textContent = "You are out of the game";
    isAlive = false;
  }
  cardEl.textContent = "cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent = cardEl.textContent + cards[i] + " ";     
  }
  sumEl.textContent = "sum:" + sum;
 
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {

  }
  let card = getRandomCard();
  sum+=card;
  cards.push(card);
  // cardEl.textContent = cardEl.textContent + " " + card;
  // sumEl.textContent = "sum:" + sum;
  renderGame();
}