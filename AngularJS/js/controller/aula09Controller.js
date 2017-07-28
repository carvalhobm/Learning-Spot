app.controller('aula09Controller', ['$scope', 'operacoes', 'Pessoa', function($scope, operacoes, Pessoa){

    $scope.pessoa = new Pessoa();
    
    console.log("Entrou no controle aula09 - 1");
    console.log(operacoes.somar(10, 10));

}]);

app.controller('aula09Controller2', function($scope, operacoes, Pessoa){
    
    $scope.outraPessoa = new Pessoa();
    
    $scope.outraPessoa.nome = "DevMedia";
    
    console.log("Entrou no controle aula09 - 2");
    console.log(operacoes.subtrair(10, 5));
    
});