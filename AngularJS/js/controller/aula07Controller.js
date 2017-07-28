app.controller('aula07Controller', function($scope){
    
    $scope.nomes = ['Bruno', 'Martins', 'Carvalho'];
    
    $scope.pessoas = [
        {
            nome: 'Bruno',
            idade: 23,
            status: true
        },
        {
            nome: 'Caique',
            idade: 20,
            status: false
        }
    ];
    
    $scope.pessoas.push(
        {nome: "José", idade: 50, status: true}
    );
    
    $scope.addName = function(){
        var name = document.getElementById('name');
        
        if($scope.nomes.indexOf(name.value) == -1){
            $scope.nomes.push(name.value);
        } else {
            alert("Nome já existe na lista!");
        }
                
        name.value="";
    };
    
    $scope.addPessoa = function(){
        var nome = document.getElementById('nomepessoa');
        var idade = document.getElementById('idadepessoa');
        
        var novaPessoa = {
            nome: nome.value,
            idade: idade.value,
            status: true
        };
        
        $scope.pessoas.push(novaPessoa);
        
        nome.value = "";
        idade.value = "";
    };
    
});