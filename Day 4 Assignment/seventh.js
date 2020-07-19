let value = prompt("Enter a value to print prime numbers below it");

for (let i = 1; i <= value; i++) {
  let count = 0;
  for (let j = 1; j <= value; j++) {
    if (i % j == 0) count++;
  }
  if (count == 2) console.log(i + "");
}
