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

module.exports =  ShoppingCart;
