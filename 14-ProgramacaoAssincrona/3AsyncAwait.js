//-----Programação Assíncrona--------
//(3)AsyncAwait(forma mais sofisticada do callbacks)
function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)   
        },500)
    })
}
function buscarEmailNoBanco(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fulano@fulano.com.br")
        },1000);
    })
}
function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            var deuErro = false;
            if(!deuErro){
                resolve({time: 6, email: para }) // Promessa OK!
            }else{
                reject("ERRO: Ocorreu tal erro...") // Foi mal, eu falhei :(
            }
        },1500)
    });
}

//Promisses aninhadas(confuso)
/*
console.log("Inicio!");
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => { 
        enviarEmail("Olá, como vai?",email).then(() => {
            console.log("Email enviado, para o usuário com id: " + id)
        }).catch(err => {
            console.log(err);
        })
    })
})
console.log("FIM");
*/

//AsyncAwait(Fácil) 
async function principal(){
    
    //(1)pega esperando
    var id = await pegarId();
    console.log("PEGOU ID: "+id)
 
    //(2)pega tratando o erro
    try{
        var email = await buscarEmailNoBanco(id)
        console.log("BANCO DE DADOS ACESSADO!");
    }catch(erro){   
        console.log(erro);
    }

    //(3)como envio de e-mail pode demorar (assíncrono,libera para outros)
    enviarEmail("Olá, como vai?",email).then(() => {
        console.log("Email enviado, para o usuário com id: " + id)
    }).catch(err => {
        console.log(err);
    })
}
principal();

