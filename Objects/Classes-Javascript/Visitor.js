const Person = require('./Person');

//Pilar da Herança: Reutilizável e manutenção
class Visitor extends Person {
    constructor(name, age, input, output) {
        //Super():usado para acessar atributos do pai
        super(name, age);
        this.input = input;
        this.output = output;
    }

    //Pilar do Polimorfismo: Reutilizável e sobrescrita de métodos
    print() {
        //Super():usado para acessar atributos do pai
        console.log("-Visitor-")
        super.print()
        console.log("Input: " + this.input + "/ Output: " + this.output);
        console.log(" ")
    }

}
module.exports = Visitor;