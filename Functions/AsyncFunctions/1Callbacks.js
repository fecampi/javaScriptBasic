//Função Callback(faz isso ou isso)
const xmlHttpRequest = (url, resolve, reject) => {
    setTimeout(() => {
        var isUrl = url == "www.teste.com/names"
        if (isUrl) {
            resolve({ status: 201, responseText: `{Name:Felipe, value: ${url}}` }) // Promessa OK!
        } else {
            reject({ status: 404 }) // Foi mal, eu falhei :(
        }
    }, 2000)
}

//Function resolve
const resolve = success => {
    const { status, responseText } = success
    console.log(`status:${status} / response: ${responseText}`)
}
//Function reject
const reject = error => {
    const { status } = error
    console.log(`status:${status}`)
}


console.log("Inicio!");
xmlHttpRequest("www.teste.com/names", resolve, reject)

