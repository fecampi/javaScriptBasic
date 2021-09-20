//-----Programação Assíncrona--------

//Tratar funções que podem estar disponiveis agora no futuro ou nunca;
//Estados(Aguardando,Sucesso, Falha ou rejeitada)


let promisse0 = new Promise((resolve, reject) => {
    const FLAG = 5;
    if(FLAG ==5)
    resolve("Deu tudo certo")
    else
    reject(error("Deu algo errado"));
});


promisse0.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log("ERRO :",error);
})




//(2)Promises(forma mais sofisticada do callbacks)
function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            var deuErro = false;
            if(!deuErro){
                resolve({time: 6, email: para }) // Promessa OK!
            }else{
                reject("ERRO: Ocorreu tal erro...") // Foi mal, eu falhei :(
            }
        },2000)
    });
}

console.log("Inicio!");
        enviarEmail("Olá, como vai?","Fulano@fulano.com").then((dados) => {
            console.log(dados)
        }).catch(error => {
            console.log(error);
        }) 
console.log("FIM");


