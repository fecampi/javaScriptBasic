//Função construtora:
//Uso: Objetos como múltiplas instâncias no mesmo contexto.
//EXemplo: Criar métodos e propriedades privadas.

const Carro = function (model) {
    //Atributos ou métodos públicos
    this.model = model;
    // Atributos ou métodos privados
    const _wheels = 4;
    this._color = undefined;;
    const _ID = 12345;
    const _methodPrivate = () => { };



    this.getColor = function () {
        return this._color
    }

    this.setColor = function (value) {
        this._color = value
    }

    this.print = function () {
        console.log(
            ' MODELO:' + this.model
            + ' / COR: ' + this.getColor()
            + ' / RODAS: ' + _wheels)
    }
}

const carro = new Carro("BMW")
carro.setColor("black")
carro.print()