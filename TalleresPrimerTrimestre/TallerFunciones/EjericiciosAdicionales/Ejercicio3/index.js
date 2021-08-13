/*
3. Cree una función que imprima el punto medio del intervalo (a, b), con a,b enteros.
*/

let enterA = parseInt(prompt("ingrese el valor para a "));
let enterB = parseInt(prompt("ingrese el valor para b "));
showMiddlePoint(enterA, enterB);

function showMiddlePoint(a, b){
    let sum = 0;
    let middlePoint;
    console.log(`Números entre ${a} y ${b}`);   
    for (let index = a; index <= b ; index++) {
        console.log(`${index}`);
        sum += index;
    }
    middlePoint = sum/2;
    console.log(`El ppunto medio es: ${middlePoint}`);  
}