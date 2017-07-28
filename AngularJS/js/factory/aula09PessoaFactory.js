app.factory('Pessoa', function(){
    
    console.log("Criou o obj Pessoa");
    
    var Pessoa = function(){
        
        console.log("Instanciou o obj Pessoa");
        
        this.nome = "Bruno";
        this.idade = 23;
        
        this.comprimentar = function(){
            return "Olá " + this.nome + "!";
        }
    }
    
    return Pessoa;
});