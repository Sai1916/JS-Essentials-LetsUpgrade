// var keyword
var name = "Naveen";
name = 19;
console.log(name); // if we have used "var" keyword then we can overwrite the value of that variable

// let keyword
{
  let name = "Sai";
  console.log(
    name
  ); /* if we have used "let" keyword then we cannot overwrite the value of that variable 
   which is already used. But we can use the let keyword and print that variable in the "{}" and we can 
   overwrite the value of that particular variable */
}

// const keyword
const person = "Vinod";
person = "Ali";
console.log(person); // We cannot change the value of a variable (or) object which is fixed as a constant
