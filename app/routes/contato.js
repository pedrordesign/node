// app/routes/home.js
// load in express.js substitutes -> var controller = require('../controllers/home')();

module.exports = function(app){
    var controller = app.controllers.contato;
    app.get('/contatos', controller.list);
    app.get('/contatos/:id', controller.get);
}