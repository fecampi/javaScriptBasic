
const Product = require("./Product");

const fakeCreateProductService = () => {
  const product = new Product("Camiseta", 10);
  return product;
};


describe("CreateProduct", () => {
  //Limpa o ShoppingCart depois de cada cart
  afterEach(() => jest.clearAllMocks());

  it("should have properties name and price", () => {
    //1 = Criar o System under test
    const product = fakeCreateProductService ();
    //Se tem as propriedades
    expect(product).toHaveProperty("name", "Camiseta");
    //Se a propriedade tem o valor
    expect(product.price).toBeCloseTo(10.0);
  });

  it("should apply 10% discount on price", () => {
    const product = fakeCreateProductService ();
    expect(product.calculateDiscount(0.1)).toBeCloseTo(9);
  });

  it("should have methods to get name and idn for enterprise customers", () => {
    const product = fakeCreateProductService ();
    expect(product.getName()).toBe("Camiseta");
  });
});