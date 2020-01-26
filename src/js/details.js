
const API_KEY = 'V0XRE4Q-FTYMPCA-MDWV1J2-XCFC55F';
const detail = document.querySelector('#detalle');
let pintado = false;

/*detail.addEventListener('click', evt => {

  downloadsDetails(beerId);*/
  function downloadsDetails(beerId) {
    pintado = true;
    console.log('pintado: ',pintado)



    let api = `https://beerflix-api.herokuapp.com/api/v1/beers/${beerId}`;
    console.log(api);

    return fetch(api, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
      }
    })
      .then(respuesta => respuesta.json())
      .then(datos => imprimirHTML(datos.beer))
    /*  .then(datos => console.log(datos.beers))*/
  }

  function imprimirHTML(datos) {

    
    console.log('entra en imprimir html: ' , datos);
    typeof(datos);

      const { name, image, firstBrewed, beerId, description, likes} = datos;
             
        let cards = document.querySelector('#show-section');
        cards.innerHTML =  `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${image}" class="card-img redimension" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${firstBrewed}</p>
              <p class="card-text">${description}</p>
              
              <p id = "imgLikes" class="card-text"><small class="text-muted">LIKE! ${likes}</small></p>
            </div>
          </div>
        </div>
      </div>
          
          `;

          const imgLikes = document.querySelector('#imgLikes');
          imgLikes.addEventListener('click', evt => {
        
            pushLikes(beerId);
        
            function pushLikes(beerId) {
      
                let api = `https://beerflix-api.herokuapp.com/api/v1/beers/${beerId}/like`;
               
        
                return fetch(api, {
                    method: 'POST',
                    headers: {
                        'X-API-KEY': API_KEY,
                    }
                })
                    .then(respuesta => respuesta.json())
                    .then(datos => imprimirHTML(datos.beer))
                /*  .then(datos => console.log(datos.beers))*/
            }
        
            function imprimirHTML(datos) {
              console.log('bla bla' , datos);
              
              const { likes } = datos;
                            let ponLikes = document.querySelector('#imgLikes');
                            ponLikes.innerHTML =  `
                            <p id = "imgLikes" class="card-text"><small class="text-muted">LIKE! ${likes}</small></p>
                                    
                    `;
                      
                    }
                })
  }
  
   


/*
});
*/
export default downloadsDetails;



