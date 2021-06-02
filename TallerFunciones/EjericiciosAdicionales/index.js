/*
1. Cree una función que imprima los números enteros entre a y b (tomando a y b)) y muestre el promedio de todos los números.
 */

function showIntegerNumbers(a, b){
    let sum = 0;
    let average; 

    console.log(`Números entre ${a} y ${b}`);   
    for (let index = a; index <= b ; index++) {
        console.log(`${indedx}`);
        sum += index;
        index++;
    }
    average = sum/(b-a+1);
    return average;
}

