const Pessoa =  require('./Pessoa.js');
const Comportamento =  require('./Comportamento.js');

class Funcionario extends Pessoa {
    constructor(nome, idade, funcao, salario,emocao,forca) {
        super(nome, idade);
        this.funcao = funcao;
        this.salario = salario;
        this.Comportamento = new Comportamento(emocao,forca);
     
      
    }


    exibir() {
        console.log(this.nome + ' tem ' + this.idade + ' Anos,' + "sua profissão é de " + this.funcao);
    }

}
module.exports = Funcionario;