//Disruption(desestruturação)
//(Spread:Espalhar)	...	(Rest:Juntar)

//String
let nome = 'Felipe'
console.log(...nome)

//Arrays
let vogais = ['a', 'e', 'i', 'o', 'u']
let consoantes = ['b', 'c', 'd', 'e', 'f']
let numeros = ['1', '2', '3', '4', '5']
let todos = [...numeros, ...vogais, ...consoantes]
console.log(todos)


//(Destructuring:Desconstruir)
let coisas = [['Monitor', 'Teclado'], ['Felipe', 'Maria']]
let [, [, d, e = 'indefinido']] = coisas
console.log(d, e)


//(Destructuring com Spread e Rest
let [primeira, ...resto] = vogais
console.log('Primeira: ' + primeira + ' / Resto: ' + resto)


