import Veiculo from './Veiculo'

export  class Carro extends Veiculo {
    private numeroDePortas: number

    constructor(modelo: string, numeroDePortas: number) {
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }
}

export let qualquerCoisa: string ="Texto"