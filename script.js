const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");

// Define the API parameters
const protocol = "https://";
const api_url = "api.tenor.com/v1/";
const api_key = "LIVDSRZULELA";
const limit = 10;

// Handle the search button click event
searchButton.addEventListener("click", () => {
  const searchQuery = searchInput.value;

  // Construct the API URL
  const url = `${protocol}${api_url}search?q=${searchQuery}&key=${api_key}&limit=${limit}`;

  // Make the API request using XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.status === 200) {
      // Display the search results
      const results = xhr.response.results;
      searchResults.innerHTML = "";
      results.forEach((result) => {
        const img = document.createElement("img");
        img.src = result.media[0].gif.url;
        searchResults.appendChild(img);
      });
    } else {
      console.error(`Error ${xhr.status}: ${xhr.statusText}`);
    }
  };
  xhr.send();
});