console.clear(); // this statement clears all the previous executed commands from the console

console.log(
  "Hello World"
); /*this statement prints the corresponding text (or) value which was given 
in the paranthesis in the console of the browser*/

for (var i = 0; i < 5; i++) {
  console.count(i);
  console.count(i);
}
/* the statement "console.count()" prints a default value as "1" in the console and in the above example
  we have given the statement two times then it will increment the value by "1" for 2nd statement in the loop 
  because, it counts the occurance of "console.count()" statement */

console.error("Hey john"); // this statement shows an error in the console

var obj = { name: "Sai", age: 18 };
console.info(obj); // this gives the information about the input object in the console

console.warn("Paris"); // this prints a warning in the console

console.trace(obj); // this prints the object information to the console in the form of stack trace

var ts = "India";
console.time(
  ts
); /* this will start the timer for the specific object or variable to get how long 
                        it going to be executed in the console */
console.timeEnd(ts); // this will stops the timer which was before started by console.time() statement

console.table(obj); // this will print the object (or) key-value pairs in the form table
