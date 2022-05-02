

//comentário

/*
Varias linhas
*/

//escopo global
var name = 'felipe';

//constante
const NAME = 'felipe'

//variável global, local e de função{}
let sobrenome = 'Campinho'

//Entrada (Somente navegador)
var nomePrompt = prompt('Digite o seu nome:')
// -- Saída --
//Saída(Documento)
document.write('<h1 color="Yellow"><font color="Yellow">Olá ' + nomePrompt + ', tudo bem? </font> Esse e amarelo </h1>')
//Saída(Console)
console.log(name)

//Null -> não aponta pra local nenhum na memória 
let vazia = null;

//undefined -> não aponta pra local nenhum na memória
var indefinida = undefined;

//Inteiros:
let number = 1;
let number1 = parseInt('1');
let number2 = Number('1');


//Decimais:
let pi = 3.14;
let number3 = parseFloat('5.1');
let number4 = Number('5.1');

//Boolianos:
let verdadeiro = true;
let falso = false;

//String:
let texto = 'Esse é meu 1º texto';

//String
var txt1 = "John";
var txt2 = "Doe";
var txt3 = txt1 + " " + txt2;
//pode re-declarar 
var txt1 = "What a very ";
txt1 += "nice day";

//Array:
let arr = ["fruta", "carro", 1, 'força'];

//trocando variáveis
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]


//Objeto ou JSON):
let obj = {
    prop1: 'Thiago',
    prop2: 'carro',
    arr: [1, 2, 3, 3],
};
//Converter JSON para string
console.log('string: ' + JSON.stringify(obj))
//Converter string para JSON
let data = '{"name":"Felipe", "age": "35"}';
console.log('JSON: ' + JSON.parse(data))