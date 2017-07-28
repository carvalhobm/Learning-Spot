app.controller('aula06Controller', function($scope){
    
    $scope.nome = "Curso AngularJS DevMedia";
    
    $scope.olaMundo = function(nome){
        alert("Hello ungrateful " + nome + "!");
    };
    
});