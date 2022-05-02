// Factory function (Função fábrica)
//Função normal que fabrica objetos
const createPerson = (name, surname) => {
    return {
        name,
        surname,

        // Getter
        get fullName() {
            return `${this.name} ${this.surname}`;
        },

        //Setter
        set fullName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.surname = value.join(' ');
        },

        //set variable private
        set yearOfBirth(date) {
            this._age = new Date().getFullYear() - date;
        },


        print() {
            console.log(`${this.fullName} is ${this._age} years old`);
        },

    };
}

const p1 = createPerson('felipe', 'Campinho');
p1.fullName = "Felipe Campinho"
p1.yearOfBirth = 1985
p1.print()


//Factory Function ( com Prototype melhora a performance pois aponta para um único objeto)
const print = {
    print() {
        console.log(`${this.fullName()} is 22 years old`);
    }
    
}

const fullName = {
   fullName() {
        return `${this.name} ${this.surname}`;
    }
    
}


const personPrototype = Object.assign({},  print, fullName);


function createPersonPerformance(name, surname) {
    return Object.create(personPrototype, {
        name: { value: name },
        surname: { value: surname },
    });
}


const p2 = createPersonPerformance('Felipe', 'Campinho');
p2.print();


