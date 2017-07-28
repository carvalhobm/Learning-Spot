app.controller('aula08Controller', function($scope){
    
    $scope.estados = ['RS', 'SP', 'RJ', 'GO'];
    
    $scope.pessoas = [];
    
    $scope.pessoa = novaPessoa();
    
    console.log($scope.pessoa);
    
    $scope.salvarPessoa = function(pessoa){
        $scope.pessoas.push(pessoa);
        console.log($scope.pessoas);
        $scope.pessoa = novaPessoa();
        
        $scope.frm.$setUntouched();
        $scope.frm.$setPristine();
        
    }
    
    $scope.resetar = function(){
        $scope.pessoa = novaPessoa();
    }
    
});
    
function novaPessoa(){
  return {
      nome: "",
      email: "",
      sexo: "f",
      estado: "SP"
  };  
};