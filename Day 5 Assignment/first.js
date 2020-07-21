// 1st
function positiveNumber() {
  let num = prompt("Enter positive number");

  if (num > 0) {
    console.log(num, "is a positive number");
  } else {
    positiveNumber();
  }
}

positiveNumber();

// 2nd
let arr = [];
let input = prompt("Enter array of numbers");
arr = input;
console.log(arr);

// 3rd
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Odd numbers in an array");
values.filter((el) => {
  if (el % 2 != 0) {
    console.log(el);
  }
});

// 4th
console.log("Cubes of an array");
let array = [1, 2, 3, 4, 5, 6];
array.filter((el) => {
  console.log(el ** 3);
});
