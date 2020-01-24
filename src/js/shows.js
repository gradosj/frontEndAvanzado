console.log('shows.js');

const templateShow = () => {
    return `
    <div class="col-md-4">
    <div class="card">
      <img class="card-img-top" src="/src/images/cerveza.png" alt="cerveza">
      <div class="card-body">
        <h4 class="card-title">${show.tittle}</h4>
        <p class="card-text">${show.summary}</p>
        <a id="pruebaclic" href="#" class="btn btn-primary">Ir a …</a>
      </div>
    </div>
  </div>   
    `
}

const renderShows = (element, items) => {
    const htmlShows = items.map(templateShow);
    element.innerHTML = htmlShows;
};

const renderShowsDOM = text => {
    const shows = [
        {title: 'show 1', summary: 'loren impsun'},
        {title: 'show 2', summary: 'loren impsun 2'},
    ];
    const showSection = document.querySelector('show-section');
    renderShows(showSection, shows);
};

console.log(renderShows);
console.log(renderShowsDOM);


export default renderShowsDOM;