/*
7. Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se introduzca el cero.
*/

let average = calculateAverage();
console.log(`El promedio es ${average}`);

function calculateAverage (){
    let count = 0;
    let sum = 0;
    let number = -1;
    while(number != 0){
        number = parseFloat(prompt(`Ingrese el número ${count+1}`));
        sum += number;
        count++;
    }
    return sum/(count-1);
}
