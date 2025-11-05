
function debounce(func, wait) {
    let timeoutId;
    return function(...args) {
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

// Example usage:
const searchInput = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');

function search(query) {
    console.log(`Searching for: ${query}`);
    // In a real application, you would make an API call here
    resultsDiv.textContent = `Search results for: ${query}`;
}

// Debounce the search function to wait 500ms after user stops typing
const debouncedSearch = debounce(search, 5000);

// Add event listener to input
searchInput?.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});

// HTML structure needed for this example:
/*
<input type="text" id="search-input" placeholder="Search...">
<div id="results"></div>
*/
