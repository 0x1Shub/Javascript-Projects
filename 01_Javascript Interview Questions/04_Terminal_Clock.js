// Create a terminal clock (HH:MM:SS);

function displayClock() {
  const pad = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const updateClock = () => {
    const now = new Date();
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    console.clear();
    console.log(`${hours}:${minutes}:${seconds}`);
  };

  setInterval(updateClock, 1000);
}

displayClock();
