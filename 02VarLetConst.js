

//comentario

/*
Varias linhas
*/

//escopo global
var name = 'felipe';

//constante
const NAME = 'felipe'

//variavel global, local e de função{}
let sobrenome = 'Campinho'

//Entrada
var nomeprompt = prompt('Digite o seu nome:')
// -- Saída --
//Saída(Documento)
document.write('<h1 color="Yellow"><font color="Yellow">Olá ' + nomeprompt + ', tudo bem? </font> Esse e amarelo </h1>')
//Saída(Console)
console.log(name)

//Null
let vazia = null;

//undefined
var indefinida = undefined;

//Inteiros:
let number = 1;

//Decimais:
let pi = 3.14;

//Booleanos:
let verdadeiro = true;
let falso = false;

//String:
let texto = 'Esse é meu 1º texto';

//String
var txt1 = "John";
var txt2 = "Doe";
var txt3 = txt1 + " " + txt2;
var txt1 = "What a very ";
txt1 += "nice day";

//Array:
let arr = ["fruta", "carro", 1, 'força'];

//Objeto ou JSON):
let obj = {
    prop1: 'thiago',
    prop2: 'carro',
    arr: [1, 2, 3, 3],
};
//Converter JSON para string
console.log('string: ' + JSON.stringify(obj))
//Converter string para JSON
let data = '{"name":"Felipe", "age": "35"}';
console.log('JSON: ' + JSON.parse(data))