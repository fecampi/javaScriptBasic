
// conectar uma função a um objeto
const userOne = {
    firstName: 'Felipe',
    lastName: 'Ferreira'
}

const userTwo = {
    firstName: 'Teresa',
    lastName: 'Silva'
}


//Sem Bind name -> uma constante com o nome completo
const fullName1 = function(){
    return `${this.firstName}, ${this.lastName}`
}

//com bind...name1()  -> uma função que retorna o nome completo
const fullName2 = function(object){
    return `${object.firstName}, ${object.lastName}`
}

const name1 = fullName1.bind(userOne)
console.log(name1())

const name2 = fullName2(userTwo)
console.log(name2)


