//ObjetoFactory:
//Uso: Esconder implementações da interface
//Exemplo: Encapsulamento de operações

const CarFactory = function (Color) {
    //lógica
    // requisição http
    // resposta http    
    return {
        model: 'BMW',
        Color,
        print() {
            console.log('MODEL:' + this.model
                + ' / Color: ' + this.Color)
        }
    }
}

let car = new CarFactory('Amarelo')
car.print()