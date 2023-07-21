let firstArg = "";
let secondArg = "";
let operator = null;
const displayNum = document.getElementById("display");
const numButt = document.querySelectorAll(".number");
const opButt = document.querySelectorAll(".operator");
const equalsButt = document.querySelector(".equal");

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
function display(e) {
  displayNum.value += e.target.textContent;
}
// compute all

const operate = (firstArg, secondArg, operator) => {
  console.log("test");
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

numButt.forEach((button) => {
  button.addEventListener("click", display);
});

opButt.forEach((button) => {
  button.addEventListener("click", display);
});

equalsButt.addEventListener("click", operate);
