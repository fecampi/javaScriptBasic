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

module.exports =  Product ;
