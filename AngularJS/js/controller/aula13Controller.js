app.controller('aula13Controller', function($scope, $interval){

    $scope.format = 'M/d/yy h:mm:ss a';
    
});
// nome da diretiva sem hifen, no html com hifen
app.directive('ngOla', function(){
    return {
        scope : {
            ngNome : '@'
        },
        
        // A, somente em elementos HTML
        // E, elemento personalizado
        // C, formato de classe
        restrict : 'AEC',
        template : '<h1>Olá {{ngNome}}!</h1>',
        
        controller : ['$scope', function($scope){
            
            $scope.digaOla = function(nome){
                alert('Olá ' + nome + "!");
            }
            
        }],
        
        link : function(scope, iElement, iAttrs){
            
            console.log(iElement);
            console.log(iAttrs);
            
            scope.digaOla(iAttrs.ngNome);
            
        }
    };
});