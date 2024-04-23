// Streams ->

// process.stdin.pipe(process.stdout);

/**
 * Streams:
 * Canais de comunicação para transferir dados em pedaços,
 * tornando o processo mais eficiente.
 */

/**
 * - `Readable Streams`:
 *   Fontes de dados que podem ser lidos.
 */

// // // Exemplo:Criando uma instância de OneToHundredStream
// const stream = new OneToHundredStream();
// // // Enviando os dados do stream para process.stdout (saída padrão)
// stream.sendTo(process.stdout);

/**
 * - `Writable Streams`:
 *   Destinos onde dados podem ser escritos.
 *
 * Process(in/out):
 * Contém informações sobre o processo atual.
 *
 * - `process.stdin`:
 *   É um Readable Stream que representa a entrada padrão (stdin) do processo.
 *   É uma fonte de dados de onde você pode ler informações fornecidas pelo usuário.
 *
 * - `process.stdout`:
 *   É um Writable Stream que representa a saída padrão (stdout) do processo.
 *   É um destino onde você pode escrever dados para serem exibidos no console.
 *
 * Exemplos de aplicação:
 *
 * - Streaming de video:
 *   Ao transmitir um vídeo, o servidor pode usar um Readable Stream para enviar os dados do vídeo
 *   para o cliente em pedaços, permitindo que o cliente comece a assistir o vídeo enquanto o restante é carregado.
 *
 */

// Streams ->

// process.stdin
//   .pipe(process.stdout)

import { Writable, Transform, Readable } from 'node:stream';
import http from 'node:http';

/**
/**
 * Uma classe utilitária para conversões de stream.
 */
export class StreamUtils {
  /**
   * Converte os dados do chunk para um número.
   * @param {Buffer|string} chunk - Dados a serem convertidos.
   * @returns {number} O número convertido.
   */
  static parseChunkToNumber(chunk) {
    return Number(chunk.toString());
  }

  /**
   * Converte um número em uma sequência de bytes.
   * @param {number} num - O número a ser convertido.
   * @returns {Buffer} - O número convertido em uma sequência de bytes.
   */
  static convertToBuffer(num) {
    return Buffer.from(String(num));
  }

  /**
   * Converte um array de buffers em uma string completa.
   * @param {Buffer[]} buffers - Array de buffers a serem concatenados.
   * @returns {string} - O conteúdo completo como uma string.
   */
  static concatBuffersToString(buffers) {
    return Buffer.concat(buffers).toString();
  }
}

/**
 * Uma classe que implementa um Readable Stream que emite números de 1 a 100 em pedaços.
 * @extends Readable
 */
export class StreamReadable extends Readable {
  /**
   * Cria uma instância de StreamReadable.
   */
  constructor() {
    super();
    this.index = 1; // Inicializa o índice
  }

  /**
   * Método interno (_read) que é chamado quando os dados devem ser lidos do stream.
   * Este método será invocado automaticamente quando o consumidor solicitar dados.
   * Ele emite números de 1 a 100 em pedaços, com um intervalo de 1 segundo entre eles.
   * Quando todos os números foram emitidos, ele emite um sinal de fim (null).
   * @private
   */
  _read() {
    const i = this.index++; // Obtém o próximo número da sequência

    // Aguarda 10 ms antes de emitir o próximo número
    setTimeout(() => {
      if (i > 100) {
        // Se todos os números foram emitidos, envia um sinal de fim (null)
        this.push(null);
      } else {
        // Caso contrário, converte o número em uma sequência de bytes e envia
        this.push(StreamUtils.convertToBuffer(i));
      }
    }, 10);
  }
}

class InverseNumberStreamTransform extends Transform {
  /**
   * Transforma os dados do chunk multiplicando-os por -1.
   * @param {Buffer} chunk - Dados a serem transformados.
   * @param {string} encoding - Codificação dos dados (opcional).
   * @param {Function} callback - Função de callback a ser chamada quando a transformação é concluída.
   */
  _transform(chunk, encoding, callback) {
    const parsedNumber = StreamUtils.parseChunkToNumber(chunk);
    const transformed = parsedNumber * -1;

    callback(null, StreamUtils.convertToBuffer(transformed));
  }
}

class WritableStream extends Writable {
  /**
   * Converte os dados do chunk para um número e os imprime no console.
   * @param {Buffer} chunk - Dados a serem escritos no stream.
   * @param {string} encoding - Codificação dos dados (opcional).
   * @param {Function} callback - Função de callback a ser chamada quando a operação for concluída.
   */
  _write(chunk, encoding, callback) {
    console.log(StreamUtils.parseChunkToNumber(chunk));
    callback();
  }
}

// Example local de stream
// new StreamReadable()
//   .pipe(new InverseNumberStreamTransform())
//   .pipe(new WritableStream());

/**
 * Cliente: Envia dados para o servidor usando um ReadableStream.
 * @summary Abre uma conexão com o servidor e envia dados.
 */

fetch('http://localhost:3334', {
  method: 'POST',
  body: new StreamReadable(),
})
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    console.log(data);
  });

/**
 * Servidor que transforma dados recebidos e os escreve.
 */
class DataTransformServer {
  /**
   * Cria uma instância do servidor.
   * @param {number} port - O número da porta para o servidor.
   */
  constructor(port) {
    /**
     * O número da porta do servidor.
     * @type {number}
     */

    // Cria o servidor HTTP e define o comportamento para cada solicitação recebida.
    const server = http.createServer((req) => {
      // Transforma os dados recebidos e escreve os dados transformados.
      req
        .pipe(new InverseNumberStreamTransform()) // Transforma os dados recebidos.
        .pipe(new WritableStream()); // Escreve os dados transformados.
    });

    // Inicia o servidor na porta especificada.
    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}

/**
 * Servidor que processa e responde com os dados recebidos.
 */
class DataProcessingServer {
  /**
   * Cria uma instância do servidor.
   * @param {number} port - O número da porta para o servidor.
   */
  constructor(port) {
    const server = http.createServer(async (req, res) => {
      const buffers = [];

      for await (const chunk of req) {
        buffers.push(chunk);
      }
      const fullStreamContent =  StreamUtils.concatBuffersToString(buffers)
      return res.end(fullStreamContent);
    });

    server.listen(port);
  }
}

new DataProcessingServer(3334);
