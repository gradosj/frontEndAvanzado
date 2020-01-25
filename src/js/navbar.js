import renderShowsDOM from '../js/shows.js';
const API_KEY = 'V0XRE4Q-FTYMPCA-MDWV1J2-XCFC55F';
console.log('navbar.js');


const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#input-search');
const button1 = document.querySelector('#submit');

searchForm.addEventListener('#submit', evt => {
    evt.preventDefault();
    if (searchInput.validity.valid) {
        renderShowsDOM(searchInput.value);
        console.log('Get shows');
    }
});


/* Evento clickar en el search */
button1.addEventListener('click', evt => {
    console.log('click!!! search');
    const filtro1 = document.getElementsByName('filtro')[0].value;
    console.log('hola' + filtro1);

  //  const filtroFecha = document.getElementById('filtroFecha')[0].value;
    let filtroFecha = document.getElementById('filtroFecha').value;
    console.log('valor filtroFecha --> ' ,filtroFecha);

    


   


    downloadsBeers(filtroFecha);
    



    

    function downloadsBeers(filtroFecha) {
    let fechaOK;

        if (filtroFecha != '') {
            fechaOK = goodDate(filtroFecha);
    
            console.log ('valor de fechaOK --> ', fechaOK);
            console.log(true)}


        console.log('filtro 1: ', filtro1);
        let api = `https://beerflix-api.herokuapp.com/api/v1/beers`;
        if (filtro1 != ''){
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

        datos.forEach(cervezas => {
           
            const {name, image, firstBrewed} = cervezas;


            console.log('la que me interese --> ', fechaOK)

            if(fechaOK == undefined){

            let cards = document.querySelector('#show-section');
            cards.innerHTML = cards.innerHTML + `
            <div id = 'show-section' class="col-md-4">
                <div class="card">
                <img class="card-img-top" height="600" src="${image}" alt="cerveza">
                <div class="card-body">
                    <h4 class="card-title">${name}</h4>
                    <p class="card-text">${firstBrewed}</p>
                    <a id="pruebaclic" href="#" class="btn btn-primary">Ir a …</a>
                </div>
                </div>
            </div>
            
            `;
        } else{
            let fechaInput = new Date ('01/' + fechaOK);
            let fechaBeer  = new Date ('01/' + firstBrewed);

            
            if (fechaInput.getTime() > fechaBeer.getTime()){
                let cards = document.querySelector('#show-section');
            cards.innerHTML = cards.innerHTML + `
            <div id = 'show-section' class="col-md-4">
                <div class="card">
                <img class="card-img-top" height="600" src="${image}" alt="cerveza">
                <div class="card-body">
                    <h4 class="card-title">${name}</h4>
                    <p class="card-text">${firstBrewed}</p>
                    <a id="pruebaclic" href="#" class="btn btn-primary">Ir a …</a>
                </div>
                </div>
            </div>
            
            `;
            }


        }



           
        })
    }
});

const goodDate = (filtroFecha) => {
    var info = filtroFecha.split('-');
    return  info[1] + '/' + info[0];
    
    


   

    
};