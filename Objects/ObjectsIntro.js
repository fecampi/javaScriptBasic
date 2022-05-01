//Forma formal
let person = new Object();
person.name = 'Felipe';
person.age = 30;
person.getFullName = function () {
  return `${this.name} Campinho`
}
for (key in person) {
  console.log(`KEY:${key}, VALUE:${person[key]}`)
}


console.log(person.getFullName());

//Forma literal
let person1 = {
  name: 'Felipe'
}

//Copiando as propriedades
//...
let person2 = {
  ...person1,
  age: 18
}
//Copiando com  Assign
let person3 = Object.assign({}, person2)

console.log(person1["name"]);
console.log(person3.age);


//Objeto Literal Unico
let nome = 'Jorge'
let idade = 29
let sexo = 'Masculino'

let pessoa = {
  nome,
  idade,
  sexo,
  profissao: 'Programador',
  exibirResumo() {
    console.log(`${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`)
  }
}
console.log(pessoa)
console.log(pessoa.idade)
pessoa.nome = 'Fernada'
console.log(pessoa)
pessoa.exibirResumo()
//Referenciar para outra variavel
let cliente = pessoa
console.log('cliente: ' + pessoa.nome)


//Função construtora:
//Uso: Objetos como múltiplas instâncias no mesmo contexto.
//EXemplo: Criar métodos e propriedades privadas.

let Automovel = function () {
  this.rodas = 4
}

let CarroF = function (cor) {
  // Atributos ou métodos privados
  const _ID = 12345;
  const _methodPrivate = () => { };

  var modelo = 'Chevette'
  this.cor = cor


  this.getModelo = function () {
    return modelo
  }

  this.setModelo = function (m) {
    modelo = m
  }

  this.mostrar = function () { console.log('FUNÇÃO_CONSTRUTORA => MODELO:' + this.getModelo() + ' / COR: ' + this.cor + ' / RODAS: ' + this.rodas) }
}



//Objeto literal:
//Uso: Onde não podem existir mais de uma instância do objeto.
//Exemplo:Configurações de projeto e coleções de objeto
let carroL = {
  modelo: 'Gol',
  cor: 'Prata',
  mostrar: function () { console.log('OBJETO_LITERAL=> MODELO:' + this.modelo + ' / COR: ' + this.cor) }
}

carroL.mostrar()


//ObjetoFactory:
//Uso: Esconder implementações da interface
//Exemplo: Encapsulamento de operações
let CarroFactory = function (cor) {
  //lógica
  // requisição http
  // resposta http    
  return {
    modelo: 'Chevette',
    cor,
    mostrar() { console.log('FACTORY => MODELO:' + this.modelo + ' / COR: ' + this.cor) }
  }
}

let carro3 = new CarroFactory('Amarelo')
carro3.mostrar()

//New  -> Cria um objeto vazio e anexa o this ao objeto
CarroF.prototype = new Automovel()
let carro1 = new CarroF('Amarelo')
carro1.mostrar()

//Factory Function ( com Prototype melhora a performance pois aponta para um único objeto)
const getClient = {
  getClient() {
       return `${this._name} ${this._surname}`;
   },
};

const getAccount = {
   getAccount() {
       return this._account
   },
};

const pessoaPrototype = Object.assign({}, getClient, getAccount);

function Client(name, surname, account) {
   return Object.create(pessoaPrototype, {
       _name: { value: name },
       _surname: { value: surname },
       _account: {value: account}
   });
}

module.exports = Client;

const p1 = Client('Felipe', 'Campinho', 12)
console.log(p1.getClient())
console.log(p1.getAccount())


/* Transformar objeto em Global(exportação ideal para reutilizar em outro arquivo)
    (function (win, doc) {
      'use strict';
 
      //Codigo Script
 
      win.User = User;
    })(window, document)
    console.log(this.User)
    */





