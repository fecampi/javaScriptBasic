class Order {
    constructor(name, cod, cart) {
      this.cart = cart;
      this._orderStatus = "open";
      this.name = name;
      this.cod = cod;
    }
  
    get orderStatus() {
      return this._orderStatus;
    }
  
    checkout() {
      if (this.cart.isEmpty()) {
        console.log("Seu carrinho está vazio");
        return;
      }
  
      this._orderStatus = "closed";
      console.log(
        `Seu pedido com total de foi recebido.`
      );
      this.cart.clear();
  
      console.log("O cliente é:", this.name, this.cod);
    }
  }

  module.exports = Order