const xmlHttpRequest = (url, time) =>
new Promise((resolve, reject) => {
    setTimeout(() => {
        var isUrl = url == "www.teste.com/names" 
        if (isUrl) {
            resolve({ status: 201, responseText: `{Name:Felipe, value: ${url}}`, time }) // Promessa OK!
        } else {
            reject({ status: 404 }) // Foi mal, eu falhei :(
        }
    }, time)
});


console.log("Inicio!");
//Resolver Todas se tiver erro em alguma rejeita todas
const promises = [
    xmlHttpRequest("www.teste.com/names", 2000),
    xmlHttpRequest("www.teste.com/names", 1000),
    xmlHttpRequest("www.teste.com/names", 3000)]
Promise.all(promises)
.then(success => {
    console.log(success)
})
.catch(error => {
    console.log(error)
})
console.log("FIM");

