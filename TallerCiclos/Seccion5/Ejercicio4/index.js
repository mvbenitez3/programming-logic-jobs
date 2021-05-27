/*
4. Cree un programa que dado un número entero n, calcule su factorial(n!). Use ciclo for. Use funciones.
*/

let number = parseInt(prompt("Ingrese numero"));
let factorialNumber = calculateFactorial(number);
console.log(factorialNumber);

function calculateFactorial(number){
    let accumalator = 1;
    for (let index = 2; index <= number; index++) {
        accumalator = accumalator * index;
    }
    return accumalator;
}
