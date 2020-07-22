let name = prompt("Enter your name");

let namePrint = document.getElementById("message");
namePrint.innerHTML = "Hello" + " " + name;

let clock = new Date();
let time1 = document.getElementById("time");
time1.innerText = clock.toLocaleTimeString();

function darkMode() {
  let dark = document.body;
  dark.classList.toggle("bcg-color");
}
