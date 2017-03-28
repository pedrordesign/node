// public/js/controllers/contatos.js


angular.module('contatooh').controller('contatos',
function(Contato, $scope){

    $scope.contatos = [];

    $scope.total = 0;

    $scope.filtro = '';
    
    $scope.mensagem = {texto: ''};    

    $scope.incrementa = function(){
        $scope.total++;
    }

    //var Contato = $resource('/contatos/:id');
    

    function buscaContatos(){
        Contato.query(
            function(contatos){
                $scope.contatos = contatos;
                $scope.mensagem = {};
            },
            function(erro){
                $scope.mensagem = "Nao foi possivel obter a lista de contatos";
                console.log(erro);
            }
        )
    }
    buscaContatos();
    
    $scope.remove = function(contato){
        Contato.delete({id: contato._id},
        buscaContatos,
        function(erro){
                $scope.mensagem = "Nao foi possivel remover o contato";
                console.log(erro);
        });
    }

    // $resource.get('/contatos')
    // .success(function(data){
    //     $scope.contatos = data;
    // })
    // .error(function(statusNext) {
    //     console.log("Nao foi possivel obter a lista de contatos");
    //     console.log(statusNext);
    // }) ;




    // $scope.contatos = [
    //     {
    //         _id: 1,
    //         "nome": "Contato ANgular 1",
    //         "email": "cont1@empresa.com.br"
    //     },
    //     {
    //         _id: 2,
    //         "nome": "Contato ANgular 2",
    //         "email": "cont2@empresa.com.br"
    //     },
    //     {
    //         _id: 3,
    //         "nome": "Contato ANgular 3",
    //         "email": "cont3@empresa.com.br"
    //     }
    // ];
});