var nome = "Felipe Ferreira";
var idade = 20;
var empresa = "TesteInfo";

//Forma comum.
var user = {
    nome: nome,
    idade: idade,
    empresa: empresa
}
console.log(user)

//Forma encurtada.
var encurtado = {
    nome,
    idade,
    empresa
}
console.log(encurtado)


//Desestruturação 
var endereco = {
    rua: "Engenheiro Miguel Fernandez",
    cidade: "Yolopólis",
    cep: "2560000"
}
var { rua, cidade } = endereco;//Com a desestruturação ele cria a variável com o nome do valor.
console.log(` Endereço: ${rua}, ${cidade}.`)

//Json com objeto(2 Objetos)
var user2 = {
    nome,
    idade,
    empresa,
    endereco
}
console.log(user2)


//Spread(Objeto+Atributos)
var user3 = {
    nome,
    idade,
    empresa,
    ...endereco
}
console.log(user3)

//Metodo Find
var product1 = {
    name: "Pão",
    preco: 6.50
}

var product2 = {
    name: "Leite",
    preco: 7.50
}

var product3 = {
    name: "Queijo",
    preco: 4.50
}

var product4 = {
    name: "Achocolatado",
    preco: 3.50
}

var products = [product1, product2, product3, product4];
var compra = products.find(product => product.preco < 5);//busca o primeiro valor abaixo de 5.00
console.log(compra);