
    //Forma formal
    let person = new Object();
    person.name = 'Felipe';
    console.log(person);

    //Forma literal
    let person1 = {
      name: 'Felipe'
    }
    console.log(person1);
    let person2 = {
      name: 'Fernanda'
    }
    console.log(person2);


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




    //Classe
    //Uso: Objetos como múltiplas instâncias no mesmo contexto.
    //Exemplo:mais simples e clara de criar objetos e lidar com herança sem propriedades 'privadas'
    class AutomovelC {
      constructor() {
        this.rodas = 4
      }
    }

    class CarroC extends AutomovelC {
      constructor(cor) {
        super()
        this._modelo = 'Gol'
        this.cor = cor
      }

      mostrar() {
        console.log('CLASSE => MODELO:' + this._modelo + ' / COR: ' + this.cor + ' / RODAS: ' + this.rodas)
      }
    }

    let carro2 = new CarroC('Prata')
    carro2.mostrar()


    //Função construtora:
    //Uso: Objetos como múltiplas instâncias no mesmo contexto.
    //EXemplo: Criar métodos e propriedades privadas.

    let Automovel = function () {
      this.rodas = 4
    }


    let CarroF = function (cor) {

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



