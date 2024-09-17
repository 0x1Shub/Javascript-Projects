let timerInterval;
let remainingTime;

const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

startButton.addEventListener("click", () => {
  const inputHours = parseInt(document.getElementById("inputHours").value) || 0;
  const inputMinutes =
    parseInt(document.getElementById("inputMinutes").value) || 0;
  const inputSeconds =
    parseInt(document.getElementById("inputSeconds").value) || 0;

  remainingTime = inputHours * 3600 + inputMinutes * 60 + inputSeconds;
  if (remainingTime > 0) {
    startTimer();
  }
});

pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      alert("Time is up!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  remainingTime = 0;
  updateTimerDisplay();
  document.getElementById("inputHours").value = "";
  document.getElementById("inputMinutes").value = "";
  document.getElementById("inputSeconds").value = "";
}

function updateTimerDisplay() {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  hoursElement.innerText = hours.toString().padStart(2, "0");
  minutesElement.innerText = minutes.toString().padStart(2, "0");
  secondsElement.innerText = seconds.toString().padStart(2, "0");
}
