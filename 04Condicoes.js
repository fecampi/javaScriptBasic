//If
let age = 16;

if (age > 18) {
    console.log('Ele é maior de idade');
} else if (age == 18) {
    console.log("Ele tem exatamente a idade");
} else {
    console.log('Ele é menor de idade');
}


//Operador Ternário
(age >= 18)
    ? console.log('Ele é maior de idade')
    : console.log('Ele é menor de idade');


//Switch
let year = 15;

switch (year) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    default:
        console.log("Mês Inválido!");
        break;
}





//valor padrão
const colorUser = null 
const colorDefault = colorUser || 'black';
console.log(colorDefault)