
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
function Product(name, price) {
  this.name = name;
  this._price = price;
  this._color = undefined;

    //pouco performático
  this.print = function () {
    console.log(`Name:${name} / Price:${price}`)
  }

  //Definindo uma propriedade
  Object.defineProperty(this, 'color', {
    enumerable: true,
    configurable: false,
    get: function () {
        return this._color
    },
    set: function (value) {
      this._color = value
    }
});

//Definindo varias propriedades
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

//Criar Atributos Imutáveis do objeto
Product.prototype.store = "First"

//Criar Funções Imutáveis do objeto (Mais performático)
Product.prototype.printName = function () {
  console.log(`Name:${this.name} / Price:${this.price}`)
}

//Criar Entidades
//p1 e p2 compartilham o__proto__ salario de User(Melhorando a performance)
const p1 = new Product('IPhone', 1000);
const p2 = new Product('IPhone', 1000);
//Chaves
const keys = Object.keys(p1)
console.log("KEYS", keys)

//valores
const values = Object.values(p1)
console.log("VALUES", values)

//Chaves e valores
console.log("KEY AND VALUES:", Object.entries(p1))
p1.price = 1600
p1.price = "Not Number"


//travar o objeto
Object.freeze(p1)
p1.name = "Android"
console.log(Object.keys(p1));
for (let key in p1) {
  console.log(`KEY:${key}, VALUE:${p1[key]}`)
}


//Aproveitando o prototype de Product
let obj3 = {
  Origin: "Brazil",
  name: "watch"
}
Object.setPrototypeOf(obj3, Product.prototype)
obj3.printName()


//Cria o objeto e seta o prototype
let obj4 = Object.create(Product.prototype)
obj4.name = "cap"
obj4.printName()

let obj5 = Object.create(Product.prototype, {
  name: { value: "handbag" }
})
obj5.printName()


// Herança
function Shirt(name, price, material, estoque) {
  Product.call(this, name, price);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
      enumerable: true,
      configurable: false,
      get: function () {
          return estoque;
      },
      set: function (valor) {
          if (typeof valor !== 'number') return;
          estoque = valor;
      }
  });
}
Shirt.prototype = Object.create(Product.prototype);
Shirt.prototype.constructor = Shirt;


const shirt = new Shirt('Nike', 13, 'cotton');
shirt.estoque = 100;
console.log(shirt);

//Polimorfismo




/* Transformar objeto em Global(exportação ideal para reutilizar em outro arquivo)
    (function (win, doc) {
      'use strict';
 
      //Codigo Script
 
      win.User = User;
    })(window, document)
    console.log(this.User)
    */





