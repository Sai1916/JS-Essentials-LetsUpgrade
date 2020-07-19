let sales = prompt("Enter no of sales");

if (sales >= 0 && sales <= 5000) {
  console.log(Math.log10(2));
} else if (sales >= 5001 && sales <= 10000) {
  console.log(Math.log10(5));
} else if (sales >= 10001 && sales <= 20000) {
  console.log(Math.log10(7));
} else if (sales > 20000) {
  console.log(Math.log10(10));
}
