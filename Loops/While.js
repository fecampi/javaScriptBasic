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