let jokeText = document.getElementById("jokeText");
let button = document.getElementById("jokeBtn");
let spinner = document.getElementById("spinner");

function getJoke(event) {
  if (event.key === "Enter") {
    spinner.classList.toggle("d-none");
    jokeText.textContent = "";
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
      method: "GET",
    };
    fetch(url, options)
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        spinner.classList.toggle("d-none");
        jokeText.textContent = data;
      });
  }
}
button.addEventListener("keydown", getJoke);
