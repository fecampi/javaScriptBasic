
/*
/*Aritméticos
	+ 	// Adição
	- 	// Subtração
	* 	// Multiplicação
	** 	// Exponenciação (ES2016)
	/ 	// Divisão
	% 	// De módulo (restante da divisão)
	++ 	// Incremento
	- 	// Decremento
*/



//Operadores aritiméticos
let numberA = 2;
let numberB = 3;
let numberC = '3';
let stringA = 'texto';
console.log(numberA + numberB);
console.log(numberA + stringA);
console.log(numberA - 3);
console.log(numberA += 3);
console.log(numberA / 2);
for (let i = 10; i > 5; i--) {
    console.log(i);
}


/*
//Atribuição
	x = y	// x = y
	x += y	// x = x + y
	x -= y	// x = x - y
	x *= y	// x = x * y
	x /= y	// x = x / y
	x %= y	// x = x % y
	x **= y	// x = x ** y
*/

/*
//Comparação
	== 		//igual a
	===		//valor igual e tipo igual
	!=		//não é igual
	!==		//valor não igual ou tipo não igual
	> 		//maior que
	<		//menos que
	>=	 	//maior ou igual a
	<= 		//menor ou igual a
	? 		//operador ternário
*/

console.log(numberA == numberB);
console.log(numberB != numberC);
console.log(numberA === numberB);
console.log(numberB !== numberC);
console.log(numberA <= numberB);


/*
//Lógicos
	&&		//lógica e
	|| 		//lógico ou
	! 		//lógico não

*/


//Operador lógico AND
if (numberA == 2 && numberB == 3) {
    console.log("São iguais");
}

//Operador lógico OR
if (numberA == 2 || numberB == 3) {
    console.log("São iguais");
}

