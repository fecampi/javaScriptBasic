//importar comum e com apelido
import {soma, sub as subtracao} from './funcoes.js';

//importar como default
import dividir from './div.js';

//importar como objeto
import * as funcoes from './operador.js';


//require (importação somente no nNODE)
var exibirnome = require("./modulo");

console.log(soma(1,2));
console.log(subtracao(3,1));
console.log(dividir(6,2));
console.log(funcoes.mult(2,4))
console.log(exibirnome);