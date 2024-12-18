let mathObject = {
  firstNumber: null,
  secondNumber: null,
  operator: null,
  calculationResult: null,
};

const display = document.querySelector(".display");

function add(firstNumber, secondNumber) {
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return "Invalid input!";
  } else return (mathObject.calculationResult = firstNumber += secondNumber);
}

function subtract(firstNumber, secondNumber) {
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return "Invalid input!";
  } else return (mathObject.calculationResult = firstNumber -= secondNumber);
}

function multiply(firstNumber, secondNumber) {
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return "Invalid input!";
  } else return (mathObject.calculationResult = firstNumber *= secondNumber);
}

function divide(firstNumber, secondNumber) {
  if (firstNumber != 0 && secondNumber != 0) {
    mathObject.calculationResult = firstNumber /= secondNumber;
    mathObject.firstNumber = parseInt(mathObject.calculationResult);
    display.value = mathObject.calculationResult;
  } else display.value = "undefined";
}

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      display.value = add(firstNumber, secondNumber);
      break;
    case "-":
      display.value = subtract(firstNumber, secondNumber);
      break;
    case "x":
      display.value = multiply(firstNumber, secondNumber);
      break;
    case "/":
      display.value = divide(firstNumber, secondNumber);
      break;
    default:
      display.value = "Enter a second number!";
  }
  mathObject.firstNumber = parseInt(mathObject.calculationResult);
  mathObject.secondNumber = null;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  if (button.className.length == 0) {
    button.addEventListener("click", () => {
      display.value += button.textContent;
    });
  } else if (button.classList.contains("operator")) {
    button.addEventListener("click", () => {
      mathObject.operator = button.textContent;
      let theCurrentNumber = display.value;

      if (mathObject.firstNumber === null) {
        mathObject.firstNumber = parseInt(theCurrentNumber);
      } else if (
        mathObject.secondNumber === null &&
        mathObject.operator != null
      ) {
      }

      display.value = "";
      switch (mathObject.operator) {
        case "+":
          mathObject.operator = "+";
          break;
        case "-":
          mathObject.operator = "-";
          break;
        case "x":
          mathObject.operator = "x";
          break;
        case "/":
          mathObject.operator = "/";
          break;
        default:
          break;
      }
    });
  } else if (button.classList.contains("clear")) {
    button.addEventListener("click", () => {
      display.value = "";
    });
  } else if (button.classList.contains("equals")) {
    button.addEventListener("click", () => {
      if (mathObject.firstNumber === null) {
      } else if (display.value == "0") {
      } else if (mathObject.secondNumber === null && display.value != "0") {
        mathObject.secondNumber = parseInt(display.value);
      } else if (
        (mathObject.firstNumber != null,
        mathObject.secondNumber != null && mathObject.operator != null)
      ) {
        operate(
          mathObject.firstNumber,
          mathObject.secondNumber,
          mathObject.operator
        );
      }
    });
  }
});
