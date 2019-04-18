let express = require('express');
let mongoose = require('mongoose');
let nunjucks = require('nunjucks');

mongoose.connect('mongodb://localhost:27017/pokedex');

require('./models/Pokemon');
require('./models/Type');

let app = express();

app.use('/css',express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use('/',require('./routes/pokemons'));
app.use('/types',require('./routes/types'));

nunjucks.configure('views',{
    autoescape: true,
    express:app
});


app.listen(8000);

