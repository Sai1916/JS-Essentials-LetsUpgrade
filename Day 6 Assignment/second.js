function printTable() {
  let num = prompt("Enter a number to find multiplication table of it");
  if (num !== 0) {
    let multiply = "";
    let result = "";
    for (i = 1; i <= 10; i++) {
      result = num * i;
      multiply += num + " * " + i + " = " + result + "<br/>";
    }
    document.getElementById("table").innerHTML = multiply;
  } else {
    document.getElementById("table").innerHTML = "Please Enter a valid Number";
  }
}

printTable();
