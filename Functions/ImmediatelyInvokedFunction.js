// IIFE -> Immediately invoked function expression
((message) => {

    const init = "PRINT: "
    function addText(text) {
        return init + ' ' + text;
    }

    function printMessage() {
        console.log(addText(message));
    }

    printMessage();


})("message immediately print");