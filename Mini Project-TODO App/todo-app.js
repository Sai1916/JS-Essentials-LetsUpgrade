function Add() {
  const input = document.getElementById("msg");
  const list = document.querySelector("#list");
  const item = document.createElement("li");
  const button = document.createElement("button");
  const button_item = document.createTextNode(button);
  const list_item = document.createTextNode(input.value);
  item.appendChild(list_item);
  if (input.value === "") {
    alert("Enter something!!!");
  } else {
    let itemsArray = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [];
    list.appendChild(item);
    list.appendChild(button);
    button.appendChild(button_item);
    button.textContent = "delete";

    itemsArray.push(input.value);
    document.getElementById("msg").value = "";
    window.localStorage.setItem("items", JSON.stringify(itemsArray));
    window.localStorage.getItem("items");

    button.onclick = () => {
      list.removeChild(item);
      list.removeChild(button);
    };
  }
}
