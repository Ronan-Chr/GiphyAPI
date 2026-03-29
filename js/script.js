let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=NUJPrI00Q1qmCiRl2HUqnEGZYnE08xZI&q=kaleidoscope&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

let images = [];

let gifContainer = document.querySelector("#gif-container");
let button = document.querySelector("#fetch-gif-btn");

button.addEventListener("click", function() {

// clear previous gifs
  gifContainer.innerHTML = "";

  fetch(endpoint)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {

      images = [];

// store urls
      for (let i = 0; i < data.data.length; i++) {
        images.push(data.data[i].images.original.url);
      }

      // display gifs
      for (let i = 0; i < images.length; i++) {
        gifContainer.innerHTML += `<img src="${images[i]}" class="col-3 mb-3">`;
      }

    });

});