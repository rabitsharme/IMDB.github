// Sample movie data (you would fetch this from a real database or API)
const movies = [
    { title: "Movie 1", year: 2020, rating: 8.5 },
    { title: "Movie 2", year: 2019, rating: 7.8 },
    { title: "Movie 3", year: 2021, rating: 9.0 },
    // Add more movie data here
];

// Function to display movie results
function displayMovies(searchResults) {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";

    if (searchResults.length === 0) {
        movieList.innerHTML = "<p>No results found.</p>";
    } else {
        searchResults.forEach(movie => {
            const movieItem = document.createElement("div");
            movieItem.classList.add("movie-item");
            movieItem.innerHTML = `
                <h2>${movie.title} (${movie.year})</h2>
                <p>Rating: ${movie.rating}</p>
            `;
            movieList.appendChild(movieItem);
        });
    }
}

// Function to handle the search button click
function searchMovies() {
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.toLowerCase();

    // Filter movies based on the search term
    const searchResults = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    
    displayMovies(searchResults);
}

// Add event listener to the search button
document.getElementById("search-button").addEventListener("click", searchMovies);
