const Pessoa = require('./Pessoa');

//Pilar da Herança: Reutilizável e manutenção
class Visitante extends Pessoa {
    constructor(nome, idade, entrada, saida) {
        //Super():usado para acessar atributos do pai
        super(nome, idade);
        this.entrada = entrada;
        this.saida = saida;
    }

    //Pilar do Polimorfismo: Reutilizável e sobrescrita de métodos
    exibir() {
        //Super():usado para acessar atributos do pai
        super.exibir()
        console.log("Entrada: " + this.entrada + "/ Saída: " + this.saida);
    }

}
module.exports = Visitante;