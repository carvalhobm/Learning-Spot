function Aula10Controller($scope, retornaoiFilter){
    //$filter, importa todos os filtros
    
    
    console.log("Iniciou o Controller");
    
    $scope.pessoa = {
        nome: "Bruno Martins",
        idade: 23
    };
    
    console.log(retornaoiFilter('Bruno'));
    //console.log($filter('retornaoi')('Bruno'));
    
}

app.controller('aula10Controller', Aula10Controller);