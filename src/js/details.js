
const API_KEY = 'V0XRE4Q-FTYMPCA-MDWV1J2-XCFC55F';
const detail = document.querySelector('#detalle');

/*const beerId = 5;*/
/*
const detailTeplate = ({beerId, name, description, image} = {}) => {
  console.log('entra en detail');
return `
<div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="https://images.punkapi.com/v2/58.png" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
`;
};*/
/*
const renderDetail = async beerId => {
  try {
     detail = await downloadDetails(beerId);
  }
  catch (err) {
    // manejo de errores
    console.log('errores');
  }
}
*/
/*detail.addEventListener('click', evt => {

  downloadsDetails(beerId);*/
  function downloadsDetails(beerId) {

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
   
    //datos.forEach(cervezas => {
      

      const { name, image, firstBrewed, beerId, description } = datos;
             
        let cards = document.querySelector('#show-section');
        cards.innerHTML =  `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${image}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">id:${beerId} / ${name}</h5>
              <p class="card-text">${firstBrewed}</p>
              <p class="card-text">${description}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
          
          `;
     
      
    //})
  }
  
  
/*
});
*/
export default downloadsDetails;



