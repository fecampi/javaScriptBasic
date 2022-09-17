//Disruption(desestruturação)
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
let pessoa = { nome: 'Felipe', idade: 28 }
let cliente = { ...pessoa, conta: '0101' }
console.log(cliente)


//(Destructuring:Desconstruir)
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



//(Destructuring com Spread e Rest
let nomes = {
	n1: 'Felipe',
	n2: 'Maria',
	n3: 'José'

}
let { n1, ...ns } = nomes
console.log(n1, ns)

//Função
function mostrar({ preco: p, detalhes: det } ={}) {
	console.log(p, det)
}

mostrar(produto)

