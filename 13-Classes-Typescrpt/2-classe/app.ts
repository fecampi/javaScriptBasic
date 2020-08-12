
import {Carro, qualquerCoisa} from './Entities/Carro'
import Pessoa from './Entities/Pessoa'
import Concessionaria from './Entities/Concessionaria'
import Dao from './Services/Dao/Dao'

/* --- criar carros ---*/
let carroA = new Carro('dodge journey', 4)
let carroB = new Carro('veloster', 8)
let carroC = new Carro('cerato', 4)

/* --- montar a lista de carros da concessionaria ---*/
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* --- exibir a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros())

/* --- comprar o carro ---*/
let cliente = new Pessoa('João', 'veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {

        //compra o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())

//Interface
/* --- Horario com Interface ---*/
console.log(concessionaria.fornecerHorariosDeFuncionamento())


//Generic
/* --- Data Access Object com Interface ---*/
let dao1: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao2: Dao<Pessoa> = new Dao<Pessoa>()
dao1.inserir(concessionaria)
dao2.remover(12);




