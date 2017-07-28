angular.module('app', ['ngRoute'])

.controller('aula11Controller', function($scope, $route, $routeParams, $location){
    
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    
    
    
})

.controller('homeController', function($scope){
    console.log("Entrou no homeController!");
})
    
.controller('pagina1Controller', function($scope){
    console.log("Entrou no pagina1Controller!");
})

.controller('pagina2Controller', function($scope, $routeParams){
    $scope.parametros = $routeParams;
    console.log("Entrou no pagina2Controller!");
})

.config(function($routeProvider, $locationProvider){
    
    $routeProvider
    .when('/', {
        templateUrl : 'aula11Home.html',
        controller : 'homeController'
    })
    .when('/Pagina1', {
        templateUrl : 'aula11Pagina1.html',
        controller : 'pagina1Controller'
    })
    .when('/Pagina2/:idproduto', {
        templateUrl : 'aula11Pagina2.html',
        controller : 'pagina2Controller'
    })
    .otherwise({
        redirectTo : '/'
    });
    
    $locationProvider.html5Mode(true);
});