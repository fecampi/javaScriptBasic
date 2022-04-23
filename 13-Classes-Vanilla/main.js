const Pessoa =  require('./Pessoa.js')
const Funcionario =  require('./Funcionario');
const Visitante = require('./Visitante');







let entrada = Array()
entrada.push(new Pessoa("Felipe",35))
entrada.push(new Funcionario("Bia", 40, "secretária", 1500,"Feliz",98))
entrada.push(new Visitante("João",34,10,6))

entrada[0].nome="Fernando"
entrada[1].nome="Deus"


Pessoa.msg("OI")

   //Pilar do Polimorfismo: Reutilizável e sobrescrita de métodos
entrada.forEach(element => {
    element.exibir();
});


//Utilizando Composição
const f = new Funcionario("Belmiro", 56, "Porteiro", 1500,"cansado", 30);
f.Comportamento.trabalhar();
f.Comportamento.repouso();
f.Comportamento.trabalhar();
f.Comportamento.repouso();
f.Comportamento.trabalhar();
