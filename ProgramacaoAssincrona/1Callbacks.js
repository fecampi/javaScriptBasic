//-----Programação Assíncrona--------
//(1)CallBacks

//Função  Simuladas
function enviarEmail(corpo, callback) {
    setTimeout(() => {
        // Lógica.
        var deuErro = false;
        //Tratamento de erro.
        (deuErro) ? callback(2000, "O Envio do e-mail falhou!") : callback(2000);

    }, 2000)
}

//Procedimento com a passagem da função em callback como parâmetro.
console.log("INICIO CÓDIGO")
enviarEmail("Corpo do email......", (time, erro) => {
    (erro == undefined) ? console.log(`OK! Tempo: ${time}ms`) : console.log("Ocorreu um erro: " + erro)
});

