// Arrow function
//1
function sum(x, y) {
    return x + y;
}
console.log(sum(10, 5));
//2
let sumArrow = (x, y) => {
    return x + y;
}
console.log(sumArrow(3, 4));
//3
let sumArrow2 = (x, y) => x + y;
console.log(sumArrow2(6, 3));
//4
let dobroDovalue = x => x * 2;
console.log("Dobro do value:" + dobroDovalue(7));

