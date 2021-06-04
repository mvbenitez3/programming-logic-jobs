/*
2. Cree una función que imprima los números enteros entre a y b (tomando a y b)) y muestre el mayor de todos.
*/

let enterA = parseInt(prompt("ingrese el valor para a "));
let enterB = parseInt(prompt("ingrese el valor para b "));

let biggerNumber =  showBiggerNumber(enterA, enterB);

console.log(biggerNumber);

function showBiggerNumber(a, b){
    console.log(`Números entre ${a} y ${b}`); 
    let numMayor = a;
    while (a <= b){
        if(a > numMayor){
            numMayor = a;
        }
        console.log("numero: ", a);
        a++;
    }
    return numMayor;
}