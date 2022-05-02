//Objeto literal:
//Uso: Onde não podem existir mais de uma instância do objeto.
//Exemplo:Configurações de projeto e coleções de objeto
const model = "BMW"

const car = {
    model,
    color: 'BLACK',
    print: function () {
        console.log(
            'model:' + this.model
            + ' / Color: ' + this.color)
    }
}
console.log("CAR COLOR:", car.color)
car.color = "RED"
car.print()
//Referenciar para outra variável
const automobile = car
console.log("AUTOMOBILE COLOR:", automobile.color)


