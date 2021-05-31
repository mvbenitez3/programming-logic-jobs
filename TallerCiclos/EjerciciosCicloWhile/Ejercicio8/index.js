/*
8. Cree un programa que calcule la suma de los cuadrados de los números entre 1 y n.
*/

let enterN = parseFloat(prompt("Ingrese n"));
let sumSquares = calculaSumSquares(enterN);
console.log(`El suma de los cuadrados es: ${sumSquares}`);

function calculaSumSquares (n){
    let count = 1;
    let sum = 0;
    while(count <= n){
        sum += count*count;
        count++;
    }
    return sum;
}
