const Product = require("./Product");
const ShoppingCart = require("./ShoppingCart");
const Order = require("./Order");

//Criando o Moker
const fakeCreateShoppingCartWithProducts = () => {
  const shoppingCart = new ShoppingCart();
  const product1 = new Product("Camiseta", 10);
  const product2 = new Product("Caneta", 1);
  shoppingCart.addItem(product1);
  //remover camiseta
  shoppingCart.removeItem(0);
  //Adicionar camiseta
  shoppingCart.addItem(product1);
  shoppingCart.addItem(product2);

  return { shoppingCart, product1, product2 };
};

const createCartEmpty = () => {
  const shoppingCartMock = new ShoppingCart();
  const orderMock = new Order("Felipe", 202, shoppingCartMock);

  return {
    orderMock,
    shoppingCartMock,
  };
};

describe("ShoppingCart", () => {
  it("should have 2 cart items", () => {
    const { shoppingCart } = fakeCreateShoppingCartWithProducts ();
    expect(shoppingCart.items.length).toBe(2);
  });
});


describe("Order", () => {
  it("should not checkout if cart is empty", () => {
    const { orderMock, shoppingCartMock } = createCartEmpty();
    //Espiar "isEmpty" e finge que o método retorno "true"
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, "isEmpty")
      .mockReturnValueOnce(true);
    //Chamar o método checkout
    orderMock.checkout();
    //Verificar se o método "IsEmpty" foi chamado.
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    // e Verificar se o orderStatus é igual a open
    expect(orderMock.orderStatus).toBe("open");
  });
});


//Cobertura de testes