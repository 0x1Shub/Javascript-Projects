const inputBox = document.querySelector(".inputBox");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "X", "/", "-", "+", "="];
let output = "";

const calculateValue = (btnValue) => {
  if (btnValue === "=" && btnValue !== "") {
    // output = eval(output.replace("%", "/100"));
    try {
      // Replace 'X' with '*' for multiplication
      let expression = output.replace("X", "*");
      // Handle modulus operator
      expression = expression.replace(/(\d+)%(\d+)/g, "($1%$2)");
      output = eval(expression);
    } catch (error) {
      output = "Error";
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    // remove last character
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  inputBox.value = output;
};

// Add Click Listener on buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculateValue(e.target.innerText));
});
