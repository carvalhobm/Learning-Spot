angular.module('app', ['ngSanitize']).controller('aula12Controller', function($scope){
    
    $scope.mostrar = false;
    $scope.esconder = true;
    
    $scope.variavelHTML = "<h1>Seja bem vindo ao nosso site!</h1>";
    
    $scope.minhaClass = "";
    
    $scope.variavelCloak = "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto ";
    
    $scope.minhaFoto = "foto1.jpg";
});