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
  
  
  //Cria o objeto e seta o prototype
  let obj4 = Object.create(Product.prototype)
  obj4.name = "cap"
  
  
  let obj5 = Object.create(Product.prototype, {
    name: { value: "handbag" }
  })
  
  
  
