// DataTypes in JavaScript
// 1.Number

var num = 19;

console.log(num + " is a type of " + typeof num);

// 2.String

var name = "Krishna";
console.log(name + " is a type of " + typeof name);

// 3.Boolean

var a = 6;
var b = 8;
var bool = a === b;
console.log(bool + " is a type of " + typeof bool);

// 4.Object

var obj = { name: "Sai", gender: "Male" };
console.log(obj + " is a type of " + typeof obj);

// 5.Array

var array = ["1", "2", "3", "4", "5"];
console.log(
  array + " is a type of " + typeof array
); /* An array is an object
            and it is used to store multiple values in a single variable */

// 6.Undefined
var pack;
console.log(pack); // It prints the value as "undefined" because we haven't given any value to the variable that we declared

// 7.Null

var val = null;
console.log(val);

// 8.Function

var func = function () {};
console.log("func is a type of " + typeof func);
