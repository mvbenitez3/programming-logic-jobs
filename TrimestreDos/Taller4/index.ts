//* Cree una función que reciba como argumento un número y retorne el cuadrado de éste cómo una promesa usando Async para ello. Luego, llame a la función y trate de imprimir su valor de retorno. ¿Cuál es el resultado de la impresión? ¿un valor numérico ? ¿una promesa ?

async function squareNumber(number:number) {
    return number*number;
}
//console.log(squareNumber(4));

//*Cree una función llamada “resultado” que retorne una promesa usando “return new Promise”, de tal manera que la promesa en su bloque de instrucciones implemente setTimeout demorandose seis segundos para resolverse con valor 8. Luego, llame a la función e imprima su resultado, ¿qué resultado obtiene? ¿una promesa?, ¿ un entero ?

function result(){
    return new Promise((resolve, reject) => {
        function pending() {
            resolve(8);
        }
        setTimeout(pending, 6000)
    })
}
//console.log(result());

//*Cree una función llamada “cuadradoAsincrono” que llame en su bloque de instrucciones a la función “resultado” definida anteriormente, de tal manera que la ejecución se detenga hasta obtener el valor retornado por “resultado”, luego, que eleve tal valor al cuadrado y este sea impreso. Use Async - Await. ¿Qué imprimió ? ¿una promesa?, ¿ un entero?

async function asynchronoussquare(){
    let returnResult:any = await result();
    returnResult = returnResult * returnResult;

    console.log(returnResult);
}
asynchronoussquare();