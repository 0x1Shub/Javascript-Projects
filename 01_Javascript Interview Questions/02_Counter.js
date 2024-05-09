// Create a counter in Javascript (counts down from 30 to 0)

function startCountdown() {
  let count = 29;
  console.log(count);
  const intervalId = setInterval(() => {
    count--;
    console.log(count);
    if (count == 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

startCountdown();
