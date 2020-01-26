
import storage from './storage.js';
/*import renderShowsDOM from '../js/shows.js';*/
const API_KEY = 'V0XRE4Q-FTYMPCA-MDWV1J2-XCFC55F';
console.log('navbar.js');
const INPUT_STORAGE_ID = 'navbar-input';
const INPUT_STORAGE_FECHA = 'navbar-fecha';
const { setItem, getItem } = storage('lStorage');
const searchForm = document.querySelector('#search-form');
const fechaInput = document.querySelector('#filtroFecha');
const searchInput = document.querySelector('#input-search');
const button1 = document.querySelector('#submit');


searchInput.value = getItem(INPUT_STORAGE_ID);
fechaInput.value = getItem(INPUT_STORAGE_FECHA);

/*
searchForm.addEventListener('submit', evt => {
    evt.preventDefault();
    if (searchInput.validity.valid) {
        renderShowsDOM(searchInput.value);
        console.log('Get shows');
    }
});*/


/* Evento clickar en el search */
button1.addEventListener('click', evt => {
    console.log('click!!! search');
    const filtro1 = document.getElementsByName('filtro')[0].value;
    console.log('hola' + filtro1);

    //  const filtroFecha = document.getElementById('filtroFecha')[0].value;
    let filtroFecha = document.getElementById('filtroFecha').value;
    console.log('valor filtroFecha --> ', filtroFecha);

    setItem(INPUT_STORAGE_ID, filtro1);
    setItem(INPUT_STORAGE_FECHA, filtroFecha);

    downloadsBeers(filtroFecha);

    function downloadsBeers(filtroFecha) {
        let fechaOK;

        if (filtroFecha != '') {
            fechaOK = goodDate(filtroFecha);

            console.log('valor de fechaOK --> ', fechaOK);
            console.log(true)
        }


        console.log('filtro 1: ', filtro1);
        let api = `https://beerflix-api.herokuapp.com/api/v1/beers`;
        if (filtro1 != '') {
            api = `https://beerflix-api.herokuapp.com/api/v1/beers?search=${filtro1}`;
        }

        return fetch(api, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
            }
        })
            .then(respuesta => respuesta.json())
            .then(datos => imprimirHTML(datos.beers, fechaOK))
        /*  .then(datos => console.log(datos.beers))*/
    }

    function imprimirHTML(datos, fechaOK) {
        console.log(datos);
        let contador = 0;
        const listadoMaximo = 10;

        console.log(contador);


        datos.forEach(cervezas => {
            if (contador < listadoMaximo) {

                const { name, image, firstBrewed, beerId } = cervezas;


                console.log('la que me interese --> ', fechaOK)

                if (fechaOK == undefined) {

                    let cards = document.querySelector('#show-section');
                    cards.innerHTML = cards.innerHTML + `
            <div id = 'show-section' class="col-md-4">
                <div class="card">
                <img class="card-img-top img-fluid redimension" height="600" src="${image}" alt="cerveza">
                <div class="card-body">
                    <h4 class="card-title">${name}</h4>
                    <p class="card-text">${firstBrewed}</p>
                    <a id="detalle" href="/detail/${beerId}" class="btn btn-primary">Ir a …</a>
                </div>
                </div>
            </div>
            
            `;
                } else {
                    let fechaInput = new Date('01/' + fechaOK);
                    let fechaBeer = new Date('01/' + firstBrewed);


                    if (fechaInput.getTime() > fechaBeer.getTime()) {
                        let cards = document.querySelector('#show-section');
                        cards.innerHTML = cards.innerHTML + `
            <div id = 'show-section' class="col-md-4">
                <div class="card">
                <img class="card-img-top img-fluid redimension" height="600" src="${image}" alt="cerveza">
                <div class="card-body">
                    <h4 class="card-title">${name}</h4>
                    <p class="card-text">${firstBrewed}</p>
                    <a id="detalle" href="/detail/${beerId}" class="btn btn-primary">Ir a …</a>
                </div>
                </div>
            </div>
            
            `;

                    }
                }
                contador++;
            }
        })
    }

});

const goodDate = (filtroFecha) => {
    var info = filtroFecha.split('-');
    return info[1] + '/' + info[0];


};

