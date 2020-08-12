function calculadora(op, a, b) {
    switch (op) {
        case "soma":
            return a + b;

        case "mult":
            return a * b;

        case "sub":
            return a - b;

        case "div":
            return a / b;

        default:
            return "Operação Invalida"

    }
}

module.exports = calculadora;