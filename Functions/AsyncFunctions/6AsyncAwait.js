const xmlHttpRequest = (url, time = 1000) =>
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



const saveDB = (data) =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("SAVE_DB:", data)
            resolve({ status: "ok" }) // Promessa OK!
        }, 1000)
    });


const execute = async (url, time) => {
    try {
        const response = await xmlHttpRequest(url, 2000)
        const result = await saveDB(response.responseText)
        return result
    } catch (error) {
        throw (error)
    } finally {
        console.log(`All Tasks is Done`);
    }


}

execute("www.teste.com/names")
    .then(sucesso => console.log((sucesso)))
    .catch(err => console.log(err))