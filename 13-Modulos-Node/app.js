var calculadoraOp = require("./calculadoraUnica");
var calculadora = require("./calculadoraObjeto");
var Pessoa = require("./Pessoa")


console.log(calculadoraOp("soma",3,5))
console.log(calculadora.mult(10,20));
console.log(calculadora.soma(20,40));
calculadora.nome = "Nova Versão"
console.log(calculadora.nome);

pessoa = new Pessoa("Felipe",35)
pessoa.exibir()








