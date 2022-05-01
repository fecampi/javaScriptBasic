// Constructor functions (Função Construtora) 
//Função que constrói objetos
function Pessoa(name, surname) {
    // Atributos ou métodos privados
    const _ID = 12345;
    const _methodPrivate = () => { };

    // Atributos ou métodos públicos
    this.name = name;
    this.surname = surname;

    this.print = () => {
        console.log(`${this.name} ${this.surname}`);
    };
}

const p2 = new Pessoa('Jon', 'Snow');
p2.print()