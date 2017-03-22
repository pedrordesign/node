//config/express.js
var express = require('express');
var load = require('express-load'); // substituing -> var home = require('../app/routes/home');
var bodyParser = require('body-parser');

module.exports = function(){
    var app = express();

    //configuracao de ambiente
    app.set('port', 3000);

    //middleware
    //app.use(app.router); // necess'ario apenas na versar 3.x
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());
    load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes')
    .into(app)
    // substutuing -> home(app);


    return app;
}