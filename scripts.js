let aNumber;
let anotherNumber;
let theOperator;

function add(firstNumber, secondNumber) {
  return;
}

function subtract(firstNumber, secondNumber) {
  return;
}

function multiply(firstNumber, secondNumber) {
  return;
}

function divide(firstNumber, secondNumber) {
  return;
}

function operate(firstNumber, secondNumber, operator) {
  return;
}

/* add event listener to the number-buttons */
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach((button) => {
  if (button.className.length == 0) {
    button.addEventListener("click", () => {
      display.value = button.textContent;
    });
  }
});
