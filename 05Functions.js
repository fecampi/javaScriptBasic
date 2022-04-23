

// (1) - Declaração de função: 
//Utiliza Function hoisting que eleva as declarações de função para o topo do código javascript
printHelloInFunction();
function printHelloInFunction() {
    console.log('Hello!!');
}

// (2) - Function expression (First-class objects )
// Objetos de primeira classe, as funções são tratadas como um dado
const printHelloInConst = function () {
    console.log('Hello!!');
};
printHelloInConst();

//Não muito utilizada
const printHelloNamed = function nameOfFunction() {
    console.log('Hello!!');
};
printHelloNamed();


//(3) - Arrow function
//1
function sum(x, y) {
    return x + y;
}
console.log(sum(10, 5));
//2
let sumArrow = (x, y) => {
    return x + y;
}
console.log(sumArrow(3, 4));
//3
let sumArrow2 = (x, y) => x + y;
console.log(sumArrow2(6, 3));
//4
let dobroDovalue = x => x * 2;
console.log("Dobro do value:" + dobroDovalue(7));

//(4) - Dentro de um objeto
const obj = {
    print() {
        console.log('Hello!!');
    }
};
obj.print();

//implícito minimo
let parOuImpar2 = numero => numero % 2 === 0 ? 'par' : 'ímpar'
console.log('Par ou impar: ' + parOuImpar2(155));



//Funções aninhadas ou closures (tem habilidade de acessar outros escopos) 
function myName(val) {
    let name;

    function setName() {
        if (val == 1) {
            name = 'Thiago';
        } else if (val == 2) {
            name = 'Thais';
        } else {
            name = 'Nenhum dado foi disponibilizado';
        }
        return name;
    }
    return setName();
}
const named = myName(1)
console.log(named);


//Função retornando função
const criaMultiplicador = (multiplicador) => {
    // multiplicador
    return (n) => n * multiplicador;
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));

//Função Callback(faz isso ou isso)
function exibirArtigo(verify, resolve, reject) {
    if (verify) {
        resolve('Funções de callback em JS!!')
    } else {
        reject('Erro ao recuperar os dados!!')
    }
}

//função1
const resolve = successMessage => {
    console.log("SUCESSO!!!")
    console.log(successMessage)
}

//função2
const reject = errorMessage => {
    console.log("ERROR!!!")
    console.log(errorMessage)
}

// IIFE -> Immediately invoked function expression
((message) => {

    const init = "PRINT: "
    function addText(text) {
        return init + ' ' + text;
    }

    function printMessage() {
        console.log(addText(message));
    }

    printMessage();


})("message immediately print");



exibirArtigo(true, resolve, reject)



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


        message() {
            return `${this.fullName} is ${this._age} years old`;
        },

    };
}

const p1 = createPerson('felipe', 'Campinho',);
p1.fullName = "Felipe Campinho"
p1.yearOfBirth = 1985
console.log(p1.message())


// Constructor functions (Função Construtora) 
//Função que constrói objetos
function Pessoa(name, surname) {
    // Atributos ou métodos privados
    const _ID = 12345;
    const _methodPrivate = () => { };

    // Atributos ou métodos públicos
    this.name = name;
    this.surname = surname;

    this.print = () => {
        console.log(`${this.name} ${this.surname}`);
    };
}

const p2 = new Pessoa('Jon', 'Snow');
p2.print()


//Função recursiva (ela mesmo chama de volta)
const recursive = (x) =>
    (x == 0)
        ? 1
        : x * recursive(x - 1);



console.log("Recursived", recursive(5))
// Endereço     Variável            Valor
// PASSO 1
// +------------+-------------+----------------------+
// |   0x0001   |  resultado  | recursiveFatorial(5) |
// +------------+-------------+----------------------+ 
// |   0x0002   |  temp_4     | recursiveFatorial(4) |  |
// +------------+-------------+----------------------+  |
// |   0x0003   |  temp_3     | recursiveFatorial(3) |  V
// +------------+-------------+----------------------+
// |   0x0004   |  temp_2     | recursiveFatorial(2) |
// +------------+-------------+----------------------+
// |   0x0005   |  temp_1     | recursiveFatorial(1) |
// +------------+-------------+----------------------+
// |   0x0006   |  temp_0     | 1                    |
// +------------+-------------+----------------------+
// PASSO 
// +------------+-------------+----------------------+
// |   0x0001   |  resultado  | 5 * temp_4 = 120     |
// +------------+-------------+----------------------+
// |   0x0002   |  temp_4     | 4 * temp_3 = 24      |
// +------------+-------------+----------------------+   ^
// |   0x0003   |  temp_3     | 3 * temp_2 = 6       |   |
// +------------+-------------+----------------------+   |
// |   0x0004   |  temp_2     | 2 * temp_1 = 2       |
// +------------+-------------+----------------------+
// |   0x0005   |  temp_1     | 1 * temp_0 = 1       |
// +------------+-------------+----------------------+
// |   0x0006   |  temp_0     | 1                    |
// +------------+-------------+----------------------+


//Função Geradora (pausar código)
function* generator(name) {
    // Código qualquer ...
    yield name + ' value 1';
    // Código qualquer ...
    yield name + ' value 2';
    // Código qualquer ...
    yield name + ' value 3';

    return "ACABOU"
}

const ga = generator("ga")
const gb = generator("gb")
for (let value = 0; value < 5; value++) {
    console.log(`Generated : ${value}`, ga.next())
    console.log(`Generated : ${value}`, gb.next())
}



// Parâmetros

//Quantidade indefinida de parâmetros como objeto
function soma2() {
    var resultado = 0
    for (var i in arguments) {
        console.log(arguments[i])
        //percorre o atributo do objeto 'Arguments'
        //(semelhante um array)    
    }
    return resultado

}
console.log(soma2(7, 5, 6, 3, 'texto'));

//Parametros Default(opcionais) ---- 
function nameIdade(name = 'Mario', idade = 22) {
    console.log(`name: ${name}, Idade: ${idade}`);
}
nameIdade('Felipe');



//..args
const printArgs = (...args) => {
    console.log(args);
};
printArgs(1, 2, 3);

