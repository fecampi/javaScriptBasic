axios.get('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json', {})
        .then(response => {
            console.log(response)
            console.log(response.data.members)
        })
        .catch(error => {
            console.log(error)
        })