//Una promesa es un proceso que me entrefa el resultado de un proceso asincrono. Mientras en proceso se cumple o no, tenemos algo con lo cual trabajar, tenemos mas control sobre la sincronicidad 

let promesa = new Promise((resolve, reject) => {
    resolve("Somos tecnico plus");
});

//ACca co then capturamos e valor de la resolucion de la promesa
promesa.then((res)=> {
    console.log("Valor del resolve", res);
});

//Promesa que siemre falle o se rechace
let promesaRechazada = new Promise((resolve,riject)=>{
    riject("Ha ocurrido un error");
});

promesaRechazada.catch((err)=>{
    console.log("Ha ocurrido el siguiente error", err);
});

//Promesa que depende de ser rechazada o cumplida, de una variable global

let peso = 90;
let promesaRechazadaCumplida= new Promise((resolve, reject) => {
    if(peso > 50){
        resolve("Se cumple el peso");
    }
    reject("No se cumple el peso")
});

// siempre debemos tratar el error en una promesa
promesaRechazadaCumplida.then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
});
