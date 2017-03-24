// public/js/controllers/contatos.js

angular.module('contatooh').controller('contato',
function($scope, $resource, $routeParams){

    var Contato = $resource('/contatos/:id');

    if($routeParams.contatoId){
        Contato.get({id: $routeParams.contatoId},
            function(contato){
                $scope.contato = contato;
            },
            function(erro){
                $scope.mensagem = {
                    texto: "Contato nao existe. Novo contato."
                }
            }
        );
    }
    else{
        $scope.contato = {};
    }

    console.log($routeParams.contatoId)
});