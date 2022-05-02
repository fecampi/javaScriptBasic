//Foreach
list.forEach((valor, indice, array) => {
    if (valor == "Maça") {
        list[indice] = "achou"
    }
    console.log("Índice: " + indice + " Valor: " + valor + " Array:" + array)
});