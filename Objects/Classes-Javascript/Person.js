//Pilar da Abstração: Entage, Identage, Características e Ações

//Método Privado
const _name = Symbol('name')

class Person {
    constructor(name, age) {
        this[_name] = name;
        this.age = age;
    }

    //Pilar do Encapsulamento: Seguro e Reutilizável
    // getters setters
    get name() {
        return this[_name];
    }

    set name(name) {
        if (name !== "God") {
            this[_name] = name;
        }
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (age > 0) {
            this._age = age;
        }
    }

    //Método estático
    static msg(message) {
        console.log('Message:' + message)
    }

    print() {
        console.log("-Person-")
        console.log(this.name + ' tem ' + this.age + ' Anos.')
        console.log(" ")
    }
}

module.exports = Person;
