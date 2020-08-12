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

