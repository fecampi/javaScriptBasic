//Repetição for
for (var x = 0; x <= 10; x++) {
    console.log(x)
}


//For
var numbers = "";
for (let i = 0; i < 10; i++) {
    numbers += i;
    if (i != 9) {
        numbers += '-';
    }
}
console.log(numbers)

//Repetição for de uma lista
var list = ["Banana", "Maça", "Morango", "Uva"]
for (var x in list) {
    console.log("Índice: " + x + " Valor: " + list[x])
}

//For encadeada
for (var c = 1; c <= 5; c++) {
    for (var l = 1; l <= 3; l++) {
        console.log("Linha:" + l + "  | " + " Coluna :" + c)

    }
    console.log("--------------------")
}

//For in - Retorna o índice ou chave (string, array ou objetos)
let person = {
    name: 'Thiago',
    age: 18,
    city: 'New York'
}

for (let key in person) {
    console.log(key + ' : ' + person[key]);
}

// For of - Retorna o valor em si (iteráveis, arrays ou strings)
for (let value of list) {
    console.log(value);
}

//Foreach
list.forEach((valor, indice, array) => {
    if (valor == "Maça") {
        list[indice] = "achou"
    }
    console.log("Índice: " + indice + " Valor: " + valor + " Array:" + array)
});


//While
var x = 0
while (x <= 20) {
    // code block
    console.log(x);
    if (x === 3) {
        console.log('Pulou 3');
        x = x + 4;
        //continua para próxima iteração
        continue
    }

    console.log(x);
    if (x === 10) {
        console.log('Encontrado 10');
            // sai do laço
        break
    }
    x++
}

//while de uma list
var list = ["Banana", "Maça", "Morango", "Uva"]
var y = 0
while (y < list.length) {
    console.log(list[y])
    y++
}

//do...while
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
do {
    let numero = numeros[i];

    if (numero === 5) {
        console.log('Pulou 5');
        i++;
        //continua para próxima iteração
        continue;
    }

    console.log(numero);

    if (numero === 8) {
        console.log('Encontrado 8');
        i++;
        // sai do laço
        break;
    }

    i++;
} while (i < numeros.length);


