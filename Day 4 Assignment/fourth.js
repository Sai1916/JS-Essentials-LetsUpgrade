let input = prompt("Enter values with operator");
let num1 = input.split(",")[0];
let num2 = input.split(",")[1];
console.log(`${num1},${num2}`);
let choice;
console.log("Enter your choice of operaition");
console.log("1.Addition");
console.log("2.Subtraction");
console.log("3.Multiplication");
console.log("4.Division");
console.log("5.SqareRoot");
console.log("6.Percentage");

choice = prompt("Enter your choice of operaition");
while (true) {
  switch (choice) {
    case 1:
      let res = eval(num1 + num2);
      console.log(`Addition of ${num1} and ${num2} is ${num1}+${num2}`);
    case 2:
      console.log(`Subtraction of ${num1} and ${num2} is ${num1}-${num2}`);
    case 3:
      console.log(`Multiplication of ${num1} and ${num2} is ${num1}*${num2}`);
    case 4:
      console.log(`Division of ${num1} and ${num2} is ${num1}/${num2}`);
    case 5:
      let result1 = Math.sqrt(num1);
      let result2 = Math.sqrt(num2);
      console.log(
        `Sqareroot of ${num1} and ${num2} is ${result1} and ${result2}`
      );
    case 6:
      let res = (num1 / num2) * 100;
      console.log(`Percentage of ${num1} and ${num2} is ${res}`);
  }
}
