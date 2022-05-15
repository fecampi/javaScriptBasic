

// O método Promise.resolve(value) retorna um objeto Promise que é resolvido com o valor passado.
//init
const xmlHttpRequestSecure = () => {
    const emCache = true;
    if (emCache) {
        return Promise.resolve({ status: 201, responseText: `{Name:Felipe_cache, value: cached}}` })
    } else {
        return Promise.reject({ status: 404 })
    }
}

xmlHttpRequestSecure()
    .then(success => {
        const { status, responseText } = success
        console.log(`status:${status} / response: ${responseText}`)
    })
    .catch(error => {
        const { status } = error
        console.log(`status:${status}`)
    })
    .finally(() => console.log("FIM"))



    //O método estático Promise.reject retorna uma Promise que é rejeitada.
//Para fins de debug e captura de erros seletiva
// init
const xmlHttpRequest = (url) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            var isUrl = url == "www.teste.com/names"
            if (isUrl) {
                resolve({ status: 201, responseText: `{Name:Felipe_server, value: ${url}}` }) // Promessa OK!
            } else {
                reject({ status: 404 }) // Foi mal, eu falhei :(
            }
        }, 2000)
    });
    

console.log('PROMISE - REJECT')
Promise.reject(xmlHttpRequest("www.teste.com/names", 2000)).catch(error => {
    const { status } = error
    console.log(`status:${status}`)
})
//end