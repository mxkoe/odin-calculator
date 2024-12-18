let aNumber;
let anotherNumber;
let theOperator;
let mathObject = {
  firstNumber: 0,
  secondNumber: 0,
  operator: "",
};

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
      console.log(button.textContent);
      display.value += button.textContent;
    });
  } else if (button.className == "operator") {
    button.addEventListener("click", () => {
      let theChosenOperator = button.textContent;
      switch (theChosenOperator) {
        case "+":
          console.log("Addition");
          break;
        case "-":
          console.log("Subtraction");
          break;
        case "x":
          console.log("Multiplication");
          break;
        case "/":
          console.log("Division");
          break;
        default:
          console.log("Hopefully we called the correct function");
          break;
      }
    });
  } else if (button.className == "clear") {
    button.addEventListener("click", () => {
      display.value = "";
    });
  } else if (button.className == "equals") {
    button.addEventListener("click", () => {
      console.log("let's call the operate function");
    });
  }
});
