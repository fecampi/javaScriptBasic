//-----Programação Assíncrona--------
//(2)Promises(forma mais sofisticada do callbacks)
const xmlHttpRequest = (url) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            var isUrl = url == "www.teste.com/names"
            if (isUrl) {
                resolve({ status: 201, responseText: `{Name:Felipe, value: ${url}}` }) // Promessa OK!
            } else {
                reject({ status: 404 }) // Foi mal, eu falhei :(
            }
        }, 2000)
    });


console.log("Inicio!");
xmlHttpRequest("www.teste.com/names")
    .then(success => {
        const { status, responseText } = success
        console.log(`status:${status} / response: ${responseText}`)
    })
    .catch(error => {
        const { status } = error
        console.log(`status:${status}`)
    })
    .finally(() => console.log("FIM"))


