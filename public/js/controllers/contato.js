// public/js/controllers/contatos.js

angular.module('contatooh').controller('contato',
function($scope, $routeParams, Contato){

    //var Contato = $resource('/contatos/:id');

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

    $scope.save = function()
    {
        
        $scope.contato.$save()
            .then(function(){
                $scope.mensagem = {texto: "Salvo com sucesso!"};
                // clean form
                $scope.contato = new Contato();
            })
            .catch(function(erro){
                $scope.mensagem = {texto: "Nao foi possivel salvar"};            
            })
    }

    $scope.contato = new Contato;

    console.log($routeParams.contatoId)
});
