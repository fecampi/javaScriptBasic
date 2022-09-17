function sum(a, b) {
  return a + b;
}

// npm run test:silent depois o, ele só executa o teste que está editando
it("adds 1 + 4 not equal 4", () => {
  // toBe = retorn
  expect(sum(1, 4)).toBe(5);
});

//Descrição da bateria de testes
//teste com valores primitivos
describe("Primitive values", () => {
  it("adds 1 + 4 not equal 4", () => {
    // toBe = retorn
    expect(sum(1, 4)).toBe(5);
  });
  it("should test jest assertions", () => {
    const number = 10;
    const numberNull = null;

    //Retorna  (checa com object is - não funciona com objeto)
    expect(number).toBe(10);

    //Não retorna
    expect(number).not.toBe(4);

    //Igual (util em objetos)
    expect(number).toEqual(10);

    //Se numero é maior que 9
    expect(number).toBeGreaterThan(9);

    //Se numero é maior ou igual
    expect(number).toBeGreaterThanOrEqual(10);

    //Se numero é menor que 11
    expect(number).toBeLessThan(11);

    //Se numero é menor ou igual a 10
    expect(number).toBeLessThanOrEqual(10);

    //Espero que 10 esteja perto de 10.001
    expect(number).toBeCloseTo(10, 1);
    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    //É nulo
    expect(numberNull).toBeNull();

    //Não é nulo
    expect(number).not.toBeNull();

    //Não é falso
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    //Se number tem propriedade = number[propriedade]
    expect(number).toHaveProperty("toString");
  });
});

//teste com objetos
describe("Objects", () => {
  it("should test jest assertions with objects", () => {
    const person = { name: "Felipe", age: 75 };
    const anotherPerson = { ...person };

    // .toEqual = igual (util em objetos)
    expect(person).toEqual(anotherPerson);

    // Tem a propriedade
    expect(person).toHaveProperty("age");

    //Não tem a propriedade
    expect(person).not.toHaveProperty("lastName");

    //tem a propriedade e se ela tem o valor
    expect(person).toHaveProperty("age", 75);

    //checar dentro do objeto
    expect(person.age).toBe(75);
  });
});
