"use strict";
let thenEncadenado = new Promise((resolve, reject) => {
    resolve(2);
});
thenEncadenado.then((res) => {
    console.log("Resolve original:", res);
    let mul = res * 2;
    return mul;
}).then((res) => {
    console.log("Primer retorno:", res);
    return res + 5;
}).then((res) => {
    console.log("Valor final del encadenamiento", res);
});
