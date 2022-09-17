class Shopping_itens {
  constructor() {
    this._items = new Array();
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
    this._items.splice(index, 1);
  }

  isEmpty() {
    return false;
  }
  clear() {
    console.log("Carrinho de compras foi limpo...");
    this._items.length = 0;
  }
}

module.exports = Shopping_itens;
