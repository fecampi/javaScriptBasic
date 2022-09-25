var events = require("events");

class ShoppingCart {
  constructor() {
    this._items = new Array();
    this.eventEmitter = new events.EventEmitter();
    this.on();
  }
  addItem(item) {
    if (Array.isArray(this._items)) {
      this._items.push(item);
    } else {
      console.log("arr variable does not store an array");
    }
  }

  total() {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  get items() {
    return this._items;
  }
  removeItem(index) {
    this.eventEmitter.emit("removeItem", this.items[index].name);
    this._items.splice(index, 1);
  }

  isEmpty() {
    return false;
  }
  clear() {
    console.log("Carrinho de compras foi limpo...");
    this._items.length = 0;
  }

  on(event, callback) {
    this.eventEmitter.on(event, value => {
      callback(value);
    });
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  calculateDiscount(discount) {
    return this.price - this.price * discount;
  }

  getName() {
    return this.name;
  }
}

//Criando o Moker
const fakeCreateShoppingCartWithProducts = () => {
  const shoppingCart = new ShoppingCart();
  const product1 = new Product("Camiseta", 10);
  const product2 = new Product("Caneta", 1);
  shoppingCart.addItem(product1);
  shoppingCart.addItem(product2);
  shoppingCart.on("removeItem", (value) => console.log(value))
  shoppingCart.removeItem(0);
  return { shoppingCart, product1, product2 };
};

const { shoppingCart } = fakeCreateShoppingCartWithProducts();
console.log(shoppingCart.items);
