let firstArg = '';
let secondArg = '';
let operator = null;

function add(num1, num2) {
  return num1 + num2;
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

function repaint() {
  document.getElementById('display').value = secondArg;
}

function doMath() {
  secondArg = `${operator(+firstArg, +secondArg)}`;
}

function operatorPushed(op) {
  if (firstArg) {
    doMath();
  }

  firstArg = secondArg;
  secondArg = '';
  operator = op;
}

function btnPush(evt) {
  const btn = evt.target.dataset.btn;
  let canDoMath = !!firstArg;
  switch (btn) {
    case 'x':
      operatorPushed(multiply);
      break;
    case '/':
      operatorPushed(divide);
      break;
    case '+':
      operatorPushed(add);
      break;
    case '-':
      operatorPushed(subtract);
      break;
    case '=':
      doMath();
      break;
    case 'del':
      firstArg = '';
      secondArg = '';
      operator = null;
      break;
    default:
      secondArg += btn;
      break;
  }

  repaint();
}

document
  .querySelectorAll('.btn')
  .forEach((btn) => btn.addEventListener('click', btnPush));
