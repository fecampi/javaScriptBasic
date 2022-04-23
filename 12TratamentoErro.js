const addNumber = (x, y) => {

	const xIsNotNumber = typeof x !== 'number'
	const yIsNotNumber = typeof y !== 'number'

	console.log("INICIO")
	if (xIsNotNumber && yIsNotNumber) {
		throw new TypeError('x e y precisam ser números.');
	}
	console.log("PASSO_1")
	if (xIsNotNumber) {
		throw new Error('x precisa ser número.');
	}

	console.log("PASSO_2")
	if (yIsNotNumber) {
		throw new Error('y precisa ser número.');
	}
	console.log("PASSO_3")
	return x + y;
}

try {
	const number = addNumber('1', 2)
	console.log("O numero é",number);
} catch (error) {
	console.log(error);
} finally {
	console.log("finally: Executa sempre no fim!!")
}