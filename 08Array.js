//Array Formal
let myArr = new Array("thiago", "webdesign", 10);
console.log('Array Formal:' + myArr)

//Array Literal
let myArr2 = ["thais", "teacher", { school: 'center', age: 23 }];
console.log('Array Literal:' + myArr2)

//consultar dado do array
console.log('Consultar dado do array:' + myArr2[2].age)

//Array Assossiativo
let myArr3 = { name: 'felipe', age: 35 }
console.log('Array Assossiativo:' + myArr3)

//Alterar os dados de um array um a um
var lista_frutas = Array();
var lista_frutas1 = [];
lista_frutas[0] = "Banana"
lista_frutas["f1"] = "Maça"
lista_frutas["x"] = "Morango"
lista_frutas[8] = "Uva"

//Alterar tudo de uma vez
var pessoa = { primeiro_nome: "John", segundo_nome: "Doe", idade: 46 };
var lista_produtos = Array("Pão", "Queijo", "Açucar", "Farinha")
var lista_carros = ["Fusca", "Gol", "Corsa", "Palio"]
var lista_numeros = [1, 40, 19, 5]

//Array multidimensional
var lista_coisas = Array(lista_produtos, lista_carros)

//-----Métodos de manipulação------

//Push
let entrada = [5, 1, 2, 3, 4, 5, 9];
entrada.push(71)
console.log('push' + entrada)

//remover(Descobre aonde está e apaga o indice)
entrada = [5, 1, 2, 3, 4, 7, 5];
entrada.forEach((remover, ind) => {
    if (remover == 5) {
        entrada.splice(ind, 1)
    }
}
);
console.log('remover: ' + entrada);

//Quantidade de componentes do array
entrada = [5, 1, 2, 3, 4, 5];
let entrada1 = [1, 2];
console.log('length: ' + entrada.length);


//Desestruturação
const [xa, , xb, ...rest] = entrada
console.log("Desestruturação:", xa, xb)
console.log("resto", rest)

//Concat
entrada = [5, 1, 2, 3, 4, 5];
console.log('conct:' + entrada.concat(entrada1))

//Every(todos são?)
entrada = [5, 1, 2, 3, 4, 'n'];
console.log('Every: ' + entrada.every((elem, ind, obj) => typeof elem == "number"));

//Filter(quem possui?)
entrada = [5, 1, 2, 'n', 4, 5];
console.log('Filter: ' + entrada.filter((elem, ind, obj) => (typeof elem == "string")))

//ForEach
entrada = [0, "Felipe", { 'age': 18 }, null];
entrada.forEach((item) => {
    console.log(item)
});

//IndexOf
entrada = [5, 1, 2, 'n', 4, 5];
console.log('indexOF: ' + entrada.indexOf(5));

//LastIndexOf(ultimo valor)
entrada = [5, 1, 2, 'n', 4, 5];
console.log('LastIndexOf: ' + entrada.lastIndexOf(5));

//Join(converte para string com separador)
entrada = [5, 1, 2, 'n', 4, 5];
let joinX = entrada.join(" - ");
console.log('join: ' + joinX);

//map e push(percorre e empurra para o fim)
entrada = [5, 'b', 2, 'n', 'a', 5];
let mapFinal = [];
let mapX = entrada.map(
    function verifyElements(elem) {
        if (typeof elem == 'number') {
            mapFinal.push(elem * 2);
        } else {
            mapFinal.push(elem);
        }
    }
);
console.log('map e push: ' + mapFinal)

//Pop(remove o ultimo)
entrada = [1, 2, 3];
console.log('pop: ' + entrada.pop());

//Some(condição existe ?)
entrada = [1, 2, 3];
console.log('some:' + entrada.some((elem) => typeof elem == 'number'));

//Reverse
entrada = [1, 2, 3];
console.log('reverse: ' + entrada.reverse())

//reduce(operações com o elemento atual e outros elementos ->)
entrada = [3, 2, 1];
console.log('reduceX: ' + entrada.reduce((v1, v2) => v1 - v2));

//reduceRight(operações com o elemento atual e outros elementos <-)
entrada = [1, 2, 3];
console.log('reduceR: ' + entrada.reduceRight((v1, v2) => v1 - v2));

//shift(retira o primeiro elemento de um array e exibe o valor)
entrada = [1, 2, 3];
console.log('Antes shift: ' + entrada);
console.log('shif: ' + entrada.shift());
console.log('Após shift: ' + entrada);

//unshift(Inseri valores no início do array e exibe a quantidade no final
entrada = [1, 2, 3];
console.log('Antes unshift: ' + entrada);
console.log('unshif(valor do tamanho do array aṕos inserir): ' + entrada.unshift(0));
console.log('Após unshift: ' + entrada);

//Slice(pega os numeros entre os indices)
entrada = [1, 2, 3, 6, 7, 8, 10, 28];
console.log('slice:' + entrada.slice(2, 4))

//Sort(Ordenação)

console.log('sort:' + entrada.sort())

//Ordenação Númerica
entrada = [6, 3, 5, 1, 4, 2, 9];
console.log('Ordenação Númerica' + entrada.sort(ordenaNumeros))
function ordenaNumeros(a, b) {
    return a - b
}

//splice(inserir e remover elementos)
//Primeiro parâmetro:posição
//Segundo parâmetro: quantidade de elementos deletados
//ultimo parâmetro: valores a inserir
entrada = [6, 3, 5, 1, 4, 2, 9];
console.log('splice: ' + entrada.splice(0, 3, 'y', 'w', 2));
console.log('após splice: ' + entrada)

//toString(transforma todos os dados do array no formato string)
entrada = [6, 3, 5, 1, 4, 2, 9];
console.log(saida = entrada.toString())
console.log("toString(formato texto):" + saida)

//Operações
const arr = [1, 2, 3, 4, 5, 8, 9];

//SOMA COM INDICE 
var newArray = arr.map((item, index) => item + index);
console.log('MAP: ' + newArray);

//SOMA Total
newArray = arr.reduce((total, next) => total + next);
console.log('SOMA: ' + newArray);

//Filter Pares
newArray = arr.filter((item) => item % 2 === 0);
console.log('PARES: ' + newArray);

//Procurar algo.
newArray = arr.find((item) => item === 4);
console.log('BUSCA: ' + newArray);

/*
Primitivos (imutáveis) = string, number, boolean, undefined, null
Referencia (mutável) -> array, object, function
*/

let a = [1, 2, 3]
let b = a
b.push(4)
console.log(a)
// a = [1,2,3,4]
