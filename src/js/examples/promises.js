function dataThen() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch();
}

function dataThen2() {
  fetch("https://jsonplaceholder.typicode.com/todos/2")
    .then((response) => response.json().then((data) => console.log(data)))
    .catch();
}

async function dataAsyncAwait() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
  const result = await response.json();

  console.log(result);
}

async function dataAsyncAwait2() {
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/todos/4"
  ).then((data) => data.json());

  console.log(result);
}

// dataAsyncAwait2();
