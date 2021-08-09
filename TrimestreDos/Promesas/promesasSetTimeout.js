"use strict";
let promesaSetTimeout = new Promise((resolve, reject) => {
    function alarma() {
        resolve("Alarma activada");
    }
    setTimeout(alarma, 3000);
    function rechazo() {
        reject("Error en la alarma");
    }
    setTimeout(rechazo, 2000);
});
console.log("Estado de la promesa: ", promesaSetTimeout);
promesaSetTimeout.then((res) => {
    console.log("Me resolvi al cabo de 3 segundos usando setTimeout");
    console.log("Estado final de la promesa ", promesaSetTimeout);
}).catch((err) => {
    console.log("Error: ", err);
});
