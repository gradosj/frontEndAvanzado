import downloadDetails from './details.js';

page('/', () => {
    console.log('Route /');

});
page('/detail/:id', (ctx) => {
    //console.log('Detail');
    const { params: { id } } = ctx;
    //console.log(id);
    downloadDetails(id);
});
page();