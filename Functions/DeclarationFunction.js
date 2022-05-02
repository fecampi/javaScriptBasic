

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

//(3) - Não muito utilizada
const printHelloNamed = function nameOfFunction() {
    console.log('Hello!!');
};
printHelloNamed();


//(4) - implícito minimo
let parOuImpar2 = numero => numero % 2 === 0 ? 'par' : 'ímpar'
console.log('Par ou impar: ' + parOuImpar2(155));



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

//Parâmetros Default(opcionais) ---- 
function nameIdade(name = 'Mario', idade = 22) {
    console.log(`name: ${name}, Idade: ${idade}`);
}
nameIdade('Felipe');


//..args
const printArgs = (...args) => {
    console.log(args);
};
printArgs(1, 2, 3);

