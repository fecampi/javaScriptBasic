
//numbers
var num = 10
var decimal = 10.3233
var notNumber = 11 + "1"

// converter em string binaria
var num1 = num.toString(2)

//fixar casas para exibir 10.3233 -> 10.32
var num2 = decimal.toFixed(2)

//conferir se é inteiro
var num3 = Number.isInteger(num)

//converter para numero inteiro
var num4 = parseFloat(decimal.toFixed(0))
var numa = Number(decimal.toFixed(0))


//math

//valor de Pi
var math1 = Math.PI //

//valor de x arredondado para o número inteiro mais próximo
var math2 = Math.round(4.7)

//valor de x à potência de y
var math3 = Math.pow(8, 2)

//raiz quadrada de x
var math4 = Math.sqrt(64)

//valor absoluto (positivo) de x
var math5 = Math.abs(-4.7);

//valor de x arredondado para cima
var math6 = Math.ceil(4.4)

//valor de x arredondado para baixo
var math7 = Math.floor(4.7)

//seno do ângulo
var math8 = Math.sin(90 * Math.PI / 180)

//cosseno do ângulo
var math9 = Math.cos(90)

//valor mais alto da lista
var math10 = Math.max(0, 150, 30, 20, -8, -200)

//valor mais baixo da lista
var math11 = Math.min(0, 150, 30, 20, -8, -200)

//retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo)
var math12 = Math.random()

//retorna um número aleatório entre 10 (inclusive) e 5 (exclusivo)
var math12 = Math.round(Math.random() * (10 - 5) + 5)


console.log(math12)

