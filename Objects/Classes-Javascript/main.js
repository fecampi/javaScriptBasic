const Person = require('./Person.js')
const Employee = require('./Employee');
const Visitor = require('./Visitor');


let list = Array()
list.push(new Person("Felipe", 35))
list.push(new Employee("Bia", 40, "secretária", 1500, "Feliz", 98))
list.push(new Visitor("João", 34, 10, 6))

list[0].name = "Fernando"
list[0].name = "God"


Person.msg("OI")

//Pilar do Polimorfismo: Reutilizável e sobrescrita de métodos
list.forEach(element => {
    element.print();
});

//Utilizando Composição
const f = new Employee("Belmiro", 56, "Porteiro", 1500, "cansado", 30);
f.Actions.work();
f.Actions.repose();
f.Actions.work();
f.Actions.repose();
f.Actions.work();
