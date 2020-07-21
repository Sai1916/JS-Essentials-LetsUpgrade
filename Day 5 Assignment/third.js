fetch("https://jsonplaceholder.typicode.com/todos?userId=1", {
  method: "GET",
  headers: JSON.stringify(),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/todos?id=19", {
  method: "GET",
  headers: JSON.stringify(),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/todos?completed=true", {
  method: "GET",
  headers: JSON.stringify(),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
