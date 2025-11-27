const API_URL = "https://jsonplaceholder.typicode.com/posts/1";

async function fetchData(callback) {
  const response = await fetch(API_URL);
  const data = await response.json();
  callback(data);
}

document.getElementById("btn").addEventListener("click", () => {
  fetchData((result) => {
    document.getElementById("output").textContent = result.title;
  });
});

