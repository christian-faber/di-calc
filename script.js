let firstArg = "";
let secondArg = "";
let operator = "";
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
  if (!operator) {
    firstArg += e.target.textContent;
    console.log("FIRST ARG", firstArg);
    displayNum.value = "";
  } else if (e.target.classList.includes("operator")) {
    operator = e.target.textContent;
    console.log("operator log", operator);
  } else if (operator) {
    secondArg += e.target.textContent;

    console.log("second ARG", secondArg);
  }
}
// compute all

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

numButt.forEach((button) => {
  button.addEventListener("click", display);
});

opButt.forEach((button) => {
  button.addEventListener("click", display);
});

equalsButt.addEventListener("click", operate);
