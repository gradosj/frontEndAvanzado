downloadsBeers(30);

function downloadsBeers(cantidad) {
    const api =  `https://api.randomuser.me/?nat=US&results=${cantidad}`;

    //lamada a fetch
    fetch(api)
        .then(respuesta => respuesta.json())
        .then(datos => printerHtml(datos.results));

}


function printerHtml(datos) {
    datos.forEach(user => {
        const li = document.createElement('li');

        li.innerHTML = `
            nombre: ${first} ${last}
            pais: ${nat}
            imagen: <img src="${medium}">

            
        `;

        document.querySelector('#app').appendChild(li);
    });
}