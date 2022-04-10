

const viewHour = () => {
    let data = new Date();
    const time = data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
    console.log(time)
}

//executa a cada 1000ms
const timer = setInterval(() => viewHour(), 1000);

//Encerra em 3000ms
setTimeout(() => {
    console.log('Clear Interval!');
    clearInterval(timer);
}, 3000);

