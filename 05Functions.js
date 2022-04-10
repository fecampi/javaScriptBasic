

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
const printHelloInArrow = () => {
    console.log('Hello!!');
};
printHelloInArrow();

//(4) - Dentro de um objeto
const obj = {
    print() {
        console.log('Hello!!');
    }
};
obj.print();

// Parâmetros

//Argumentos do javascript (só funciona em funções)
function printArguments() {
    console.log(arguments);
    console.log("first: ", arguments[0]);
};
printArguments(1, 2, 3);

//..args
const printArgs = (...args) => {
    console.log(args);
};
printArgs(1, 2, 3);

//Closures
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