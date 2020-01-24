
const API_KEY = 'V0XRE4Q-FTYMPCA-MDWV1J2-XCFC55F';

downloadsBeers();
function downloadsBeers(cantidad){
    const api = 'https://beerflix-api.herokuapp.com/api/v1/beers';
    return fetch(api, {
        method: 'GET',
        headers: {
            'X-API-KEY': API_KEY,
        }})
        .then(respuesta => respuesta.json())
        .then(datos => imprimirHTML(datos.beers))
      /*  .then(datos => console.log(datos.beers))*/
    }

 
  function imprimirHTML(datos){
      console.log(datos);
      datos.forEach(cervezas => {
        let cards = document.querySelector('#card');
        cards.innerHTML = `
        
        
        
        
        
        `
                /*
          const li = document.createElement('li');
          const {name, imagen } = cervezas;

          li.innerHTML = `
            Nombre: ${name}
            imagen: <img src="${imagen}">
          `;

          /*document.querySelector('app').appendChild(li);*/
      })
  }
