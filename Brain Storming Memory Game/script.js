document.addEventListener("DOMContentLoaded", function () {
  const imageSources = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
  ];
  const gameBoard = document.querySelector(".game-board");
  const scoreDisplay = document.getElementById("score");
  const timerDisplay = document.getElementById("timer");
  const restartButton = document.getElementById("restart-btn");

  let cards = [];
  let flippedCards = [];
  let score = 0;
  let timer;
  let timeElapsed = 0;

  function init() {
    clearInterval(timer);
    score = 0;
    timeElapsed = 0;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = formatTime(timeElapsed);
    generateCards();
    startTimer();
  }

  function generateCards() {
    const shuffledSources = [...imageSources, ...imageSources].sort(
      () => Math.random() - 0.5
    );
    cards = shuffledSources.map(createCard);
    gameBoard.innerHTML = "";
    cards.forEach((card) => gameBoard.appendChild(card));
  }

  function createCard(source) {
    const card = document.createElement("div");
    card.classList.add("card");
    const image = document.createElement("img");
    image.src = source;
    card.appendChild(image);
    card.addEventListener("click", () => flipCard(card));
    return card;
  }

  function flipCard(card) {
    if (!flippedCards.includes(card) && flippedCards.length < 2) {
      card.classList.add("flipped");
      flippedCards.push(card);
      if (flippedCards.length === 2) {
        checkForMatch();
      }
    }
  }

  function checkForMatch() {
    const [card1, card2] = flippedCards;
    const symbol1 = card1.querySelector("img").src;
    const symbol2 = card2.querySelector("img").src;
    if (symbol1 === symbol2) {
      score++;
      scoreDisplay.textContent = score;
      flippedCards = [];
      if (score === imageSources.length) {
        clearInterval(timer);
        setTimeout(() => alert("Congratulations! You won!"), 500);
      }
    } else {
      setTimeout(() => {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        flippedCards = [];
      }, 1000);
    }
  }

  function startTimer() {
    timer = setInterval(() => {
      timeElapsed++;
      timerDisplay.textContent = formatTime(timeElapsed);
    }, 1000);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  restartButton.addEventListener("click", init);
  init();
});
