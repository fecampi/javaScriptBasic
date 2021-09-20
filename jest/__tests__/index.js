const {mult, soma} = require("../src/index");


describe('testing index file', () => {
    test('mult function', () => {
      expect(mult(10,20)).toBe(200);
    });
  
    test('soma function', () => {
      expect(soma(20,40)).toBe(60);
    });
  });




