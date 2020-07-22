function add() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;
  let result = document.getElementById("res");
  let res1 = "The Addition of " + num1 + " and " + num2 + " is ";
  result.innerHTML = res1 + String(parseInt(num1) + parseInt(num2));
}

function subtract() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;
  let result = document.getElementById("res");
  let res1 = "The Subtraction of " + num1 + " and " + num2 + " is ";
  result.innerHTML = res1 + String(parseInt(num1) - parseInt(num2));
}

function division() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;
  let result = document.getElementById("res");
  let res1 = "The Division of " + num1 + " and " + num2 + " is ";
  result.innerHTML = res1 + String(parseInt(num1) / parseInt(num2));
}

function multiply() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;
  let result = document.getElementById("res");
  let res1 = "The Multiplication of " + num1 + " and " + num2 + " is ";
  result.innerHTML = res1 + String(parseInt(num1) * parseInt(num2));
}

function squareRoot() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;
  let result = document.getElementById("res");
  let res1 = "The Square Root of " + num1 + " is ";
  result.innerHTML = res1 + String(Math.sqrt(parseInt(num1)));
}

function percentage() {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;
  let result = document.getElementById("res");
  let res1 = "The Percentage of " + num1 + " and " + num2 + " is ";
  result.innerHTML = res1 + String((parseInt(num1) / 100) * parseInt(num2));
}
