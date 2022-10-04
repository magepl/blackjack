let player = { name: 'Matt', chips: 51 };
let cards = [];
let hasBlackjack = false;
let isAlive = false;
let message = '';

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');

playerEl.textContent = player.name + ': £' + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard >= 12) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  hand = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards: ';

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }

  sumEl.textContent = `Sum: ${hand}`;
  if (hand <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (hand === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = 'You lose';
    isAlive = false;
  }

  messageEl.textContent = message;
}

function drawCard() {
  if (isAlive && hasBlackjack === false) {
    let newCard = getRandomCard();
    hand += newCard;
    cards.push(newCard);
    renderGame();
  }
}
