/*
7. Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se introduzca el cero.
*/

let average = calculateAverage();
console.log(`El promedio es ${average}`);

function calculateAverage (){
    let count = 1;
    let sum = 0;
    let number = -1;
    do{
        number = parseFloat(prompt(`${count} Número`));
        sum += number;
        count++;
    }while(number != 0);
    return sum/(count-2);
}
