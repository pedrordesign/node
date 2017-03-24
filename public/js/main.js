angular.module('contatooh', ['ngRoute', 'ngResource'])
    .config(function($routeProvider) {
        $routeProvider.when('/contato',{
                templateUrl: 'partials/contato.html',
                controller: 'contato'
        });
        $routeProvider.when('/contato/:contatoId',{
                templateUrl: 'partials/contato.html',
                controller: 'contato'
        });
        $routeProvider.when('/contatos',{
                templateUrl: 'partials/contatos.html',
                controller: 'contatos'
        });
        $routeProvider.when('/contatos/:contatoId',{
                templateUrl: 'partials/contato.html',
                controller: 'contato'
        });
    });