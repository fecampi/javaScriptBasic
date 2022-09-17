class Persistency {
    saveOrder() {
      console.log('Pedido salvo com sucesso...');
    }
  }
  
  const createSut = () => {
    return new Persistency();
  }  


  //O que vou testar
  describe('Persistency', () => {
    //Limpa o SUT depois de cada teste
    afterEach(() => jest.clearAllMocks());
  
    it('should return undefined', () => {
      // System under test
      const sut = createSut();
      // espero que o retorno seja indefinido
      expect(sut.saveOrder()).toBeUndefined();
    });
    //spyON
    it('should call console.log once', () => {
      //1 = Criar o System under test
      const sut = createSut();
      //2- criar um espião [objeto], [método]
      const consoleSpy = jest.spyOn(console, 'log');
      //3 - executar
      sut.saveOrder();
      //4 - espero que seja chamado uma vez
      expect(consoleSpy).toHaveBeenCalledTimes(1);
    });
  
    it('should call console.log with "Pedido salvo com sucesso..."', () => {
      //1 = Criar o System under test
      const sut = createSut();
      //2- criar um espião [objeto], [método]
      const consoleSpy = jest.spyOn(console, 'log');
      //3 - executar
      sut.saveOrder();
      //4 - espero que seja chamado uma vez
      //Foi chamado exatamente com esse valor
      expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
    });
  });
  