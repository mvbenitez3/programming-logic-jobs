/*
4. Cree un programa que muestre los números impares entre 1 y n. 
*/

let enterN = parseInt(prompt("Ingrese n"));
showMultiplyTable(enterN);

function showMultiplyTable (n){
    let count = 0;
    while(count < n){
        if (count % 2 != 0) {
            console.log(`el número ${count} es impar`);            
        }
        count++;
    }
}
