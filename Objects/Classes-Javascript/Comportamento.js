class Comportamento {
    constructor(emocao, forca) {
        this.emocao = emocao;
        this.forca = forca;
    }


    trabalhar() {
        console.log("trabalhando...Força:" + this.forca + ". O funcionario está " + this.emocao);
    }


    repouso() {
        this.forca += 10;
        console.log("Descansando..");
        (this.forca >= 50) ? this.emocao = "Feliz" : this.emocao = "Triste";
    }
}
module.exports = Comportamento;