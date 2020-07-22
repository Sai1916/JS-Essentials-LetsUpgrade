let marks = prompt("Enter your marks");

// Using Conditional Statements
if (marks >= 90) {
  console.log(`Entered marks are ${marks} and Grade is A`);
} else if (marks >= 80 && marks < 90) {
  console.log(`Entered marks are ${marks} and Grade is B`);
} else if (marks >= 70 && marks < 80) {
  console.log(`Entered marks are ${marks} and Grade is C`);
} else if (marks >= 60 && marks < 70) {
  console.log(`Entered marks are ${marks} and Grade is D`);
} else if (marks >= 50 && marks < 60) {
  console.log(`Entered marks are ${marks} and Grade is E`);
} else {
  console.log(`Entered marks are ${marks} and Grade is F`);
}

//Using Ternary Operator

function grade() {
  return marks >= 90
    ? "Entered marks are " + marks + " and Grade is A"
    : marks >= 80 && marks < 90
    ? "Entered marks are " + marks + " and Grade is B"
    : marks >= 70 && marks < 80
    ? "Entered marks are " + marks + " and Grade is C"
    : marks >= 60 && marks < 70
    ? "Entered marks are " + marks + " and Grade is D"
    : marks >= 50 && marks < 60
    ? "Entered marks are " + marks + " and Grade is E"
    : "Entered marks are " + marks + " and Grade is F";
}

console.log(grade());
