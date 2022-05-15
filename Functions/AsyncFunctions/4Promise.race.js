
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

//A Primeira que resolver se tiver erro e resolveu uma sem problemas
const promises = [
    xmlHttpRequest("www.teste.com/names", 2000),
    xmlHttpRequest("www.teste.com/names", 1000),
    xmlHttpRequest("www.teste.com/name", 3000)]
Promise.race(promises)
.then(firstSuccess => {
    console.log(firstSuccess)
})
.catch(errorAll => {
    console.log(errorAll)
})
console.log("FIM");
