let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let hand = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function startGame() {
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
  let newCard = 7;
  hand += newCard;
  cards.push(newCard);
  renderGame();
}
