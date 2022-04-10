var items = [
    { name: 'And', value: 1 },
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 },
    { name: 'And', value: 10 }
];


const order = 1

items.sort(function (a, b) {
    if (a.name == b.name) {
        if (a.value > b.value) {
            return + order;
        }
        if (a.value < b.value) {
            return -order;
        }
        return 0;
    } else {
        if (a.name > b.name) {
            return 1
        }
        if (a.name < b.name) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }
});

console.log(items)