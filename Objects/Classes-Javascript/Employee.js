const Person = require('./Person.js');
const Actions = require('./Actions.js');

class Employee extends Person {
    constructor(name, age, occupation, salary, emotion, force) {
        super(name, age);
        this.occupation = occupation;
        this.salary = salary;
        this.Actions = new Actions(emotion, force);
    }


    print() {
        console.log("-Employee-")
        console.log(this.name + ' tem ' + this.age + ' Anos,' + "sua profissão é de " + this.occupation);
        console.log(" ")
    }

}
module.exports = Employee;