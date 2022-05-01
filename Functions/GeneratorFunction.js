//Função Geradora (pausar código)
function* generator(name) {
    // Código qualquer ...
    yield name + ' value 1';
    // Código qualquer ...
    yield name + ' value 2';
    // Código qualquer ...
    yield name + ' value 3';

    return "ACABOU"
}

const ga = generator("ga")
const gb = generator("gb")
for (let value = 0; value < 5; value++) {
    console.log(`Generated : ${value}`, ga.next())
    console.log(`Generated : ${value}`, gb.next())
}
