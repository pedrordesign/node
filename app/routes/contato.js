// app/routes/home.js
// load in express.js substitutes -> var controller = require('../controllers/home')();

module.exports = function(app){
    var controller = app.controllers.contato;
    app.route('/contatos')
        .get(controller.list);
    
    app.route('/contatos/:id')
        .get(controller.get)
        .delete(controller.remove);
}