let aNumber;
let anotherNumber;
let theOperator;
let mathObject = {
  firstNumber: null,
  secondNumber: null,
  operator: null,
};

const display = document.querySelector(".display");

function add(firstNumber, secondNumber) {
  let results = (firstNumber += secondNumber);
  display.value = results;
}

function subtract(firstNumber, secondNumber) {
  let results = (firstNumber -= secondNumber);
  display.value = results;
}

function multiply(firstNumber, secondNumber) {
  let results = (firstNumber *= secondNumber);
}

function divide(firstNumber, secondNumber) {
  let results;
  if (firstNumber && secondNumber != 0) {
    results = firstNumber /= secondNumber;
  } else results = "undefined";
  display.value = results;
}

function operate(firstNumber, secondNumber, operator) {
  console.log(firstNumber, secondNumber, operator);

  switch (operator) {
    case "+":
      add(firstNumber, secondNumber);
      break;
    case "-":
      subtract(firstNumber, secondNumber);
      break;
    case "x":
      multiply(firstNumber, secondNumber);
      break;
    case "/":
      divide(firstNumber, secondNumber);
      break;
    default:
    // display.value = "Plz enter a second number!";
    // throw new Error("Not every value is present");
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  if (button.className.length == 0) {
    button.addEventListener("click", () => {
      console.log(button.textContent);
      display.value += button.textContent;
    });
  } else if (button.className == "operator") {
    button.addEventListener("click", () => {
      mathObject.operator = button.textContent;
      let theCurrentNumber = display.value;

      if (mathObject.firstNumber === null) {
        mathObject.firstNumber = theCurrentNumber;
        console.log(mathObject.firstNumber);
      } else if (
        mathObject.secondNumber === null &&
        mathObject.operator != null
      ) {
        console.log("why is this being called?");
      }

      display.value = "";
      switch (mathObject.operator) {
        case "+":
          console.log("Addition");
          mathObject.operator = "+";
          break;
        case "-":
          console.log("Subtraction");
          mathObject.operator = "-";
          break;
        case "x":
          console.log("Multiplication");
          mathObject.operator = "x";
          break;
        case "/":
          mathObject.operator = "/";
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
      if (mathObject.firstNumber === null) {
        console.log("firstNumber is empty");
      } else if (mathObject.secondNumber === null) {
        mathObject.secondNumber = display.value;
      }
      operate(
        mathObject.firstNumber,
        mathObject.secondNumber,
        mathObject.operator
      );
      console.log(
        mathObject.firstNumber,
        mathObject.secondNumber,
        mathObject.operator
      );
    });
  }
});
