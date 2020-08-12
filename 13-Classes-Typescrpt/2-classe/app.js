"use strict";
exports.__esModule = true;
var Carro_1 = require("./Entities/Carro");
var Pessoa_1 = require("./Entities/Pessoa");
var Concessionaria_1 = require("./Entities/Concessionaria");
var Dao_1 = require("./Services/Dao/Dao");
/* --- criar carros ---*/
var carroA = new Carro_1.Carro('dodge journey', 4);
var carroB = new Carro_1.Carro('veloster', 8);
var carroC = new Carro_1.Carro('cerato', 4);
/* --- montar a lista de carros da concessionaria ---*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1["default"]('Av Paulista', listaDeCarros);
/* --- exibir a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros())
/* --- comprar o carro ---*/
var cliente = new Pessoa_1["default"]('João', 'veloster');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //compra o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
//Interface
/* --- Horario com Interface ---*/
console.log(concessionaria.fornecerHorariosDeFuncionamento());
//Generic
/* --- Data Access Object com Interface ---*/
var dao1 = new Dao_1["default"]();
var dao2 = new Dao_1["default"]();
dao1.inserir(concessionaria);
dao2.remover(12);
