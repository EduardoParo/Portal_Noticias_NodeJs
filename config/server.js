var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

app.set('view engine', 'ejs');
app.set('views', './app/views');

//Defini o caminho raiz dos arquivos de img,css para o diretorio public
app.use(express.static('./app/public'));

//Os metodos post entender o valor do body como JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

//O Consig ele executa dodos exports do caminho informado
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;