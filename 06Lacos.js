//While
var x = 0
while (x <= 20) {
    // code block
    console.log(x);
    if (x === 3) {
        console.log("VOLTE JÀ O LAÇO ")
        x = x + 4;
        continue
        //volta o laço
    }

    if (x === 10) {
        console.log("TERMINE O LAÇO")
        break
        //termina o laço	
    }
    x++
}

//while de uma lista
var lista = ["Banana","Maça","Morango","Uva"]
var y =0
while(y < lista.length){
    console.log(lista[y])
    y++
}

//do...while
var numbers = "";
var i = 0;

do {
    numbers += i;
    if (i != 9) {
        numbers += '-';
    }
    i++;
} while (i < 10);

//Repetição for
for(var x = 0; x <= 10; x++){
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
var lista = ["Banana","Maça","Morango","Uva"]
for(var x in lista){
    console.log("Índice: " + x + " Valor: " + lista[x])
}

//For encadeada
for(var c = 1; c<= 5; c++){
    for(var l = 1; l<= 3; l++){
        console.log("Linha:" + l +"  | "+ " Coluna :" + c )

    }
    console.log("--------------------")
}	


//for...in
let person = {
    name: 'Thiago',
    age: 18,
    city: 'New York'
}

for (key in person) {
    console.log(key + ' : ' + person[key]);
}

//Foreach
var lista = ["Banana","Maça","Morango","Uva"]
lista.forEach(myFunction);

function myFunction(valor, indice, array) {
     console.log("Índice: " + indice + " Valor: " + valor)
      if(valor == "Maça"){
          array[indice] = "Novo Valor"
      }
}