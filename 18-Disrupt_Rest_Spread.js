//Disruption(desestruturação)
//Objeto
const fonte = {
	tipo: 'arial',
	tamanho: 23,
	cor: {
		interna: 'verde',
		externa: 'azul',
	},

};
const { tipo, tamanho, cor: { interna } } = fonte;
console.log(tipo + ' ' + tamanho + ' ' + interna);


function corSombra({ cor: { externa } }) {
	console.log('Cor sombra:' + externa)
}
corSombra(fonte);


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

//Objetos
let pessoa = { nome: 'Felipe', idade: 28 }
let cliente = { ...pessoa, conta: '0101' }
console.log(cliente)


//(Destructuring:Desconstruir)

//Arrays
let coisas = [['Monitor', 'Teclado'], ['Felipe', 'Maria']]
let [, [, d, e = 'indefinido']] = coisas
console.log(d, e)

//Objeto
let produto = {
	descricao: 'Radio',
	preco: undefined,
	detalhes: {
		fabricante: 'Lg',
		modelo: '123abc'
	}

}
let { detalhes: { fabricante: fab }, preco: p = 'indefinido' } = produto
console.log(fab, p)

//Função
function mostrar({ preco: p, detalhes: det }) {
	console.log(p, det)
}

mostrar(produto)

//(Destructuring com Spread e Rest

//Arrays
let [primeira, ...resto] = vogais
console.log('Primeira: ' + primeira + ' / Resto: ' + resto)

//Objeto
let nomes = {
	n1: 'Felipe',
	n2: 'Maria',
	n3: 'José'

}
let { n1, ...ns } = nomes
console.log(n1, ns)

