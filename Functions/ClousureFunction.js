//Funções aninhadas ou closures (tem habilidade de acessar outros escopos) 
function myName(val) {
    let name;

    function setName() {
        if (val == 1) {
            name = 'Thiago';
        } else if (val == 2) {
            name = 'Thais';
        } else {
            name = 'Nenhum dado foi disponibilizado';
        }
        return name;
    }
    return setName();
}
const named = myName(1)
console.log(named);