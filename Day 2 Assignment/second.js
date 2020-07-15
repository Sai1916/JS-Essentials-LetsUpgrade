// String Methods

let paragraph = "Today is Wednesday";

// repeat method takes an number to dispaly the text by number of times in the console
console.log(paragraph.repeat(2));

// replace method takes two arguments to replace the old character value with the new character value
console.log(paragraph.replace("a", "v"));

/* small method displays the text along with the small tags in the console and when we execute this in html
the text will be in small font */
console.log(paragraph.small());

// It Converts all alphabetic characters to lowercase, taking into account the host environment's current locale
console.log(paragraph.toLocaleLowerCase());

// It Converts all alphabetic characters to uppercase, taking into account the host environment's current locale
console.log(paragraph.toLocaleUpperCase());

// bold method retuns the HTML text in bold and along with b-tag in the console
console.log(paragraph.bold());

// charCodeAt method takes the index as input and it displays the ASCII value of character at given index
console.log(paragraph.charCodeAt(4));

// fontcolor method displays the text in the color which we have specified
console.log(paragraph.fontcolor("blue"));

// Array Methods

let array = ["Sai", "Hanuman", "Shiva", "Ganesh"];

/* fill method takes 3 arguments value, starting index and ending index. It displays the value from starting 
index to ending index */
console.log(array.fill("Venky", 1, 3));

/* includes method will search for a value from the starting index which we will assign and if it exists, 
then it will display true, else it will display false */
console.log(array.includes("Shiva", 1));

// slice method displays the values between given starting and ending index
console.log(array.slice(0, 2));

// copywithin method displays the value with repetition of given index value
array[2] = "Ram";
console.log(array.copyWithin(2, 0, 2));

// sort methods will displays values of an array in the ascending or descending order
console.log(array.sort());
