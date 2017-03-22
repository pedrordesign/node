// app/controllers/contato.js

var contatos = [
    { _id: 1, nome: 'Contato 1', email: 'contato1@exemplo.com.br'},
    { _id: 2, nome: 'Contato 2', email: 'contato2@exemplo.com.br'},
    { _id: 3, nome: 'Contato 3', email: 'contato3@exemplo.com.br'},
    { _id: 4, nome: 'Contato 4', email: 'contato4@exemplo.com.br'}
];

module.exports = function(){
    var controller = {};

    controller.list = function(req, res){
        
        res.json(contatos);

        // retorna a pagina contatos.ejs
         //res.render('index', {
         //    nome: 'Express'
         //})
    };


    controller.get = function(req, res){
        
        var id = req.params.id;
        var contato = contatos.filter(function(contato){
            return contato._id == id;
        })[0];
        contato ?
            res.json(contato) 
            :
            res.status(404).send('Contato nao encontrado');

        // retorna a pagina contatos.ejs
         //res.render('index', {
         //    nome: 'Express'
         //})
    };


    return controller;
}