document
  .getElementById("calculateButton")
  .addEventListener("click", calculateTip);

function calculateTip() {
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const tipPercentage = parseFloat(
    document.getElementById("tipPercentage").value
  );

  if (
    isNaN(billAmount) ||
    isNaN(tipPercentage) ||
    billAmount <= 0 ||
    tipPercentage < 0
  ) {
    alert("Please enter valid values for both bill amount and tip percentage.");
    return;
  }

  const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
  const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

  // Display the results
  document.getElementById("tipAmount").innerText = tipAmount;
  document.getElementById("totalAmount").innerText = totalAmount;
}
