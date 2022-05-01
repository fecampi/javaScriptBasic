//-----Programação Assíncrona--------
//(2)Promises(forma mais sofisticada do callbacks)
const enviarEmail = (corpo, para) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = false;
            if (!deuErro) {
                resolve({ time: 6, email: para }) // Promessa OK!
            } else {
                reject("ERRO: Ocorreu tal erro...") // Foi mal, eu falhei :(
            }
        }, 2000)
    });


console.log("Inicio!");
enviarEmail("Olá, como vai?", "Fulano@fulano.com").then((dados) => {
    console.log("SUCESSO: Tempo:" + dados.time + " to:" + dados.email)
}).catch(err => {
    console.log("FRACASSO: " + err);
})
console.log("FIM");


