const express = require('express');
const app = express();
const hbs = require('hbs'); //Para usar parciales
require('./hbs/helpers');

//Para obtener el puerto con el que trabaja en este caso Heroku
const port = process.env.PORT || 3000;

//Con esto permitimos que se acceda al contenido de la carpeta public
app.use(express.static(__dirname + '/public'));

//Expres HBS engine
hbs.registerPartials(__dirname + '/views/parciales'); //Se le asigna el directorio con los parciales
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', { //Objeto que almacena las variables que están en el html
        nombre: 'Alberto',

    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})