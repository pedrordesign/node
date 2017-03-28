// app/controllers/contact.js

var contacts = [
    { _id: 1, name: 'contact 1', email: 'contact1@exemplo.com.br'},
    { _id: 2, name: 'contact 2', email: 'contact2@exemplo.com.br'},
    { _id: 3, name: 'contact 3', email: 'contact3@exemplo.com.br'},
    { _id: 4, name: 'contact 4', email: 'contact4@exemplo.com.br'}
];

module.exports = function(){
    var controller = {};
    var ID_CCONTACT_INC = 5;

    controller.list = function(req, res){
        
        res.json(contacts);

        // retorna a pagina contacts.ejs
         //res.render('index', {
         //    name: 'Express'
         //})
    };

    controller.save = function(req, res){
        
        var contact = req.body;
        contact = contact._id ?
        update(contact) :
        create(contact);
        res.json(contact);

    };

    function create(newContact){
        newContact._id = ++ID_CCONTACT_INC;
        contacts.push(newContact);
        return newContact;
    }

    function update(contactUpdate){
        contacts = contacts.map(function(contact){
            if(contact._id == contactUpdate._id){
                contact = contactUpdate;
            }
            return contact;
        })
        return contactUpdate;
    }


    controller.get = function(req, res){
        
        var id = req.params.id;

        var contact = contacts.filter(function(contact){
            return contact._id == id;
        })[0];
        
        contact ?
            res.json(contact) 
            :
            res.status(404).send('contact nao encontrado');

        // retorna a pagina contacts.ejs
         //res.render('index', {
         //    name: 'Express'
         //})
    };

    controller.remove = function(req, res) {
        
        var id = req.params.id;

        contacts = contacts.filter(function(contact) {
            return contact._id != id;
        });

        res.status(204).end();
        
        console.log('Api: remove: '+id);
    }


    return controller;
}