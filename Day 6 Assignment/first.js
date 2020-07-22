let colors = ["red", "green", "blue", "yellow"];
let num = 0;

function colorChange() {
  document.bgColor = colors[num];
  document.body.style.color = "white";
  num = (num + 1) % colors.length;
  setTimeout(colorChange, 5000);
}
