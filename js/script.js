let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=NUJPrI00Q1qmCiRl2HUqnEGZYnE08xZI&q=kaleidoscope&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

let images = [];

// Gif container for output button function to exsist and search input being where you type your search
let gifContainer = document.querySelector("#gif-container");
let button = document.querySelector("#fetch-gif-btn");
let searchInput = document.querySelector("#search-input");

// lets user click fetch gifs and display endpoint 
button.addEventListener("click", function() {

// clear previous gifs
  gifContainer.innerHTML = "";

  // makes input in search bar the search input value
  let searchTerm = searchInput.value;
// changes endpoint from kaleidoscope to use the entry in search bar known as searchterm and puts it in a new endpoint giving a search function 
  let newEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=NUJPrI00Q1qmCiRl2HUqnEGZYnE08xZI&q=${searchTerm}&limit=10`;

// fetchs the endppoint to return gifs as objects in an array
  fetch(newEndpoint)
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