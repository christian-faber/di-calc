let firstArg = "";
let secondArg = "";
let operator = null;

function add(num1, num2) {
  return +num1 + +num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

//Populate Display. Change value to clicked button.
function display() {}

const operate = (firstArg, secondArg, operator) => {
  switch (operator) {
    case "+":
      return add(firstArg, secondArg);
    case "-":
      return subtract(firstArg, secondArg);
    case "*":
      return multiply(firstArg, secondArg);
    case "/":
      return divide(firstArg, secondArg);
  }
};

const displayNum = document.getElementById("display").value;
