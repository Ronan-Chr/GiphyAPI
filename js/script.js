let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=NUJPrI00Q1qmCiRl2HUqnEGZYnE08xZI&q=kaleidoscope&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

let images = [];

fetch(endpoint)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    // loop through gifs
    for (let i = 0; i < data.data.length; i++) {
      images.push(data.data[i].images.original.url);
    }

    // proof it worked (on page, not console)
    document.querySelector("#gif-container").innerHTML = images.length + " gifs loaded";

  });