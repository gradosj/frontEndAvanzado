import renderDetail from './details.js';

page('/', () => {
    console.log('Route /');

});
page('/detail/:id', (ctx) =>{
    console.log('Detail');
    const {params:{id} }= ctx;
    console.log(id);
    renderDetail(id);
});
page();