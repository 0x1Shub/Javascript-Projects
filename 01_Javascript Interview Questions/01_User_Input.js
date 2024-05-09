const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Please enter your name: ", (userInput) => {
  console.log(`Hello ${userInput}!, Welcome to our website.`);
  r1.close();
});
