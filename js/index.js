const SEARCH_URL = 'https://google.gprivate.com/search.php?search?q='

document.addEventListener('keypress', (key) => {
    if (key.key == 'Enter') {
        const query = document.getElementById('text-input').value;

        window.location = SEARCH_URL + query
    }
})