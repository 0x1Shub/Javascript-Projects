// Calculate the time it takes between a setTimeout call and the inner function actually running

function calculateTime() {
  const startTime = Date.now();
  setTimeout(() => {
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    console.log(`Elasped time is : ${elapsedTime} milisecond`);
  });
}

calculateTime();
