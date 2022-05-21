//Forma formal
let person = new Object();
person.name = 'Felipe';
person.age = 30;
person.getFullName = function () {
  return `${this.name} Campinho`
}
for (key in person) {
  console.log(`KEY:${key}, VALUE:${person[key]}`)
}
console.log(person.getFullName());


//Forma literal
let person1 = {
  name: 'Felipe'
}


//Copiando as propriedades
let person2 = {
  ...person1,
  age: 18
}

//Copiando com  Assign
let person3 = Object.assign({}, person2)
console.log(person1["name"]);
console.log(person3.age);

//---Object Map---
const persons = [
  { id: 1, name: 'Felipe' },
  { id: 2, name: 'Carlos' },
  { id: 3, name: 'Luiz' }
]
//use atribute direct
const newPersons = {}
for (const person of persons) {
  const { id } = person
  newPersons[id] = { ...person}
}
//use set
const newPersonsMap = new Map
for (const person of persons) {
  const { id } = person
  newPersonsMap.set(id, {...person})
}
//use delete
newPersonsMap.delete(3)



console.log(newPersons)
console.log(newPersonsMap)


/* Transformar objeto em Global(exportação ideal para reutilizar em outro arquivo)
    (function (win, doc) {
      'use strict';
 
      //Codigo Script
 
      win.User = User;
    })(window, document)
    console.log(this.User)
    */





