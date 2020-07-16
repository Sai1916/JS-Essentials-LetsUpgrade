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

// Using Switch-Case
if (marks <= 100) {
  let mark = marks / 10;
  switch (mark) {
    case 10:
    case 9:
      console.log(`Entered marks are ${marks} and Grade is A`);
      break;
    case 8:
      console.log(`Entered marks are ${marks} and Grade is B`);
      break;
    case 7:
      console.log(`Entered marks are ${marks} and Grade is C`);
      break;
    case 6:
      console.log(`Entered marks are ${marks} and Grade is D`);
      break;
    case 5:
      console.log(`Entered marks are ${marks} and Grade is E`);
      break;
    default:
      console.log(`Entered marks are ${marks} and Grade is F`);
  }
}
