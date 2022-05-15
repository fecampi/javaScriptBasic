var events = require('events');
var eventEmitter = new events.EventEmitter();

//ON 
eventEmitter.on('prepare', (valor1, valor2) => {
    console.log(valor1,valor2);
});

eventEmitter.on('prepare', (valor1, valor2) => console.log(valor1,valor2));

eventEmitter.on('prepare', console.log.bind(this))


//Fire the 'prepare' event:
eventEmitter.emit('prepare', "oi", "ol");


