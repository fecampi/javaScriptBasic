//Função Callback(faz isso ou isso)
function exibirArtigo(verify, resolve, reject) {
    if (verify) {
        resolve('Funções de callback em JS!!')
    } else {
        reject('Erro ao recuperar os dados!!')
    }
}

//função1
const resolve = successMessage => {
    console.log("SUCESSO!!!")
    console.log(successMessage)
}

//função2
const reject = errorMessage => {
    console.log("ERROR!!!")
    console.log(errorMessage)
}

exibirArtigo(true, resolve, reject)