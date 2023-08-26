const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-form input');

function handleSearchSubmit(event) {
    event.preventDefault();
    const url = 'https://www.google.com/search?q=' + searchInput.value;
    window.open(url);
    searchInput.value = '';
}

searchForm.addEventListener('submit', handleSearchSubmit);
