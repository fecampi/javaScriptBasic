//Pilar da Abstração: Entidade, Identidade, Características e Ações
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this.idade = idade;
    }

    //Pilar do Encapsulamento: Seguro e Reutilizável
    // getters setters
    get nome() {
        return this._nome;
    }

    set nome(nome) {
        if (nome !== "Deus") {
            this._nome = nome;
        }
    }

    get idade() {
        return this._idade;
    }

    set idade(idade) {
        if (idade > 0) {
            this._idade = idade;
        }
    }

    //Método estático
    static msg(mensagem) {
        console.log('MENSAGEM:' + mensagem)
    }

    exibir() {
        console.log(this.nome + ' tem ' + this.idade + ' Anos.')
    }
}

module.exports = Pessoa;
