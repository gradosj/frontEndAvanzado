import renderShowsDOM from '../js/shows.js';
console.log('navbar.js');


const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#input-search');

searchForm.addEventListener('#submit', evt => {
    evt.preventDefault();
    if (searchInput.validity.valid) {
        renderShowsDOM(searchInput.value);
        console.log('Get shows');
    }
})