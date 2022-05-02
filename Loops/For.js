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