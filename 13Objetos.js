
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
// Assign
let person3 = Object.assign({},person2)


console.log(person1["name"]);
console.log(person3.age);

//copiando


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

//New  -> Cria um objeto vazio e anexa o this ao objeto
CarroF.prototype = new Automovel()
let carro1 = new CarroF('Amarelo')
carro1.mostrar()


//Objeto literal:
//Uso: Onde não podem existir mais de uma instância do objeto.
//Exemplo:Configurações de projeto e coleções de objeto
let carroL = {
  modelo: 'Gol',
  cor: 'Prata',
  mostrar: function () { console.log('OBJETO_LITERAL=> MODELO:' + this.modelo + ' / COR: ' + this.cor) }
}

carroL.mostrar()


// defineProperty and defineProperties
function Product(name, price) {
  this.name = name;
  this._price = price

  // //definindo um objeto
  // Object.defineProperty(this, 'price', {
  //   enumerable: true, //enumeráveis
  //   value: price, 
  //   writable: true, // alterável
  //   configurable: true // configurável
  // });

  //para definir mais de um
  Object.defineProperties(this,
    {
      'price': {
        enumerable: true, //enumeráveis
        configurable: true, // configurável,
        get: function () {
          return this._price
        },
        set: function (value) {
          if (typeof value == 'number') {
            this._price = value
          }
          return
        }
      },
      'name': {
        enumerable: true, //enumeráveis
        value: name,
        writable: true, // alterável
        configurable: true // configurável
      }
    }
  );


}

const p1 = new Product('IPhone', 1000);

p1.price = 1600
p1.price = "Not Number"
//travar o objeto
Object.freeze(p1)
p1.name = "Android"
console.log(Object.keys(p1));
for (let key in p1) {
  console.log(`KEY:${key}, VALUE:${p1[key]}`)
}



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



//Prototype
//Criar Objeto
function carioca(name, func) {
  this.name = name;
  this.friends = [];
  this.func = func;
}

//Criar Atributos Imutaveis do objeto
carioca.prototype.city = 'RJ';

//Criar Funções Imutaveis do objeto 
carioca.prototype.salario = function () {
  if (this.func === 'manager') {
    return 3000;
  } else if (this.func === 'user') {
    return 100;
  }
}

//Prototype
//Criar Objeto
function carioca(name, func) {
  this.name = name;
  this.friends = [];
  this.func = func;
}

//Criar Entidades
let obj = new carioca('Thiago', 'manager');
obj.friends.push('Juliet');
obj.friends.push('Wilian');

let obj2 = new carioca('Thais', 'user');
console.log(obj);
console.log(obj2);
console.log(obj2.salario());


/* Transformar objeto em Global(exportação ideal para reutilizar em outro arquivo)
    (function (win, doc) {
      'use strict';
 
      //Codigo Script
 
      win.carioca = carioca;
    })(window, document)
    console.log(this.carioca)
    */



console.log("oii")



